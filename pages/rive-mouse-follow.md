<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<RiveMouseFollow class="w-full absolute -bottom-30 anim-in-bottom transition-all duration-1000" :hands="$clicks >= 1 && $clicks < 4"
:class="{
    'scale-[50%] translate-y-[18%] -translate-x-20': $clicks >= 4,
}"
 />

<RiveMouseFollowScreen :clicks="$clicks" />

<OnEnter>
    <BurgerCursor :clicks="$clicks" />

<img v-if="$clicks >= 1 && $clicks < 4" :key="`dnd-${$clicks}`" class="w-80 anim-in-top-fade-out" src="https://media2.giphy.com/media/MuaQiNJI3qYOso0Lg5/giphy.gif?cid=5a38a5a2uh3w86b6mhz1aq327pmvq529khhr79bk164jmq5e" />

<div class="absolute right-2 bottom-90 w-100 pointer-events-none transition-all duration-1000"
 :class="{
    'translate-y-85': $clicks >= 4
 }"
 style="border: 1px solid var(--slidev-theme-primary); box-shadow: 0 0 2rem var(--slidev-theme-primary)"
>
````md magic-move
```ts
const riveInstance = new Rive({
  src: "myRiveExport.riv",
  stateMachines: "sm1",
  canvas: myCanvasElementRef,
  autoplay: true, // probably want this
  onLoadError: () => { ... }
  onLoad: () => { ... }
});
```

```ts
const riveInstance = new Rive({
  src: "myRiveExport.riv",
  stateMachines: "sm1",
  canvas: myCanvasElementRef,
  autoplay: true, // probably want this
  onLoadError: () => { ... }
  onLoad: () => { ... }
});
```

```ts
const riveInstance = new Rive({
  src: "myRiveExport.riv",
  stateMachines: "sm1",
  canvas: myCanvasElementRef,
  autoplay: true, // probably want this
  onLoadError: () => { ... }
  onLoad: () => { ... }
});
```

```ts
const riveInstance = new Rive({
  src: "myRiveExport.riv",
  stateMachines: "sm1",
  canvas: myCanvasElementRef,
  autoplay: true, // probably want this
  onLoadError: () => { ... }
  onLoad: () => { ... }
});
```

```ts
const riveInstance = new Rive({
  src: "myRiveExport.riv",
  stateMachines: "sm1",
  canvas: myCanvasElementRef,
  autoplay: true, // probably want this
  onLoadError: () => { ... }
  onLoad: () => { ... }
});
```

```ts
const riveInstance = new Rive({
  src: "myRiveExport.riv",
  stateMachines: "sm1",
  canvas: myCanvasElementRef,
  autoplay: true, // probably want this
  onLoadError: () => { ... }
  onLoad: () => { ... }
});
```

```ts
const r = new Rive({...});
...
const input = r.stateMachineInputs("sm1")?
  .find((i) => i.name === 'walking');
// for boolean/number inputs
input.value = true
// for triggers
input.fire()
```

```ts
const r = new Rive({...});
r.on(EventType.RiveEvent, (event) => {
    ...
})
```
````
</div>
</OnEnter>

<ClickCounter />
