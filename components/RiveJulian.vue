<script setup lang="ts">
import RiveCanvas from "./RiveCanvas.vue";
import { Rive, StateMachineInput } from "@rive-app/canvas";
import { awaitable } from "@fettstorch/jule";
import { watch } from "vue";

const { model = "Julian" } = defineProps<{
  model?: "Julian" | "Sven";
}>();

const rive = awaitable<Rive>();

// Optional v-model bindings - work as internal state if no v-model provided
const sad = defineModel<boolean>("sad", { default: false });
const suspicious = defineModel<boolean>("suspicious", { default: false });
const amazed = defineModel<boolean>("amazed", { default: false });
const happy = defineModel<boolean>("happy", { default: false });
const sitting = defineModel<boolean>("sitting", { default: false });
const unsure = defineModel<boolean>("unsure", { default: false });
const angry = defineModel<boolean>("angry", { default: false });
const angryWaving = defineModel<boolean>("angryWaving", { default: false });
const nersch = defineModel<boolean>("nersch", { default: false });
const walking = defineModel<boolean>("walking", { default: false });
const waving = defineModel<boolean>("waving", { default: false });
const jump = defineModel<boolean>("jump", { default: false });

watch(
  sad,
  async (value) => {
    const r = await rive;
    const sadInput = getInput(r, "sad");
    if (sadInput) sadInput.value = value;
  },
  { immediate: true },
);

watch(
  suspicious,
  async (value) => {
    const r = await rive;
    const suspiciousInput = getInput(r, "suspicious");
    if (suspiciousInput) suspiciousInput.value = value;
  },
  { immediate: true },
);

watch(
  amazed,
  async (value) => {
    const r = await rive;
    const amazedInput = getInput(r, "amazed");
    if (amazedInput) amazedInput.value = value;
  },
  { immediate: true },
);

watch(
  happy,
  async (value) => {
    const r = await rive;
    const happyInput = getInput(r, "happy");
    if (happyInput) happyInput.value = value;
  },
  { immediate: true },
);

watch(
  sitting,
  async (value) => {
    const r = await rive;
    const sittingInput = getInput(r, "sitting");
    if (sittingInput) sittingInput.value = value;
  },
  { immediate: true },
);

watch(
  unsure,
  async (value) => {
    const r = await rive;
    const unsureInput = getInput(r, "unsure");
    if (unsureInput) unsureInput.value = value;
  },
  { immediate: true },
);

watch(
  angry,
  async (value) => {
    const r = await rive;
    const angryInput = getInput(r, "angry");
    if (angryInput) angryInput.value = value;
  },
  { immediate: true },
);

watch(
  angryWaving,
  async (value) => {
    const r = await rive;
    const angryWavingInput = getInput(r, "angryWaving");
    if (angryWavingInput) angryWavingInput.value = value;
  },
  { immediate: true },
);

watch(
  nersch,
  async (value) => {
    const r = await rive;
    const nerschInput = getInput(r, "nersch");
    if (nerschInput) nerschInput.value = value;
  },
  { immediate: true },
);

watch(
  walking,
  async (value) => {
    const r = await rive;
    const walkingInput = getInput(r, "walking");
    if (walkingInput) walkingInput.value = value;
  },
  { immediate: true },
);

watch(
  waving,
  async (value) => {
    const r = await rive;
    const wavingInput = getInput(r, "waving");
    if (wavingInput) wavingInput.value = value;
  },
  { immediate: true },
);

watch(jump, async () => {
  const r = await rive;
  const jumpInput = getInput(r, "jump");
  if (jumpInput) jumpInput.fire();
});

defineExpose({
  nersch,
  walking,
  waving,
  jump,
});

function getInput(r: Rive, name: string): StateMachineInput | undefined {
  return r.stateMachineInputs("sm1")?.find((i) => i.name === name);
}
</script>

<template>
  <RiveCanvas
    :riveParams="{
      src: '/julian.riv',
      stateMachines: 'sm1',
      artboard: model,
    }"
    :out="rive"
  />
</template>
