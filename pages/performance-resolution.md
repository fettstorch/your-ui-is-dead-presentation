<div>
    <OnEnter>
        <RiveJulian class="w-80 absolute -bottom-20 left-10 transition-all duration-1000"  :suspicious="$clicks < 7" :thumbsUp="$clicks > 6" :class="{'-translate-x-30 translate-y-30': $clicks >= 2 }"/>
        <div v-if="$clicks >= 1 && $clicks < 7" class="speach-bubble absolute top-40 left-1/4 anim-in transition-all duration-1000" :class="{'-translate-x-38 translate-y-40': $clicks >= 2 }">So... what <span class="font-bold">about</span> <div class="anim-float">PERFORMANCE!?!?</div></div>
    </OnEnter>
</div>

<h1 v-if="$clicks >= 2" class="anim-in-fade transition-all duration-1000"><Typewriter immediate :delay="1000">3. This would hurt performance!</Typewriter></h1>

<div class=" right-30 absolute bottom-10 transition-all duration-1000" :class="{
    'translate-x-40 translate-y-20': $clicks >= 4,
    'opacity-30': $clicks > 3 && $clicks < 6,
    'translate-x-20! translate-y-0!': $clicks >= 6
}">
    <img v-if="$clicks >= 3" :src="$clicks < 6 ? '/elmo-dont-know.gif' : '/assuming.jpeg'" class="w-100 rounded-xl anim-in-bottom" />
</div>

<div v-if="$clicks >= 4" class="absolute left-1/4 top-1/3">
    <div><Typewriter immediate>- Don't generalize the answer</Typewriter></div>
    <div v-if="$clicks >= 5"><Typewriter immediate>- Best practices can help (transform & opacity animations)</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 6" immediate>- Measure it!!!</Typewriter></div>
</div>

<img src="/unicorn.gif" class="absolute -left-120 w-120 bottom-10 transition-all duration-4000" :class="{
    'translate-x-[180vw]': $clicks > 7
}" />