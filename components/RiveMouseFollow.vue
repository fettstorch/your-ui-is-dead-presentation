<script setup lang="ts">
import { watchImmediate } from "@vueuse/core";
import RiveCanvas from "./RiveCanvas.vue";
import { awaitable } from "@fettstorch/jule";
import { Rive, StateMachineInput } from "@rive-app/canvas";

const { hands } = defineProps<{
  hands: boolean;
}>();

const rive = awaitable<Rive>();

watchImmediate(
  () => hands,
  async () => {
    const r = await rive;
    const handsInput = getInput(r, "withArms");
    if (handsInput) handsInput.value = hands;
  },
);

function getInput(r: Rive, name: string): StateMachineInput | undefined {
  return r.stateMachineInputs("State Machine 1")?.find((i) => i.name === name);
}
</script>

<template>
  <RiveCanvas
    :riveParams="{
      src: '/julian.riv',
      artboard: 'FollowMouse',
      stateMachines: 'State Machine 1',
      autoplay: true,
    }"
    :out="rive"
  />
</template>
