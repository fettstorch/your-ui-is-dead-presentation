<script setup lang="ts">
import { until, watchImmediate } from "@vueuse/core";
import { useTemplateRef } from "vue";

const { clicks } = defineProps<{
  clicks: number;
}>();

const elRef = useTemplateRef("elRef");

watchImmediate(
  () => clicks,
  () => {
    if (clicks === 2) {
      moveX();
    }
    if (clicks === 4) {
      rotate();
    }
  },
);

function moveX() {
  until(elRef)
    .toBeTruthy()
    .then((el) => {
      el.animate(
        [
          {
            transform: "translateX(0)",
          },
          {
            transform: "translateX(150%)",
          },
        ],
        {
          duration: 1000,
          easing: "ease-in-out",
          iterations: Infinity,
          direction: "alternate",
        },
      );
    });
}

function rotate() {
  until(elRef)
    .toBeTruthy()
    .then((el) => {
      el.animate(
        [
          {
            transform: "rotate(0deg)",
          },
          {
            transform: "rotate(360deg)",
          },
        ],
        {
          duration: 1000,
          easing: "linear",
          iterations: Infinity,
          composite: "add",
        },
      );
    });
}
</script>

<template>
  <div ref="elRef" class="web-animations-api-el w-40 h-40 bg-red"></div>
</template>
