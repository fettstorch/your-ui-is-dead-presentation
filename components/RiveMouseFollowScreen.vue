<script setup lang="ts">
import { awaitable, sleep } from "@fettstorch/jule";
import { EventType, Rive } from "@rive-app/canvas";
import { refAutoReset } from "@vueuse/core";
import { ref } from "vue";

const { clicks } = defineProps<{
  clicks: number,
}>()

const karateChop = ref(false)
const confident = refAutoReset(false, 1000)
const rive = awaitable<Rive>()

const showPow1 = refAutoReset(false, 300)
const showPow2 = refAutoReset(false, 300)

const punchSound1 = new Audio('/punch.mp3')
const heySound = new Audio('/link-hey.mp3')

async function onClick() {
  karateChop.value = !karateChop.value
  confident.value = true

  if (clicks < 7) {
    return
  }
  heySound.currentTime = 0
  heySound.play()
  await sleep(400)
  punchSound1.currentTime = 0
  punchSound1.play()
}

rive.then((r) => {
  r.on(EventType.RiveEvent, (event) => {
    if (clicks < 7) {
      return
    }
    showPow1.value = true
    showPow2.value = true
  })
})

</script>

<template>
  <OnEnter>
    <RiveJulian v-if="clicks >= 5" class="w-50 absolute left-20 bottom-5 anim-in-left cursor-pointer" :walking="clicks >= 6" v-model:karate-chop="karateChop" :on-click="onClick" :confident :out="rive" />
  </OnEnter>

  <RiveInterface
    v-if="clicks >= 4"
    class="w-160 absolute left-40 -top-135 pointer-events-none transition-all duration-1000 anim-in-top"
    style="animation-delay: 1s"
    :clicks="clicks"
  />

  <img class="pow w-40 absolute bottom-40 left-45" :class="{
    'show': showPow1
  }" src="https://media1.giphy.com/media/mIaTnNIt8e7JpD1tqI/giphy.gif?cid=5a38a5a215d954xd84v23x6xpli2cnbg92rp9lifwp5ms4ky" />
  <img class="pow w-40 absolute bottom-30 left-40" :class="{
    'show': showPow2
  }"
  :style="{
    'transition-delay': '100ms'
  }"
   src="https://media1.giphy.com/media/1Y5msKnOfYtZSZrr7W/giphy.gif?cid=5a38a5a2x5avl8itla7iu435qir630ki0xy90pgd6uq08yoi" />
</template>

<style scoped>
.pow {
  transition: all 0.07s ease-out;
  opacity: 0;
  scale: 0;
  rotate: 40deg;
}
.pow.show {
  opacity: 1;
  scale: 1;
  rotate: 40deg;
}
</style>
