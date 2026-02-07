<h1 class="transition-all duration-1000" :class="{
  '-translate-y-50': $clicks >= 1
}">
  <Typewriter immediate >2. I Don't Have The Capabilities!</Typewriter>
  <OnEnter :delayMs="10_000">
    <h3 style="color: darkgray"><Typewriter immediate>Direction & Iteration Count</Typewriter></h3>
  </OnEnter>
</h1>

<OnEnter>
  <div class="anim-in-bottom absolute bottom-0 left-1/2 ">
    <RiveJulian sad class="w-40 transition-all duration-8000" :walking="$clicks >= 2" :class="{
      'translate-x-80vw': $clicks >= 2
    }" style="transition-timing-function: linear"/>
  </div>
</OnEnter>

<div v-if="$clicks >= 3" class="absolute left-10 bottom-80 anim-in-left" style="animation-duration: 1s" >
  <div class="transition-all duration-1000 bs1" :class="{'box-spotlight': $clicks === 4 || $clicks === 5 }">
    <div class="anim-example-box silver-box" :class="{
      'box-1': $clicks === 4 || $clicks === 5
      }" />
  </div>
</div>

<div v-if="$clicks >= 3" class="absolute left-10 bottom-60 anim-in-left" style="animation-duration: 1s; animation-delay: 300ms">
  <div class="transition-all duration-1000 bs2" :class="{'box-spotlight': $clicks === 6 || $clicks === 7 }">
    <div class="anim-example-box bg-[#F00] text-center text-black font-bold pt-5" :class="{
      'box-2': $clicks === 6 || $clicks === 7
    }" > X_X</div>
  </div>
</div>

<div v-if="$clicks >= 3" class="absolute left-10 bottom-40 anim-in-left" style="animation-duration: 1s; animation-delay: 600ms">
  <div class="transition-all duration-1000 bs3" :class="{'box-spotlight': $clicks === 8 || $clicks === 9 }">
    <div class="anim-example-box bg-yellow text-black text-center font-bold pt-5" :class="{
      'box-3': $clicks === 8 || $clicks === 9
    }">>o<</div>
  </div>
</div>

<div v-if="$clicks >= 3" class="absolute left-10 bottom-20 anim-in-left" style="animation-duration: 1s; animation-delay: 900ms">
  <div class="transition-all duration-1000 bs4" :class="{'box-spotlight': $clicks === 10 || $clicks === 11 }">
    <div class="anim-example-box shiny-box" :class="{
      'box-4': $clicks === 10 || $clicks === 11
    }" />
  </div>
</div>


<div v-if="$clicks === 4 || $clicks === 5" class="speach-bubble absolute left-60 top-45 anim-in" >Shiny 🤩</div>
<div v-if="$clicks === 6 || $clicks === 7" class="speach-bubble absolute left-60 top-45 anim-in" >Error 🤬</div>
<div v-if="$clicks === 8 || $clicks === 9" class="speach-bubble absolute left-50 top-25 anim-in" >Attention please 💁🏼‍♂️</div>
<div v-if="$clicks === 10 || $clicks === 11" class="speach-bubble absolute left-60 top-45 anim-in" >Jell-O 🤤</div>

<div v-if="$clicks >= 4" class="w-120 absolute right-10 bottom-10 anim-in-slide-right rounded-xxl" style="border: 1px solid var(--slidev-theme-primary); box-shadow: 0 0 2rem var(--slidev-theme-primary)">
````md magic-move {at: 5, lines: true}
```css {*|3,6,10-11,16-17}
.box-1 {
  position: relative;
  overflow: hidden;
}

.box-1::after {
  content: "";
  position: absolute;
  inset: -40%;
  background: linear-gradient(110deg, transparent 20%,
    rgba(255,255,255,.35), transparent 80%);
  animation: shine 0.6s ease infinite;
}

@keyframes shine {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
}
```

```css {*|3,7-8}
.box-2 {
  animation: wiggle 100ms ease-in-out 
    alternate infinite;
}

@keyframes wiggle {
  from { transform: translateX(-20%); }
  to { transform: translateX(20%); }
}
```

```css {*|3,8,11}
.box-3 {
  animation: attention-jump 0.35s ease-in
   alternate infinite;
}

@keyframes attention-jump {
  from {
    transform: translateY(10%) scaleX(1.6) scaleY(0.8);
  }
  to {
    transform: translateY(-50%) scaleX(0.8) scaleY(1.4);
  }
}
```

```css {*|6-13}
.box-4 {
  animation: jello 0.8s ease-in-out infinite;
}

@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg); }
  12.5% { transform: skewX(-12deg) skewY(-12deg); }
  25% { transform: skewX(10deg) skewY(10deg); }
  37.5% { transform: skewX(-8deg) skewY(-8deg); }
  50% { transform: skewX(6deg) skewY(6deg); }
  62.5% { transform: skewX(-4deg) skewY(-4deg); }
  75% { transform: skewX(2deg) skewY(2deg); }
  87.5% { transform: skewX(-1deg) skewY(-1deg); }
}
```
````
</div>


<style>
  .anim-example-box {
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }

  .silver-box {
    background: darkgray;
    box-shadow: inset 3px 3px 10px white;
  }

  .shiny-box {
    background:       conic-gradient(
        from 45deg at 30% 30%,
        rgba(100, 200, 100, 1) 0deg,
        rgba(140, 220, 140, 1) 30deg,
        rgba(100, 200, 100, 1) 60deg,
        rgba(160, 230, 160, 1) 120deg,
        rgba(100, 200, 100, 1) 150deg,
        rgba(130, 210, 130, 1) 220deg,
        rgba(100, 200, 100, 1) 260deg,
        rgba(150, 220, 150, 1) 300deg,
        rgba(100, 200, 100, 1) 360deg
      );
    box-shadow: inset 1px 1px 5px white;
  }

  .box-spotlight.bs1 {
    transform: translate(330%, 250%) scale(3);
  }

  .box-spotlight.bs2 {
    transform: translate(330%, 120%) scale(3);
  }

  .box-spotlight.bs3 {
    transform: translate(330%, 140%) scale(3);
  }

  .box-spotlight.bs4 {
    transform: translate(330%, -120%) scale(3);
  }

  .box-1 {
    position: relative;
    overflow: hidden;
  }

  .box-1::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,.75) 40%, rgba(255,255,255,.75) 60%, transparent 80%);
    animation: shine 1s ease infinite;
  }

  @keyframes shine {
    0% { transform: translateX(-120%); }
    100% { transform: translateX(120%); }
  }

  .box-2 {
    animation: wiggle .10s ease-in-out alternate infinite;
  }

  @keyframes wiggle {
    from { transform: translateX(-20%); }
    to { transform: translateX(20%); }
  }

  .box-3 {
    animation: attention-jump 0.3s ease-in alternate infinite;
  }

  @keyframes attention-jump {
    from { transform: scaleX(1.8) scaleY(0.8) }
    to { transform: translateY(-80%) scaleX(0.8) scaleY(1.4) }
  }

  .box-4 {
    animation: jello 0.8s ease-in-out infinite;
  }

  @keyframes jello {
    0%, 100% { transform: skewX(0deg) skewY(0deg); }
    12.5% { transform: skewX(-12deg) skewY(-12deg); }
    25% { transform: skewX(10deg) skewY(10deg); }
    37.5% { transform: skewX(-8deg) skewY(-8deg); }
    50% { transform: skewX(6deg) skewY(6deg); }
    62.5% { transform: skewX(-4deg) skewY(-4deg); }
    75% { transform: skewX(2deg) skewY(2deg); }
    87.5% { transform: skewX(-1deg) skewY(-1deg); }
  }
</style>
