<script setup lang="ts">
import { Awaitable, awaitable } from "@fettstorch/jule";
import { Rive, RiveParameters } from "@rive-app/canvas";
import { until, useDebounceFn } from "@vueuse/core";
import { useTemplateRef } from "vue";

/**
 * RiveCanvas is a component that renders a Rive animation.
 * Its opinionated in trying to maintain an
 */

const {
  debug = false,
  riveParams,
  out = undefined,
} = defineProps<{
  debug?: boolean;
  riveParams: Partial<Exclude<RiveParameters, "canvas">>;
  out?: Awaitable<Rive>;
}>();

const canvasRef = useTemplateRef("canvasRef");
const rive = awaitable<Rive>();
let aspectRatio: number | null = null;

function updateCanvasHeight(canvas: HTMLCanvasElement) {
  if (aspectRatio) {
    canvas.style.height = `${canvas.clientWidth / aspectRatio}px`;
  }
}

function resizeDrawingSurface(r: Rive) {
  r.resizeDrawingSurfaceToCanvas();
}

const defaultRiveParameters: Partial<RiveParameters> = {
  autoplay: true,
  onLoadError: () => {},
  onLoad: async () => {
    const r = await rive;
    const canvas = canvasRef.value!;

    // Get artboard aspect ratio
    const bounds = r.bounds;
    if (bounds) {
      const artboardWidth = bounds.maxX - bounds.minX;
      const artboardHeight = bounds.maxY - bounds.minY;
      aspectRatio = artboardWidth / artboardHeight;
    }

    updateCanvasHeight(canvas);
    resizeDrawingSurface(r);

    // Debounce the expensive drawing surface resize
    const debouncedResizeDrawingSurface = useDebounceFn(() => {
      resizeDrawingSurface(r);
    }, 150);

    // Watch for width changes and recalculate height
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasHeight(canvas);
      debouncedResizeDrawingSurface();
    });
    resizeObserver.observe(canvas);

    out?.resolve(r);
  },
};

defineExpose({
  rive,
});

until(canvasRef)
  .toBeTruthy()
  .then((canvas) => {
    rive.resolve(
      new Rive({
        ...defaultRiveParameters,
        ...riveParams,
        canvas,
      }),
    );
  });
</script>

<template>
  <canvas
    width="50000"
    height="50000"
    ref="canvasRef"
    id="canvas"
    :class="{ debug }"
  ></canvas>
</template>

<style scoped>
#canvas {
  /* Width should be set via style prop; height is calculated from artboard aspect ratio */
  display: block;
}

#canvas.debug {
  border: 2px solid green;
}
</style>
