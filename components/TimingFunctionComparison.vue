<script setup lang="ts">
import { computed } from "vue";
import TimingFunction from "./TimingFunction.vue";

const props = defineProps<{
  clicks: number;
}>();

const paths = {
  linear: "M 0 100 L 100 0",
  easeIn: "M 0 100 C 42 100, 100 0, 100 0",
  easeOut: "M 0 100 C 0 100, 58 0, 100 0",
  cubicBezier: "M 0 100 C 68 155, 27 -55, 100 0",
};

const currentPath = computed(() => {
  switch (props.clicks) {
    case 5:
      return paths.linear;
    case 6:
      return paths.easeIn;
    case 7:
      return paths.easeOut;
    case 8:
      return paths.cubicBezier;
    default:
      return null;
  }
});

const currentLabel = computed(() => {
  switch (props.clicks) {
    case 1:
    case 5:
      return "linear";
    case 2:
    case 6:
      return "ease-in";
    case 3:
    case 7:
      return "ease-out";
    case 4:
    case 8:
      return "cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    default:
      return undefined;
  }
});
</script>

<template>
  <div
    v-if="currentLabel"
    class="ball absolute left-25 bottom-15 rounded-[50%] w-20 h-20 bg-red"
  />

  <div class="circle absolute left-20 bottom-10 rounded-[50%] w-30 h-30">
    <div
      class="absolute -top-10 left-1/2 -translate-x-1/2 text-green font-bold text-6"
    >
      Start
    </div>
  </div>

  <div class="circle absolute right-20 bottom-10 rounded-[50%] w-30 h-30">
    <div
      class="absolute -top-10 left-1/2 -translate-x-1/2 text-green font-bold text-6"
    >
      End
    </div>
  </div>

  <!-- Timing function graph -->
  <template v-if="clicks >= 5">
    <div
      v-if="currentPath"
      class="graph-container absolute bottom-8 left-[25vw] right-[25vw] h-1/2"
    >
      <TimingFunction
        class="opacity-40"
        :path="currentPath"
        :timing-function="currentLabel"
      />
      <div
        class="absolute -top-30 left-1/2 text-3 -translate-x-1/2 transition-all flex gap-2 flex-row nowrap justify-center items-center"
      >
        <span style="margin-right: 0.5rem">animation: </span>
        <div class="label">startEnd</div>
        <div class="label">1s</div>
        <div class="label anim-float z-10">{{ currentLabel }}</div>
        <div class="label">alternate</div>
        <div class="label">infinite</div>
      </div>
      <!-- Graph indicator - moves along the curve -->
      <div class="indicator-wrapper">
        <div class="indicator" />
      </div>
    </div>

    <div class="text-primary absolute left-[20vw] bottom-5">0/0</div>
    <div class="text-primary absolute right-[20vw] bottom-74">1/1</div>
  </template>
</template>

<style scoped>
.circle {
  border: 10px solid green;
}

.label {
  color: #cfff00;
  white-space: nowrap;
}

.ball {
  animation: move-it 1s infinite alternate;
  animation-timing-function: v-bind(currentLabel);
}

@keyframes move-it {
  to {
    left: 82%;
  }
}

/* Graph indicator that traces the curve */
.indicator-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 16px;
  height: 100%;
  animation: move-horizontal 1s infinite alternate linear;
}

.indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--slidev-theme-primary);
  border-radius: 50%;
  animation: move-vertical 1s infinite alternate;
  animation-timing-function: v-bind(currentLabel);
}

@keyframes move-horizontal {
  from {
    left: -1rem;
  }
  to {
    left: calc(100% - 1rem);
  }
}

@keyframes move-vertical {
  from {
    bottom: -1rem;
  }
  to {
    bottom: calc(100% - 1rem);
  }
}
</style>
