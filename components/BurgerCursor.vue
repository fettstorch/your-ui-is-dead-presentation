<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { onSlideLeave } from "@slidev/client";
import { watchImmediate } from "@vueuse/core";

const { clicks } = defineProps<{
  clicks: number;
}>();

watchImmediate(
  () => clicks,
  (c) => {
    if (c >= 2) {
      activate();
    }
  },
);

const cursorPos = ref({ x: 0, y: 0 });

function updateCursor(e: MouseEvent) {
  cursorPos.value = { x: e.clientX, y: e.clientY };
}

function activate() {
  document.body.style.cursor = "none";
  window.addEventListener("mousemove", updateCursor);
}

function deactivate() {
  document.body.style.cursor = "";
  window.removeEventListener("mousemove", updateCursor);
}

onSlideLeave(deactivate);
onUnmounted(deactivate);
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed pointer-events-none z-50"
      :class="{
        'opacity-0': clicks < 2 || clicks >= 4,
      }"
      :style="{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        width: '20vw',
        aspectRatio: clicks === 2 ? '1 / 1' : '16 / 9',
        transform: `translate(-50%, ${clicks === 3 ? '-25' : '-50'}%)`,
        background: `url(/${clicks === 2 ? 'volleyball.png' : 'burgir.png'}) no-repeat center center / 100% 100%`,
      }"
    />
  </Teleport>
</template>
