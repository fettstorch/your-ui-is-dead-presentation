<script setup lang="ts">
import { ref, watch } from "vue";
import PipelineStep from "./PipelineStep.vue";
import { useThrottleFn } from "@vueuse/core";

const { clicks } = defineProps<{
  clicks: number;
}>();

interface Box {
  id: number;
  bgColor: string;
  borderColor: string;
  width: string;
}

const colorCombos = [
  { bg: "#60a5fa", border: "#1d4ed8" }, // blue
  { bg: "#4ade80", border: "#15803d" }, // green
  { bg: "#f472b6", border: "#be185d" }, // pink
  { bg: "#facc15", border: "#a16207" }, // yellow
  { bg: "#a78bfa", border: "#5b21b6" }, // purple
  { bg: "#fb923c", border: "#c2410c" }, // orange
  { bg: "#2dd4bf", border: "#0f766e" }, // teal
  { bg: "#f87171", border: "#b91c1c" }, // red
];

const widths = ["10%", "12%", "14%", "11%", "13%", "15%", "9%", "16%"];

let nextId = 0;

function createBox(): Box {
  const colorCombo =
    colorCombos[Math.floor(Math.random() * colorCombos.length)];
  const width = widths[Math.floor(Math.random() * widths.length)];
  return {
    id: nextId++,
    bgColor: colorCombo.bg,
    borderColor: colorCombo.border,
    width,
  };
}

const boxes = ref<Box[]>(Array.from({ length: 13 }, () => createBox()));

const styleInvocation = ref(0);
const layoutInvocation = ref(0);
const paintInvocation = ref(0);
const compositeInvocation = ref(0);

const styleIsActive = ref(false);
const layoutIsActive = ref(false);
const paintIsActive = ref(false);
const compositeIsActive = ref(false);

watch(styleInvocation, () => {
  styleIsActive.value = true;

  setTimeout(() => {
    styleIsActive.value = false;
    layoutInvocation.value += 1;
  }, 1000);
});

watch(layoutInvocation, () => {
  layoutIsActive.value = true;

  setTimeout(() => {
    paintInvocation.value += 1;
    layoutIsActive.value = false;
  }, 1000);
});

watch(paintInvocation, () => {
  paintIsActive.value = true;

  setTimeout(() => {
    compositeInvocation.value += 1;
    paintIsActive.value = false;
  }, 1000);
});

watch(compositeInvocation, () => {
  compositeIsActive.value = true;

  setTimeout(() => {
    compositeIsActive.value = false;
  }, 1000);
});

function addBox() {
  boxes.value.push(createBox());
}

function removeFirstBox() {
  if (boxes.value.length > 0) {
    boxes.value.shift();
  }
}

function removeBox(id: number) {
  const idx = boxes.value.findIndex((b) => b.id === id);
  if (idx !== -1) {
    boxes.value.splice(idx, 1);
  }
}

function removeRandomBox() {
  if (boxes.value.length === 0) return;
  const idx = Math.floor(Math.random() * boxes.value.length);
  boxes.value.splice(idx, 1);
}

const handleScroll = useThrottleFn((event: Event) => {
  if (clicks < 14) return;
  compositeInvocation.value += 1;
}, 1000);

const handleHover = useThrottleFn(() => {
  if (clicks < 14) return;
  layoutInvocation.value += 1;
}, 1000);

const handleHoverTitle = useThrottleFn(() => {
  if (clicks < 14) return;
  compositeInvocation.value += 1;
}, 1000);

const handleHoverNavbar = useThrottleFn(() => {
  if (clicks < 14) return;
  paintInvocation.value += 1;
}, 1000);

const isBodyActive = ref(false);

const handleMouseDownBody = useThrottleFn((event: MouseEvent) => {
  if (clicks < 14) return;
  // Only trigger if clicking directly on page-render, not children
  if (event.target === event.currentTarget) {
    isBodyActive.value = true;
    layoutInvocation.value += 1;
  }
}, 1000);

const handleClickNavbar = useThrottleFn(() => {
  if (clicks < 14) return;
  layoutInvocation.value += 1;
});

const handleMouseUpBody = () => {
  isBodyActive.value = false;
};

watch(
  () => boxes.value.length,
  useThrottleFn((valNow, valBefore) => {
    if (clicks < 14) return;
    if (valNow > valBefore) {
      styleInvocation.value += 1;
    } else {
      layoutInvocation.value += 1;
    }
  }),
);

defineExpose({ addBox, removeBox, removeFirstBox, removeRandomBox, boxes });
</script>
<template>
  <div class="page-render-wrapper">
    <!-- Page -->
    <div
      class="w-full h-full anim-in-bottom transition-all duration-1000"
      :class="{
        'scale-60 -translate-x-40 translate-y-20': clicks === 12,
      }"
      style="transform-style: preserve-3d"
    >
      <div
        class="page-render w-full h-full rounded-xl overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 flex flex-col justify-start items-center transition-all duration-1000"
        :class="{
          '-translate-x-120': clicks >= 4 && clicks < 9,
          layerize: clicks >= 9 && clicks < 13,
          naked: clicks === 10,
          'p-x-10': clicks > 14 && isBodyActive,
        }"
        @mousedown="handleMouseDownBody"
        @mouseup="handleMouseUpBody"
      >
        <!-- Header / navbar -->
        <div
          class="nav-bar absolute top-0 left-0 nav-bar h-10 bg-gray-800 flex flex-row justify-between items-center px-4 rounded-t-xl"
          style="width: calc(100% + 0.1rem)"
          :class="{
            'hover:bg-blue-500! transition-all duration-1000': clicks > 14,
            'active:h-20!': clicks > 14,
          }"
          @mouseenter="handleHoverNavbar"
          @mouseleave="handleHoverNavbar"
          @mousedown="handleClickNavbar"
          @mouseup="handleClickNavbar"
        >
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div class="text-white text-sm">Home</div>
          <div class="text-white text-sm">Info</div>
          <div class="text-white text-sm">Settings</div>
        </div>

        <!-- Body -->
        <!-- Title -->
        <h2
          class="title mt-11 text-primary"
          :class="{
            'hover:scale-130 transition-transform duration-1000': clicks > 14,
          }"
          @mouseenter="handleHoverTitle"
          @mouseleave="handleHoverTitle"
        >
          Awesome Page
        </h2>

        <!-- Subtitle -->
        <h3 class="text-orange-300">Managing some boxes</h3>

        <!-- Controls -->
        <div class="flex gap-2 my-2">
          <button
            class="control-btn w-8 h-8 rounded bg-white/20 hover:bg-white/30 active:scale-90 text-white font-bold text-xl flex items-center justify-center transition-all duration-150"
            @click="removeFirstBox"
          >
            −
          </button>
          <button
            class="control-btn w-8 h-8 rounded bg-white/20 hover:bg-white/30 active:scale-90 text-white font-bold text-xl flex items-center justify-center transition-all duration-150"
            @click="addBox"
          >
            +
          </button>
        </div>

        <!-- Boxes -->
        <TransitionGroup
          name="box"
          tag="div"
          class="box-wrapper w-full h-full flex flex-row gap-2 flex-wrap justify-start items-start content-start p-2 overflow-y-auto"
          @scroll="handleScroll"
          @click.stop="() => {}"
        >
          <div
            v-for="box in boxes"
            :key="box.id"
            class="box"
            :style="{
              backgroundColor: box.bgColor,
              borderColor: box.borderColor,
              width: box.width,
            }"
            @click="removeBox(box.id)"
            @mouseenter="handleHover"
            @mouseleave="handleHover"
          />
        </TransitionGroup>
      </div>
    </div>

    <div
      class="absolute -bottom-22 flex flex-row transition-all duration-1000"
      :class="{
        'gap-2 left-2': clicks < 3,
        'gap-0 left-7': clicks >= 3,
        'translate-y-20': clicks >= 4 && clicks < 14,
      }"
    >
      <div class="anim-in-bottom">
        <PipelineStep
          v-if="clicks >= 2"
          class="transition-all duration-1000"
          :class="{
            'translate-x-165 -translate-y-125': clicks >= 4 && clicks < 7,
          }"
          :is-active="styleIsActive || (clicks >= 4 && clicks < 7)"
          text="Style"
          color="#a855f7"
          :arrow="clicks >= 3"
          @click="styleInvocation += 1"
        />
      </div>

      <div class="anim-in-bottom">
        <PipelineStep
          v-if="clicks >= 2"
          class="transition-all duration-1000"
          :class="{
            'translate-x-133 -translate-y-125': clicks >= 7 && clicks < 9,
          }"
          :is-active="layoutIsActive || (clicks >= 7 && clicks < 9)"
          text="Layout"
          color="#ca8a04"
          :arrow="clicks >= 3"
          style="animation-delay: 300ms"
          @click="layoutInvocation += 1"
        />
      </div>

      <div class="anim-in-bottom">
        <PipelineStep
          v-if="clicks >= 2"
          class="transition-all duration-1000"
          :class="{
            'translate-x-100 -translate-y-125': clicks >= 9 && clicks < 12,
          }"
          :is-active="paintIsActive || (clicks >= 9 && clicks < 12)"
          text="Paint"
          color="#22c55e"
          :arrow="clicks >= 3"
          style="animation-delay: 600ms"
          @click="paintInvocation += 1"
        />
      </div>

      <div class="anim-in-bottom">
        <PipelineStep
          v-if="clicks >= 2"
          class="transition-all duration-1000"
          :class="{
            'translate-x-68 -translate-y-125': clicks >= 12 && clicks < 14,
          }"
          :is-active="compositeIsActive || (clicks >= 12 && clicks < 14)"
          text="Composite"
          color="#5eead4"
          :arrow="clicks >= 3"
          style="animation-delay: 900ms"
          @click="compositeInvocation += 1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@layer defaults {
  .page-render {
    position: relative;
  }
  .page-render-wrapper {
    position: relative;
  }
}

.box {
  height: 3rem;
  border: 4px solid;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.box:hover {
  opacity: 0.8;
  margin-inline: 0.5rem;
}

.box:active {
  transform: scale(0.9);
}

/* TransitionGroup animations */
.box-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.box-enter-active {
  transition: all 0.3s ease;
}

.box-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.box-leave-active {
  position: absolute;
  transition: all 1.5s ease-out;
  pointer-events: none;
}

.box-move {
  transition: transform 0.3s ease;
}

/* Pipeline step animation */
.pipeline-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.pipeline-enter-active {
  transition: all 0.5s ease-out;
}

.pipeline-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.pipeline-leave-active {
  transition: all 0.3s ease-in;
}

/* Box model visualization - base state (transparent, no layout shift) */
.show-box-model {
  padding: 0.2em 0.5em;
  border: 2px solid transparent;
  outline: 8px solid transparent;
  outline-offset: 0;
  background-color: transparent;
  transition: all 0.3s ease;
}

/* Box model visualization - active state */
.show-box-model.on {
  background-color: rgba(195, 231, 174, 0.8); /* Padding - green */
  border-color: #f6d98c; /* Border - yellow */
  outline-color: rgba(249, 204, 157, 0.8); /* Margin - orange */
}

/** 3D layerization effects */

.page-render-wrapper {
  perspective: 1000px;
}

.page-render.layerize {
  transform-style: preserve-3d;
  transform: rotateY(50deg) rotateX(-10deg) scale(0.8);
  overflow: visible !important;
}

.layerize .nav-bar {
  transition: all 1s 1s ease;
  transform: translateY(-0.2em) translateZ(2em);
}
.layerize .box-wrapper {
  transition: all 1s 1s ease;
  transform: translateY(1em) translateZ(3em);
}

.layerize .box-wrapper {
  transform-style: flat; /* Prevent children from inheriting 3D context - fixes overflow scroll */
}

/* Ensure controls remain clickable in 3D space */
.layerize .control-btn {
  position: relative;
  z-index: 10;
}

/** Naked layer visualization - elements become plain layer rectangles */
.page-render.naked {
  background: rgba(249, 204, 157, 0.8) !important;
  transition: none !important;
}

.naked .nav-bar,
.naked .box-wrapper {
  background: rgba(249, 204, 157, 0.8) !important;
  transition: none !important;
}

/* Hide content inside layers, not the layers themselves */
.naked .nav-bar > *,
.naked .title,
.naked h3,
.naked .control-btn,
.naked .box-wrapper .box {
  visibility: hidden;
}
</style>
