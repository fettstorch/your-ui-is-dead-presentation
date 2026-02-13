<script setup lang="ts">
import { computed, useId } from "vue";

const {
  text = "",
  color = "#5eead4",
  arrow = false,
  isActive = false,
} = defineProps<{
  isActive?: boolean;
  text?: string;
  color?: string;
  arrow?: boolean;
}>();

const clipId = useId();

const width = 130;
const height = 60;
const arrowDepth = 20;
const strokeWidth = 3;
const s = strokeWidth / 2;

const shapePath = computed(() => {
  const d = arrow ? arrowDepth : 0;

  // 6-point path: top-left, top-right, right-point, bottom-right, bottom-left, left-indent
  // Left indent points INTO the shape (to the right), right point extends OUT (to the right)
  // SVG path elements:
  // M = Move to (starting point)
  // L = Line to (draw line to coordinates)
  // Z = Close path (connect back to starting point)
  return `
    M ${s} ${s}
    L ${width - d - s} ${s}
    L ${width - s} ${height / 2}
    L ${width - d - s} ${height - s}
    L ${s} ${height - s}
    L ${d + s} ${height / 2}
    Z
  `;
});

const fillColor = computed(
  () => `color-mix(in srgb, ${color} 20%, transparent)`,
);

const activeFillColor = computed(
  () => `color-mix(in srgb, ${color} 40%, transparent)`,
);
</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    class="pipeline-step"
  >
    <defs>
      <clipPath :id="clipId">
        <rect
          x="0"
          y="0"
          :height="height"
          class="fill-clip-rect"
          :class="{ 'fill-clip-rect--active': isActive }"
        />
      </clipPath>
    </defs>
    <path
      :style="{ d: `path('${shapePath.replace(/\s+/g, ' ').trim()}')` }"
      :stroke="color"
      :stroke-width="strokeWidth"
      :fill="fillColor"
      class="pipeline-shape"
      :class="{ 'pipeline-shape--active': isActive }"
    />
    <!-- Active fill layer with clip animation -->
    <path
      v-if="isActive"
      :style="{ d: `path('${shapePath.replace(/\s+/g, ' ').trim()}')` }"
      :fill="activeFillColor"
      :clip-path="`url(#${clipId})`"
      class="pipeline-fill"
    />
    <text
      :x="width / 2"
      :y="height / 2"
      :fill="color"
      dominant-baseline="central"
      text-anchor="middle"
      class="pipeline-text"
      :class="{ 'translate-x-[0.4em]': arrow }"
    >
      <slot>{{ text }}</slot>
    </text>
  </svg>
</template>

<style scoped>
.pipeline-step {
  display: inline-block;
}

.pipeline-shape {
  transition: d 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pipeline-text {
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.4s;
}

.pipeline-shape--active {
  stroke-dasharray: 8 10;
  animation: dash-march 0.1s linear infinite;
}

@keyframes dash-march {
  to {
    stroke-dashoffset: -18;
  }
}

.fill-clip-rect {
  width: 0;
}

.fill-clip-rect--active {
  animation: fill-sweep 1s ease-out forwards;
}

@keyframes fill-sweep {
  from {
    width: 0;
  }
  to {
    width: 130px;
  }
}
</style>
