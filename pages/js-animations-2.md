<h1 class="transition-all duration-400" :class="{
    '-translate-y-50': $clicks < 4,
    '-translate-y-80': $clicks === 4
}">
  2. I Don't Have The Capabilities!
<h3 style="color: darkgray">JS-animations</h3>
</h1>

<div class="absolute left-10 top-40 transition-all duration-400 delay-200" :class="{
    'translate-y-55': $clicks === 3,
    'translate-y-85 -translate-x-30': $clicks === 4,
}">
    <span class="opacity-50">- RequestAnimationFrame</span> <br>
    <span class="opacity-50">- Manipulating dom classes</span><br>
    <span class="transition-all duration-1000 opacity-50">- WebAnimations API</span><br>
    - Third Party Libraries (e.g. Motion.dev)
</div>

<div
v-if="$clicks >= 1"
 class="absolute right-10 anim-in bottom-10"
 :class="{
    'translate-y-5': $clicks >= 4
 }"
 style="border: 1px solid var(--slidev-theme-primary); box-shadow: 0 0 2rem var(--slidev-theme-primary)">
````md magic-move { at: 2 }
```js
  import { animate } from "motion";
  ...
  const rotation = animate(
    ".my-el",
    { rotate: [0, 360] },
    {
      ease: "linear",
      duration: 1.2,
      repeatType: "loop",
      repeat: Infinity,
    },
  );

  const translation = animate(
    ".my-el",
    { translateX: ["0%", "200%"] },
    {
      ease: "easeInOut",
      duration: 1.2,
      repeatType: "mirror",
      repeat: Infinity,
    },
  );
```

```js
rotation.stop();
translation.stop();

animate(
    ".my-el",
    { translateX: ["0%"] },
    {
      ease: "easeOut",
      duration: 0.25,
    },
  );
```

```js
animate(0, Math.PI * 2, {
    duration: 4,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
    onUpdate: (latest) => {
        cube.rotation.y = latest;
    },
});

animate(0, Math.PI * 2, {
    duration: 12,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
    onUpdate: (latest) => {
        cube.rotation.x = latest;
    },
});
```

```js
const positionAttr = geometry.getAttribute("position");
animate(0, 1, {
    duration: 0.7,
    ease: [0.12, 3.9, 0.25, 1], // aggressive overshoot
    repeat: Infinity,
    repeatType: "mirror",
    onUpdate: (t) => {
        for (let i = 0; i < positionAttr.count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        // Normalize to sphere surface
        const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const sx = (ox / length) * sphereRadius;
        const sy = (oy / length) * sphereRadius;
        const sz = (oz / length) * sphereRadius;

        // Lerp between cube and sphere
        positionAttr.array[i * 3] = ox + (sx - ox) * t;
        positionAttr.array[i * 3 + 1] = oy + (sy - oy) * t;
        positionAttr.array[i * 3 + 2] = oz + (sz - oz) * t;
        }
    },
});
```
````
</div>

<OnEnter>
    <MotionDev class="absolute left-10 bottom-10" :clicks="$clicks" />
</OnEnter>
