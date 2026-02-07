<script setup lang="ts">
import { Awaitable, awaitable } from "@fettstorch/jule";
import { Rive, RiveParameters } from "@rive-app/canvas";
import { until } from "@vueuse/core";
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

const defaultRiveParameters: Partial<RiveParameters> = {
  autoplay: true,
  onLoad: async () => {
    const r = await rive;
    const canvas = canvasRef.value!;

    // Get artboard aspect ratio
    const bounds = r.bounds;
    if (bounds) {
      const artboardWidth = bounds.maxX - bounds.minX;
      const artboardHeight = bounds.maxY - bounds.minY;
      const aspectRatio = artboardWidth / artboardHeight;

      // Set CSS height based on width and aspect ratio
      canvas.style.height = `${canvas.clientWidth / aspectRatio}px`;
    }

    // Now resize drawing surface with proper CSS dimensions set
    r.resizeDrawingSurfaceToCanvas();

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
