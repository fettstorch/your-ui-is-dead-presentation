<script setup lang="ts">
import { animate } from "motion";
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { ref } from "vue";

const { clicks } = defineProps<{
  clicks: number;
}>();

const pbBgRefs = ref<HTMLElement[]>([]);
const pbFillRefs = ref<HTMLElement[]>([]);

const setPbBgRef = (el) => {
  if (el instanceof HTMLElement) pbBgRefs.value.push(el);
};

const setPbFillRef = (el) => {
  if (el instanceof HTMLElement) pbFillRefs.value.push(el);
};

let hasAnimated = false;

onSlideEnter(() => {
  if (hasAnimated) return;
  hasAnimated = true;

  pbBgRefs.value.forEach((el, i) => {
    animate(
      el,
      { transform: ["translateY(-100%)", "translateY(0%)"], opacity: [0, 1] },
      { duration: 0.5, ease: "easeOut", delay: 0.3 * (i + 1) },
    );
  });
});

onSlideLeave(() => {
  hasAnimated = false;
});

let transformFilled = false;
let widthFilled = false;
let leftFilled = false;

const transformDurationMs = ref(500);

function toggleTransformFill() {
  animate(
    pbFillRefs.value[0],
    { transform: `translateX(${transformFilled ? "-100" : "0"}%)` },
    { duration: transformDurationMs.value / 1000, ease: "easeOut" },
  ).then(() => {
    transformFilled = !transformFilled;
  });
}

function toggleWidthFill() {
  animate(
    pbFillRefs.value[2],
    { width: `${widthFilled ? "0" : "100"}%` },
    { duration: 0.5, ease: "easeOut" },
  ).then(() => {
    widthFilled = !widthFilled;
  });
}

function toggleLeftFill() {
  animate(
    pbFillRefs.value[1],
    { left: `${leftFilled ? "-100" : "0"}%` },
    { duration: 0.5, ease: "easeOut" },
  ).then(() => {
    leftFilled = !leftFilled;
  });
}
</script>

<template>
  <div class="absolute inset-0 flex flex-col justify-center gap-6 items-center">
    <!-- progress bar - transform -->
    <div class="wrapper relative transform-animated" :ref="setPbBgRef" @click="toggleTransformFill">
      Animating via transform translateX
      <label v-if="clicks >= 2" class="anim-in-top duration-input absolute right-0 text-3 italic">
        <span>Anim. Duration:</span>
        <input v-model.number="transformDurationMs" type="number" min="0" step="100" @click.stop />
        <span>ms</span>
      </label>
      <div class="pb-bg pb-transform" :class="{ 'contain-paint': clicks < 1 }">
        <div class="pb-fill pb-transform will-change-transform" :ref="setPbFillRef"></div>
      </div>
      <div class="pb-bg pb-transform contain-paint"">
        <div class=" pb-fill pb-transform translate-x-[-50%]!"></div>d
    </div>
    <div class="pb-bg pb-transform contain-paint">
      <div class="pb-fill pb-transform translate-x-[0%]!"></div>
    </div>
  </div>

  <!-- progress bar - left -->
  <div class="wrapper left-animated" :ref="setPbBgRef" @click="toggleLeftFill">
    Animating via absolute position left
    <div class="pb-bg pb-left" :class="{ 'overflow-hidden': clicks < 1 }">
      <div class="pb-fill pb-left" :ref="setPbFillRef"></div>
    </div>
    <div class="pb-bg pb-left contain-paint">
      <div class="pb-fill pb-left left-[-50%]!"></div>
    </div>
    <div class="pb-bg pb-left contain-paint"">
        <div class=" pb-fill pb-left left-[0%]!"></div>
  </div>
  </div>

  <!-- progress bar - width -->
  <div class="wrapper width-animated transition-all duration-1000" :ref="setPbBgRef" @click="toggleWidthFill"
    :class="{ 'hover:gap-4!': clicks >= 2 }">
    Animating via width
    <div v-if="clicks >= 2" class="text-3 italic opacity-50">Hover to animate gap - what is repainted?</div>
    <div class="pb-bg pb-width" :class="{ 'contain-paint': clicks < 1 }">
      <div class="pb-fill pb-width" :ref="setPbFillRef"></div>
    </div>
    <div class="pb-bg pb-width contain-paint">
      <div class="pb-fill pb-width w-[50%]!"></div>
    </div>
    <div class="pb-bg pb-width contain-paint" ">
        <div class=" pb-fill pb-width w-[100%]!"></div>
  </div>
  </div>
  </div>

  <div class="wrapper info-stuff absolute bottom-5 -right-35 text-2 italic">
    <Typewriter immediate :delay="2000">ℹ️ Open DevTools > Layers Panel</Typewriter>
    <Typewriter immediate :delay="3000">ℹ️ Open DevTools > Rendering > Paint Flashing</Typewriter>
    <Typewriter immediate :delay="5000">ℹ️ Open DevTools > Performance > Throttle CPU / Record Timeline</Typewriter>
  </div>
</template>

<style scoped>
.pb-fill {
  border-radius: inherit;
  background: linear-gradient(to right in oklch, white, magenta);
  height: 100%;
}

.pb-fill.pb-transform {
  width: 100%;
  transform: translateX(-100%);
}

.pb-fill.pb-width {
  width: 0%;
}

.pb-fill.pb-left {
  position: absolute;
  width: 100%;
  top: 0;
  left: -100%;
}

.pb-bg {
  position: relative;
  border-radius: 1rem;
  height: 1rem;
  width: 15rem;
  background: darkgray;
  box-shadow: inset 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
}

.wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 0.2rem;
}

.duration-input {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.duration-input input {
  min-width: 5ch;
  field-sizing: content;
  padding: 0.125rem 0.25rem;
  border: 1px solid #666;
  border-radius: 0.25rem;
  background: #333;
  color: inherit;
  text-align: right;
}

.duration-input span {
  color: #999;
}
</style>
