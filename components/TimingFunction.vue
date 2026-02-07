<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  path: string
  width?: number
  height?: number
  timingFunction?: string
}>()

const width = computed(() => props.width ?? 100)
const height = computed(() => props.height ?? 100)

// Create a closed path for the fill area (path + bottom edge)
const fillPath = computed(() => {
  return `${props.path} L ${width.value} ${height.value} L 0 ${height.value} Z`
})
</script>

<template>
  <svg :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="none" class="timing-function-graph">
    <!-- Fill area below the curve -->
    <path 
      :d="fillPath" 
      class="graph-fill"
    />
    <!-- Stroke line -->
    <path 
      :d="path" 
      class="graph-stroke"
    />
  </svg>
</template>

<style scoped>
.timing-function-graph {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.graph-fill {
  fill: rgba(207, 255, 0, 0.2);
}

.graph-stroke {
  fill: none;
  stroke: #CFFF00;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}

</style>
