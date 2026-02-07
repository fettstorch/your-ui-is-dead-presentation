<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useTimeoutFn } from "@vueuse/core";
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { useTypewriter } from "../composables/useTypewriter";

const {
  speed = 30,
  delay = 0,
  immediate = false,
} = defineProps<{
  speed?: number;
  delay?: number;
  immediate?: boolean;
}>();

const displayedText = ref("");
const isTyping = ref(false);
const containerRef = ref<HTMLElement>();
let currentTimeout: ReturnType<typeof useTimeoutFn> | null = null;
let text = "";

const { isActive } = useTypewriter({ immediate });

onMounted(async () => {
  await nextTick();

  if (!containerRef.value) return;

  // Get text content from the hidden slot element
  text = containerRef.value.textContent || "";

  if (!text) return;

  // Clear the hidden content
  containerRef.value.innerHTML = "";

  if (immediate) {
    startTyping();
  }
});

const startTyping = () => {
  if (!text) return;

  // Reset text when slide enters
  displayedText.value = "";

  // Use VueUse timeout for proper cleanup
  const delayTimeout = useTimeoutFn(() => {
    isTyping.value = true;
    let index = 0;

    const typeNextChar = () => {
      if (index < text.length) {
        displayedText.value = text.slice(0, index + 1);
        index++;
        currentTimeout = useTimeoutFn(typeNextChar, speed);
        currentTimeout.start();
      } else {
        isTyping.value = false;
        currentTimeout = null;
      }
    };

    typeNextChar();
  }, delay);

  currentTimeout = delayTimeout;
  delayTimeout.start();
};

const stopTyping = () => {
  if (currentTimeout) {
    currentTimeout.stop();
    currentTimeout = null;
  }
  isTyping.value = false;
};

onSlideEnter(() => {
  startTyping();
});

onSlideLeave(() => {
  stopTyping();
});
</script>

<template>
  <span class="typewriter-container">
    <span ref="containerRef" style="display: none"><slot /></span>
    <span class="typewriter-text">
      {{ displayedText }}
      <!-- CARET -->
      <span
        v-if="isActive || isTyping"
        class="typewriter-cursor"
        :class="{ typing: isTyping }"
      />
    </span>
  </span>
</template>

<style scoped>
.typewriter-text {
  white-space: pre-wrap;
}

.typewriter-cursor {
  display: inline-block;
  width: 0.6em;
  height: 1em;
  margin-left: 2px;
  margin-bottom: -2px;
  background-color: currentColor;
  vertical-align: baseline;
  animation: blink 0.75s step-end infinite;
}

.typewriter-cursor.typing {
  animation: none;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
