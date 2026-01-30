<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { ref } from "vue";

const props = defineProps<{ delayMs?: number }>();

const isActive = ref(false);

onSlideEnter(() => {
  setTimeout(() => {
    isActive.value = true;
  }, props.delayMs ?? 0);
});

onSlideLeave(() => {
  isActive.value = false;
});
</script>

<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>
