<script setup lang="ts">
import { ref } from "vue";

const items = ref(
  Array.from({ length: 200 }, (_, i) => ({
    id: i,
    expanded: false,
    width: 100 + Math.random() * 100,
    height: 40 + Math.random() * 20,
  })),
);

const triggerReflow = ref(false);
const styleVariant = ref(0);
const containerRef = ref<HTMLElement | null>(null);

// This function triggers layout thrashing - reading and writing layout properties in a loop
function causeLayoutThrashing() {
  if (!containerRef.value) return;
  const elements = containerRef.value.querySelectorAll("[data-layout-item]");
  console.log("Layout thrashing on", elements.length, "elements");
  elements.forEach((el) => {
    // Force reflow by reading offsetHeight then writing style
    const height = (el as HTMLElement).offsetHeight;
    (el as HTMLElement).style.height = height + 1 + "px";
  });
}

// This triggers a massive style recalculation
function causeStyleRecalc() {
  styleVariant.value = (styleVariant.value + 1) % 3;
  console.log("Style variant changed to", styleVariant.value);
}

// This causes reflow by changing layout-affecting properties
function causeReflow() {
  triggerReflow.value = !triggerReflow.value;
  items.value = items.value.map((item) => ({
    ...item,
    width: 100 + Math.random() * 100,
    height: 40 + Math.random() * 20,
    expanded: !item.expanded,
  }));
  console.log("Reflow triggered, expanded:", triggerReflow.value);
}

// Combined: worst case scenario
function causeAllPerformanceIssues() {
  console.log("Causing ALL performance issues!");
  causeStyleRecalc();
  setTimeout(() => {
    causeReflow();
    setTimeout(causeLayoutThrashing, 50);
  }, 50);
}
</script>

<template>
  <div class="complex-layout-demo" ref="containerRef">
    <div class="controls">
      <button @click.stop.prevent="causeStyleRecalc" class="btn btn-style">
        Style Recalc ({{ styleVariant }})
      </button>
      <button @click.stop.prevent="causeReflow" class="btn btn-reflow">
        Reflow ({{ triggerReflow ? "ON" : "OFF" }})
      </button>
      <button @click.stop.prevent="causeLayoutThrashing" class="btn btn-thrash">
        Layout Thrashing
      </button>
      <button
        @click.stop.prevent="causeAllPerformanceIssues"
        class="btn btn-all"
      >
        All Issues!
      </button>
    </div>

    <div
      class="grid-container"
      :class="{
        'style-v0': styleVariant === 0,
        'style-v1': styleVariant === 1,
        'style-v2': styleVariant === 2,
        'reflow-active': triggerReflow,
      }"
    >
      <!-- Deeply nested structure causes expensive style calculations -->
      <div
        v-for="item in items"
        :key="item.id"
        data-layout-item
        class="layout-item"
        :class="{
          expanded: item.expanded,
          'item-even': item.id % 2 === 0,
          'item-odd': item.id % 2 === 1,
          'item-third': item.id % 3 === 0,
          'item-fifth': item.id % 5 === 0,
        }"
        :style="{
          width: item.width + 'px',
          minHeight: item.height + 'px',
        }"
      >
        <div class="item-header">
          <span class="item-id">#{{ item.id }}</span>
          <span class="item-badge" v-if="item.id % 7 === 0">Featured</span>
        </div>
        <div class="item-content">
          <div class="nested-1">
            <div class="nested-2">
              <div class="nested-3">
                <div class="nested-4">
                  <span class="deep-text">{{ item.expanded ? "▼" : "▶" }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-footer" v-if="item.expanded">
          <div class="footer-content">
            Expanded content with more DOM nodes
            <div class="extra-element"></div>
            <div class="extra-element"></div>
            <div class="extra-element"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.complex-layout-demo {
  position: absolute;
  inset: 0;
  overflow: auto;
  padding: 1rem;
  background: #1a1a2e;
  display: flex;
  flex-direction: column;
}

.controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #1a1a2e;
  padding: 0.5rem 0;
  pointer-events: auto;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.1s;
  pointer-events: auto;
  position: relative;
  z-index: 100;
}

.btn:hover {
  transform: scale(1.05);
}

.btn-style {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-reflow {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.btn-thrash {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: #1a1a2e;
}

.btn-all {
  background: linear-gradient(135deg, #fa709a, #fee140);
  color: #1a1a2e;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

/* Style variants that cause massive style recalculation */
.style-v0 .layout-item {
  background: linear-gradient(135deg, #2d2d44, #1a1a2e);
  border: 1px solid #3d3d5c;
}

.style-v1 .layout-item {
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  border: 2px dashed #4a7cc9;
  border-radius: 1rem;
}

.style-v2 .layout-item {
  background: linear-gradient(180deg, #134e5e, #71b280);
  border: 3px solid #9ed8a0;
  border-radius: 0.25rem;
}

/* Reflow triggers */
.reflow-active .layout-item {
  padding: 1rem;
  margin: 0.25rem;
}

.reflow-active .layout-item.expanded {
  flex-basis: 100%;
}

.layout-item {
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.layout-item.expanded {
  flex-grow: 1;
  min-height: 80px !important;
}

/* Complex selectors that increase style calculation cost */
.layout-item.item-even:not(.item-third) {
  border-left: 3px solid #667eea;
}

.layout-item.item-odd.item-fifth:not(.expanded) {
  border-right: 3px solid #f5576c;
}

.layout-item.item-third.item-odd .item-header {
  background: rgba(102, 126, 234, 0.2);
}

.grid-container:hover .layout-item:not(:hover) {
  opacity: 0.7;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: #aaa;
}

.item-id {
  font-family: monospace;
}

.item-badge {
  background: #f5576c;
  color: white;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  font-size: 0.5rem;
}

.item-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Deep nesting increases selector matching cost */
.nested-1 {
  display: flex;
  padding: 0.1rem;
}

.nested-2 {
  display: flex;
  padding: 0.1rem;
}

.nested-3 {
  display: flex;
  padding: 0.1rem;
}

.nested-4 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.deep-text {
  font-size: 0.8rem;
  color: #667eea;
}

.item-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  color: #888;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.extra-element {
  height: 0.5rem;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(102, 126, 234, 0.3),
    transparent
  );
  border-radius: 0.25rem;
}
</style>
