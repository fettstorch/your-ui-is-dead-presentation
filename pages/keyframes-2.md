<h1 class="-translate-y-50">
  2. I Don't Have The Capabilities!
<h3 style="color: darkgray">Keyframes</h3>
</h1>


<div v-if="$clicks >= 1" class="absolute left-1/2 -translate-x-1/2 top-70 w-120 transition-all duration-1000 origin-center" :class="{
  'translate-y-30 opacity-20 scale-[3]': $clicks >= 3
}"  >
  <svg v-if="$clicks >= 2" class="absolute w-full h-50 -top-50" viewBox="0 0 700 200" fill="none" preserveAspectRatio="none">
    <path 
      d="M 0,100 C 50,100 50,195 100,195 S 150,25 200,25 S 250,155 300,155 S 350,60 400,60 S 450,125 500,125 S 550,85 600,85 S 650,100 700,100" 
      stroke="yellowgreen" 
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="animated-path"
    />
  </svg>
  <div class="h-1 rounded-xl anim-in-top w-full" style="background: yellowgreen; animation-delay: 1s"/>
  <div v-for="i in [0, 1, 2, 3, 4, 5, 6, 7]" class="absolute h-4 w-1 anim-in-top top-0 rounded-b" style="background: yellowgreen" :style="{
    left: `${i * (100/7) - 0.2}%`,
    'animation-delay': `${1000 + i * 250}ms`
  }" ><div class="absolute -bottom-7 left-0 italic">{{i}}</div></div>
</div>

<div class="absolute left-110 top-60 flex flex-col justify-center items-center transition-all duration-1000" :class="{
  'translate-y-50': $clicks >= 1 && $clicks < 3
}" style="border: 1px solid var(--slidev-theme-primary); box-shadow: 0 0 2rem var(--slidev-theme-primary)">

````md magic-move { at: 4 } 
```css
.anim {
    animation: jello 0.8s infinite ease-out;
}

@keyframes jello {
  from,to { transform: skewX(0deg)   }
  14.286% { transform: skewX(12deg)  }
  28.571% { transform: skewX(-10deg) }
  42.857% { transform: skewX(8deg)   }
  57.143% { transform: skewX(-6deg)  }
  71.429% { transform: skewX(4deg)   }
  85.714% { transform: skewX(-2deg)  }
}
```

```css
.anim {
    animation: jello 0.8s infinite ease-out;
}

@keyframes jello {
  from,to { transform: skewY(0deg)   skewX(0deg)   }
  14.286% { transform: skewY(12deg)  skewX(12deg)  }
  28.571% { transform: skewY(-10deg) skewX(-10deg) }
  42.857% { transform: skewY(8deg)   skewX(8deg)   }
  57.143% { transform: skewY(-6deg)  skewX(-6deg)  }
  71.429% { transform: skewY(4deg)   skewX(4deg)   }
  85.714% { transform: skewY(-2deg)  skewX(-2deg)  }
}
```

````
<div v-if="$clicks >= 3" class="absolute -top-20 left-1/2 left-1/2 -translate-x-[30%]">
  <div class="speach-bubble anim-in-top italic" style="animation-delay: 1s; white-space: nowrap">
    100 / (keyframesLength - 1) * i
  </div>
</div>
</div>

<img v-if="$clicks >= 5" class="absolute rounded-xl left-20 top-20 anim-in-top" src="https://media2.giphy.com/media/f7NT54WFV9bXBPZVBD/giphy.gif?cid=5a38a5a2je4m9wcsmlbtaiwrulbnqxkauofrbtfjffxxz1o3" style="animation-delay: 2s"/>

<div class="absolute left-40 top-60 transition-all duration-1000" :class="{
  'translate-y-40': $clicks >= 1 && $clicks < 3
}" >
  <div class="jello-box w-30 h-30 transition-all" :class="{
    'anim-0': $clicks < 4,
    'anim-1': $clicks >= 4,
    'jello w-50 h-50': $clicks >= 5
  }"/>
</div>

<style>

.anim-0 {
    animation: jello-2 0.7s infinite ease-out;
}

.anim-1 {
    animation: jello-3 0.7s infinite ease-out;
}

@keyframes jello-2 {
  from,to { transform: skewX(0) }
  14.286% { transform: skewX(12deg)  }
  28.571% { transform: skewX(-10deg) }
  42.857% { transform: skewX(8deg)   }
  57.143% { transform: skewX(-6deg)  }
  71.429% { transform: skewX(4deg)   }
  85.714% { transform: skewX(-2deg)  }
}

@keyframes jello-3 {
  from,to { transform: skewX(0) }
  14.286% { transform: skewY(12deg)  skewX(12deg)  }
  28.571% { transform: skewY(-10deg) skewX(-10deg) }
  42.857% { transform: skewY(8deg)   skewX(8deg)   }
  57.143% { transform: skewY(-6deg)  skewX(-6deg)  }
  71.429% { transform: skewY(4deg)   skewX(4deg)   }
  85.714% { transform: skewY(-2deg)  skewX(-2deg)  }
}

.jello-box {
position: relative;
border-radius: 0.5rem;
background: conic-gradient(
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

&.jello {
  background-image: url('jello.png');
  background-size: cover;
  background-position: center;
}

box-shadow: inset 1px 1px 5px white;

&.jello {
  box-shadow: none;
}
}

.animated-path {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: draw-path 7s ease-out forwards;
}

@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
