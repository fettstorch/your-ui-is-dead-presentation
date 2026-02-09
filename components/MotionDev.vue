<script setup lang="ts">
import { animate, AnimationPlaybackControls } from "motion";
import { onMounted, onUnmounted, ref, watch } from "vue";
import * as THREE from "three";

const { clicks } = defineProps<{
  clicks: number;
}>();

const wrapperRef = ref<HTMLDivElement>();
const canvasRef = ref<HTMLCanvasElement>();
let renderer: THREE.WebGLRenderer | null = null;
let animationFrameId: number | null = null;

const geometry = new THREE.BoxGeometry(1.9, 1.9, 1.9, 8, 8, 8);
const originalPositions = geometry.getAttribute("position").array.slice();

const material = new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  emissive: 0xff6b6b,
  emissiveIntensity: 0.6,
  metalness: 0,
  roughness: 1,
});
const cube = new THREE.Mesh(geometry, material);

let camera: THREE.PerspectiveCamera | null = null;

let canvasTranslation: AnimationPlaybackControls | null = null;
let cubeRotation1: AnimationPlaybackControls | null = null;
let cubeRotation2: AnimationPlaybackControls | null = null;
let cubeRotation3: AnimationPlaybackControls | null = null;

watch(
  () => clicks,
  async () => {
    if (clicks === 1) {
      // Create and start animations (must be after mount so refs exist)
      cubeRotation1 = animate(0, -Math.PI * 2, {
        duration: 1.2,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          cube.rotation.z = latest;
        },
      });

      canvasTranslation = animate(
        canvasRef.value!,
        { x: ["0%", "30%"] },
        {
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      );
    } else if (clicks === 2) {
      cubeRotation1?.stop();
      canvasTranslation?.stop();
      animate(cube.rotation.z, -Math.PI * 2, {
        duration: 0.25,
        ease: "easeOut",
        onUpdate: (latest) => {
          cube.rotation.z = latest;
        },
        onComplete: () => {
          cube.rotation.z = 0; // Reset to 0 for next animation
        },
      });
      animate(
        canvasRef.value!,
        { x: "0%" },
        { duration: 0.25, ease: "easeOut" },
      );
    } else if (clicks === 3) {
      setInterval(() => {
        material.wireframe = !material.wireframe;
      }, 3000);
      animate(1, 1.7, {
        duration: 0.4,
        ease: "easeOut",
        onUpdate: (latest) => {
          cube.scale.set(latest, latest, latest);
        },
      });
      // Separate animations so each axis loops smoothly
      cubeRotation3 = animate(0, Math.PI * 2, {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          cube.rotation.y = latest;
        },
      });
      cubeRotation2 = animate(0, Math.PI * 2, {
        duration: 12,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          cube.rotation.x = latest;
        },
      });
      animate(cube.position, new THREE.Vector3(-1.3, -0.3, 0), {
        duration: 0.4,
        ease: "easeOut",
        onUpdate: (latest) => {
          cube.position.set(latest.x, latest.y, latest.z);
        },
      });
      // Animate camera to distance itself from the cube
      animate(camera!.position.z, 6, {
        duration: 0.6,
        ease: "easeOut",
        onUpdate: (latest) => {
          camera!.position.z = latest;
        },
      });
    } else if (clicks === 4) {
      // Morph cube vertices into a sphere
      const sphereRadius = 1.65;

      animate(cube.position, new THREE.Vector3(-5.8, -0.3, 0), {
        duration: 0.4,
        ease: "easeOut",
        onUpdate: (latest) => {
          cube.position.set(latest.x, latest.y, latest.z);
        },
      });

      animate(camera!.position.z, 8, {
        duration: 0.6,
        ease: "easeOut",
        onUpdate: (latest) => {
          camera!.position.z = latest;
        },
      });

      const positionAttr = geometry.getAttribute("position");
      animate(0, 1, {
        duration: 0.7,
        ease: [0.62, 4.9, 1, -0.21], // aggressive overshoot
        repeat: Infinity,
        repeatType: "mirror",
        onUpdate: (t) => {
          for (let i = 0; i < positionAttr.count; i++) {
            const ox = originalPositions[i * 3];
            const oy = originalPositions[i * 3 + 1];
            const oz = originalPositions[i * 3 + 2];

            // Normalize to sphere surface
            const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
            const sx = (ox / length) * sphereRadius; //;
            const sy = (oy / length) * sphereRadius; //;
            const sz = (oz / length) * sphereRadius; //;

            // Lerp between cube and sphere
            positionAttr.array[i * 3] = ox + (sx - ox) * t;
            positionAttr.array[i * 3 + 1] = oy + (sy - oy) * t;
            positionAttr.array[i * 3 + 2] = oz + (sz - oz) * t;
          }
          positionAttr.needsUpdate = true;
          geometry.computeVertexNormals(); // Recalculate normals for proper lighting
        },
      });
    }
  },
);

onMounted(() => {
  if (!canvasRef.value || !wrapperRef.value) return;

  const canvas = canvasRef.value;
  const wrapper = wrapperRef.value;
  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;

  // Scene setup
  const scene = new THREE.Scene();

  // Camera (aligned with cube at origin)
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  // Renderer (use existing canvas, transparent background)
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Cube
  scene.add(cube);

  // Lighting - low ambient + directional for normal-based shading
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Render loop
  function renderLoop() {
    animationFrameId = requestAnimationFrame(renderLoop);
    renderer?.render(scene, camera!);
  }
  renderLoop();

  // Handle resize
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      camera!.aspect = width / height;
      camera!.updateProjectionMatrix();
      renderer?.setSize(width, height);
    }
  });
  resizeObserver.observe(wrapper);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<template>
  <div
    ref="wrapperRef"
    class="w-full h-full transition-all duration-1000"
    :class="{
      '-translate-x-101 translate-y-50': clicks < 3,
    }"
  >
    <canvas ref="canvasRef" class="block w-full h-full"></canvas>
  </div>
</template>
