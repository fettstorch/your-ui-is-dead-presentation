<script setup lang="ts">
import { awaitable } from "@fettstorch/jule";
import { Rive, RiveParameters } from "@rive-app/canvas";
import { until } from "@vueuse/core";
import { useTemplateRef } from "vue";

/**
 * RiveCanvas is a component that renders a Rive animation.
 * Its opinionated in trying to maintain an
 */

const props = defineProps<{
  debug?: boolean;
  riveParams: Partial<Exclude<RiveParameters, "canvas">>;
}>();

const canvasRef = useTemplateRef("canvasRef");
const rive = awaitable<Rive>();

const defaultRiveParameters: Partial<RiveParameters> = {
  autoplay: true,
  onLoad: async () => {
    const r = await rive;

    r.resizeDrawingSurfaceToCanvas();
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
        ...props.riveParams,
        canvas,
      }),
    );
  });
</script>

<template>
  <canvas ref="canvasRef" id="canvas" :class="{ debug: props.debug }"></canvas>
</template>

<style scoped>
#canvas.debug {
  border: 2px solid green;
}
</style>
