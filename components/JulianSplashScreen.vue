<script setup lang="ts">
import { ref, watch } from "vue";
import RiveJulian from "./RiveJulian.vue";
import { until, watchImmediate } from "@vueuse/core";
import { sleep } from "@fettstorch/jule";

const { waving } = defineProps<{
  waving: boolean;
}>();

const riveRef = ref<InstanceType<typeof RiveJulian>>();

watchImmediate(
  () => waving,
  (value) => {
    until(riveRef)
      .toBeTruthy()
      .then(async (rive) => {
        rive.waving = value;
      });
  },
);
</script>

<template>
  <RiveJulian ref="riveRef" happy />
</template>
