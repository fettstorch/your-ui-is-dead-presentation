<h1 class="-translate-y-50">
  2. I Don't Have The Capabilities!
<h3 style="color: darkgray"><Typewriter immediate :delay="1000">JS-animations</Typewriter></h3>
</h1>

<div class="absolute left-10 top-40">
    <Typewriter immediate :delay="1300" class="transition-all duration-1000" :class="{'opacity-50': $clicks >= 1 }">- RequestAnimationFrame</Typewriter> <br>
    <Typewriter immediate :delay="1600" class="transition-all duration-1000" :class="{'opacity-50': $clicks >= 1 }">- Manipulating dom classes</Typewriter><br>
    <Typewriter immediate :delay="1900" class="transition-all duration-1000" >- WebAnimations API</Typewriter><br>
    <Typewriter immediate :delay="2100" class="transition-all duration-1000" :class="{'opacity-50': [2,3,4,5].includes($clicks) }">- Third Party Libraries (e.g. Motion.dev)</Typewriter>
</div>

<OnEnter>
    <WebAnimationsAPI class="absolute left-10 bottom-10" :clicks="$clicks"/>
</OnEnter>

<div
v-if="$clicks >= 2"
 class="absolute right-10 anim-in bottom-10"
 style="border: 1px solid var(--slidev-theme-primary); box-shadow: 0 0 2rem var(--slidev-theme-primary)">
````md magic-move { at: 3 }
```js
document.getElementById('my-el')
    .animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(150%)" },
        ],
        {
            duration: 1000,
            easing: "ease-in-out",
            iterations: Infinity
            direction: "alternate"
        }
    )
```

```js {1,13,14}
const animation = document.getElementById('my-el').animate(
    [
        { transform: "translateX(0)" },
        { transform: "translateX(200%)" },
    ],
    {
        duration: 1000,
        easing: "ease-in-out",
        iterations: Infinity,
        direction: "alternate"
    }
)
animation.finished.then(() => {...})
animation.onFinished = () => {...}
```

```js {14-24|22}
const el = document.getElementById('my-el')
el.animate(
    [
        { transform: "translateX(0)" },
        { transform: "translateX(200%)" },
    ],
    {
        duration: 1000,
        easing: "ease-in-out",
        iterations: Infinity,
        direction: "alternate"
    }
)
el.animate(
    [
        { transform: "rotate(0deg)" }
        { transform: "rotate(360deg)" }
    ],
    {
        duration: 1000,
        iterations: Infinity,
        composite: "add"
    }
)
```
````
</div>