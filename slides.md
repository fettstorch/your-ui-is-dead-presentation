---
# try also 'default' to start simple
theme: seriph
themeConfig:
  primary: "#CFFF00"
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Your UI is dead
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min

fonts:
  sans: "Azeret Mono"
  mono: "Azeret Mono"
  provider: none

clicks: 1
---

<h1><Typewriter immediate class="text-primary">Your UI is dead</Typewriter></h1>

<Typewriter immediate :delay="2000">From devs for devs</Typewriter>

<JulianSplashScreen class="transition-opacity w-70 absolute left-20 -bottom-30" waving :class="{
  'opacity-0': $clicks < 1,
  'anim-in-bottom': $clicks > 0
}" style="animation-duration: 250ms"/>

---
clicks: 4
src: ./pages/reasons-against.md
---

---
layout: center
clicks: 6
src: ./pages/we-dont-need-this.md
---

---
src: ./pages/capabilities-overview.md
clicks: 5
---

---
layout: center
clicks: 11
transition: none
src: ./pages/direction-iteration-count.md
---

---
layout: center
src: ./pages/keyframes.md
transition: none
clicks: 3
---

---
layout: center
src: ./pages/keyframes-2.md
clicks: 5
---

---
layout: center
src: ./pages/jello-demo.md
---

---
layout: center
clicks: 10
src: ./pages/timing-functions.md
---

---
layout: center
src: ./pages/js-animations.md
clicks: 5
---

---
layout: center
src: ./pages/js-animations-2.md
clicks: 4
---

---
layout: center
src: ./pages/capabilities-resolved.md
clicks: 5
---

---
layout: center
src: ./pages/performance-overview.md
clicks: 3
transition: none
---

---
layout: center
src: ./pages/performance-pipeline.md
clicks: 15
---

---
layout: center
src: ./pages/performance-tools.md
---

---
layout: center
src: ./pages/performance-naive-contract.md
clicks: 9
---

---
layout: center
src: ./pages/performance-tools.md
clicks: 4
transition: slide-up
---

---
src: ./pages/performance-resolution.md
clicks: 8
---

---
layout: center
src: ./pages/rive-introduction.md
clicks: 2
---

---
src: ./pages/capabilities-overview.md
clicks: 6
transition: slide-up
---

---
layout: center
src: ./pages/rive-introduction.md
clicks: 5
---

---
layout: center
src: ./pages/rive-capabilities.md
clicks: 1
---

---
layout: center
src: ./pages/rive-performance.md
clicks: 8
---

---
layout: center
src: ./pages/rive-bad-ping-pong.md
clicks: 13
---

---
layout: center
src: ./pages/rive-the-good-way.md
clicks: 4
---

---
src: ./pages/rive-mouse-follow.md
clicks: 7
---

---
layout: center
src: ./pages/rive-enough-on-my-plate.md
---