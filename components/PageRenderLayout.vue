<script setup lang="ts"></script>
<template>
  <div class="">
    <div
      class="page-render w-full h-full overflow-hidden bg-gray-500 flex flex-col justify-start items-center transition-transform duration-1000 gradient-mask"
    >
      <!-- Header -->
      <div
        class="absolute top-0 left-0 nav-bar h-10 bg-gray-900 flex flex-row justify-between items-center px-4"
        style="width: calc(100% + 0.1rem)"
      >
        <div
          class="anim-in-fade absolute top-0 left-0 w-full h-10 bg-yellow-900 flex flex-row justify-between items-center px-4"
          style="animation-delay: 1s"
        ></div>
      </div>

      <!-- Body -->
      <!-- Title -->
      <h2
        class="relative title mt-13 text-primary show-box-model bg-gray h-[1.3em] w-60"
      >
        <div
          class="anim-in-fade absolute w-[120%] h-[145%] bg-purple-500 top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
          style="animation-delay: 1s"
        />
      </h2>

      <!-- Subtitle -->
      <h3 class="relative text-orange-300 mt-2 bg-gray h-[1.3em] w-80">
        <div
          class="anim-in-fade absolute w-[110%] h-[123%] bg-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
          style="animation-delay: 2s"
        />
      </h3>

      <!-- Controls -->
      <div class="relative flex gap-2 my-[0.41em]">
        <div
          class="anim-in-fade absolute w-[200%] h-[123%] bg-blue-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
          style="animation-delay: 2.5s"
        />

        <button
          class="relative control-btn w-8 h-8 bg-gray hover:bg-white/30 active:scale-90 text-white font-bold text-xl flex items-center justify-center transition-all duration-150"
        >
          <div
            class="anim-in-fade absolute w-[124%] h-[123%] bg-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
            style="animation-delay: 3s"
          />
        </button>
        <button
          class="relative control-btn w-8 h-8 bg-gray hover:bg-white/30 active:scale-90 text-white font-bold text-xl flex items-center justify-center transition-all duration-150"
        >
          <div
            class="anim-in-fade absolute w-[124%] h-[123%] bg-yellow-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
            style="animation-delay: 4s"
          />
        </button>
      </div>

      <!-- Boxes -->
      <div
        class="relative w-full flex overflow-visible flex-row gap-2 flex-wrap justify-start items-start content-start p-2"
      >
        <div
          class="anim-in-fade absolute w-full h-[106%] bg-green-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
          style="animation-delay: 5s"
        />
        <div
          v-for="i in 13"
          :key="i"
          class="relative box bg-blue-500 h-[3rem] w-[10%]"
        >
          <div
            class="anim-in-fade absolute w-[115%] h-[116.8%] bg-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
            :style="{ animationDelay: `${5000 + i * 200}ms` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-mask {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    transparent 10%,
    black 30%
  );

  animation: slide-in-left 0.75s ease-in-out backwards;
  filter: brightness(140%);
}

@keyframes slide-in-left {
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
}
</style>
