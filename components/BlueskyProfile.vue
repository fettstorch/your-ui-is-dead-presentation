<template>
  <div class="bluesky-container">
    <bsky-widget :handle="handle" :theme="theme"> </bsky-widget>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from "vue";

defineProps({
  handle: {
    type: String,
    default: "fettstorch.com",
  },
  theme: {
    type: String,
    default: "dark",
  },
});

onMounted(async () => {
  // Load the Bluesky widget script
  if (!window.bskyWidgetLoaded) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/bsky-widget@~0.1/dist/index.js";
    script.type = "module";
    document.body.appendChild(script);
    window.bskyWidgetLoaded = true;
  }

  // Wait for the widget to render and then remove the Following section
  await nextTick();

  // Give the widget a moment to fully render
  setTimeout(() => {
    // Look inside shadow DOM
    const bskyWidget = document.querySelector("bsky-widget");

    if (bskyWidget?.shadowRoot) {
      const subtleTexts =
        bskyWidget.shadowRoot.querySelectorAll(".subtle-text");

      subtleTexts.forEach((el) => {
        if (el.textContent?.trim() === "Following") {
          const parent = el.parentElement; // The paragraph
          if (parent) {
            parent.remove();
          }
        }
      });
    }
  }, 1500);
});
</script>

<style scoped>
.bluesky-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(bsky-widget) {
  min-height: 370px;
  width: 350px;
}
</style>
