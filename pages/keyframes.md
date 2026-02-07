<h1 class="-translate-y-50">
  2. I Don't Have The Capabilities!
<h3 style="color: darkgray"><Typewriter immediate>Keyframes</Typewriter></h3>
</h1>

<div class="absolute left-40 top-60 anim-in">
  <div class="jello-box w-30 h-30" :class="[`anim-${$clicks}`] "/>
</div>

<img v-if="$clicks === 3" src="https://media2.giphy.com/media/APqEbxBsVlkWSuFpth/200w.gif?cid=5a38a5a2i6vgwcmwqadvt8td6dnmrin9aqmotsodayt6hd1w" class="rounded-xl anim-in-bottom w-40 absolute left-0 -bottom-10" style="animation-timing-function: ease-out"/>

<div class="absolute left-110 top-60 anim-in flex flex-col justify-center items-center" style="border: 1px solid var(--slidev-theme-primary); box-shadow: 0 0 2rem var(--slidev-theme-primary)">

````md magic-move 
```css
.anim {

}
```

```css
.anim {
    animation: jello 0.8s infinite linear;
}

@keyframes jello {
  from,to { transform: skewX(0deg)   }
  25.000% { transform: skewX(12deg)  }
  75.000% { transform: skewX(-12deg) }
}
```

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
````
</div>

<style>

.anim-1 {
    animation: jello-1 0.7s infinite linear;
}

.anim-2, .anim-3 {
    animation: jello-2 0.7s infinite ease-out;
}

@keyframes jello-1 {
  from,to { transform: skewX(0) }
  25.000% { transform: skewX(12deg) }
  75.000% { transform: skewX(-12deg) }
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
box-shadow: inset 1px 1px 5px white;
}
</style>
