<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { computed, nextTick, ref, watch } from "vue";

type NormalizedPoint = [number, number];

interface ArrowConfig {
  start: NormalizedPoint;
  end: NormalizedPoint;
  controlPoints?: [NormalizedPoint, NormalizedPoint] | [NormalizedPoint];
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
}

const { config } = defineProps<{
  config: ArrowConfig;
}>();

const start = computed(() => config.start);
const end = computed(() => config.end);
const controlPoints = computed(() => config.controlPoints ?? []);
const color = computed(() => config.color ?? "yellowgreen");
const strokeWidth = computed(() => config.strokeWidth ?? 2);
const animationDuration = computed(() => config.animationDuration ?? 1);
const arrowHeadSize = computed(() => 2.5 * Math.pow(strokeWidth.value, 0.2));

const svgRef = ref<SVGSVGElement | null>(null);
const pathRef = ref<SVGPathElement | null>(null);
const markerId = `arrowhead-${Math.random().toString(36).slice(2, 9)}`;
const { width, height } = useElementSize(svgRef);

const pathLength = ref(0);
const isReady = ref(false);

watch(
  [width, height],
  async ([w, h]) => {
    console.debug("AHA: watch width/height w=" + w + " h=" + h);
    if (w > 0 && h > 0 && pathRef.value && !isReady.value) {
      await nextTick();
      const len = pathRef.value!.getTotalLength();
      console.debug("AHA: pathLength=" + len);
      if (len > 0) {
        pathLength.value = len;
        isReady.value = true;
        console.debug("AHA: isReady=true");
      }
    }
  },
  { immediate: true },
);

const viewBox = computed(() => `0 0 ${width.value} ${height.value}`);

const path = computed(() => {
  const [sx, sy] = toAbsolute(start.value);
  const [ex, ey] = toAbsolute(end.value);
  const startPoint = `M ${sx} ${sy}`;

  // CASE: straight line
  if (controlPoints.value.length === 0) {
    return `${startPoint} L ${ex} ${ey}`;
  }

  // CASE: cubic bezier
  if (controlPoints.value.length === 2) {
    const [c1x, c1y] = toAbsolute(controlPoints.value[0]);
    const [c2x, c2y] = toAbsolute(controlPoints.value[1]);
    return `${startPoint} C ${c1x} ${c1y} ${c2x} ${c2y} ${ex} ${ey}`;
  }

  // CASE: quadratic bezier
  const [cx, cy] = toAbsolute(controlPoints.value[0]);
  return `${startPoint} Q ${cx} ${cy} ${ex} ${ey}`;
});

// --- utility

const toAbsolute = (point: NormalizedPoint): [number, number] => [
  point[0] * width.value,
  point[1] * height.value,
];
</script>

<template>
  <svg
    ref="svgRef"
    class="absolute inset-0 w-full h-full"
    style="min-width: 100%; min-height: 100%"
    :viewBox
  >
    <defs>
      <marker
        :id="markerId"
        :markerWidth="arrowHeadSize"
        :markerHeight="arrowHeadSize"
        :refX="arrowHeadSize / 2"
        :refY="arrowHeadSize / 2"
        orient="auto"
      >
        <polygon
          :class="{ 'fade-in': isReady }"
          :style="{
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDuration * 0.8}s`,
          }"
          :points="`0 0, ${arrowHeadSize} ${arrowHeadSize / 2}, 0 ${arrowHeadSize}`"
          :fill="color"
        />
      </marker>
    </defs>

    <!-- the Arrow -->
    <path
      ref="pathRef"
      :d="path"
      :stroke="color"
      :stroke-width="strokeWidth"
      :stroke-dasharray="isReady ? pathLength : undefined"
      :stroke-dashoffset="isReady ? pathLength : undefined"
      :class="{ 'animate-draw': isReady, 'opacity-0': !isReady }"
      :style="
        isReady ? { animationDuration: `${animationDuration}s` } : undefined
      "
      stroke-linecap="round"
      stroke-linejoin="round"
      :marker-end="`url(#${markerId})`"
      fill="none"
    />
  </svg>
</template>

<style scoped>
.animate-draw {
  animation-name: draw;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

polygon.fade-in {
  animation-name: fadeIn;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
