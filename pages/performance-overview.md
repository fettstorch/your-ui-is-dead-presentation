<div>
    <OnEnter>
        <RiveJulian class="w-80 absolute -bottom-20 left-10 transition-all duration-1000" angry :angryWaving="$clicks >=1" :class="{'-translate-x-30 translate-y-30': $clicks >= 2 }"/>
        <div v-if="$clicks >= 1" class="speach-bubble absolute top-40 left-1/4 anim-in transition-all duration-1000" :class="{'-translate-x-38 translate-y-40': $clicks >= 2 }">But what about <div class="anim-float">PERFORMANCE!?!?</div></div>
    </OnEnter>
</div>

<h1 v-if="$clicks >= 2" class="anim-in-fade transition-all duration-1000" :class="{'-translate-y-50': $clicks >= 3}"><Typewriter immediate :delay="1000">3. This would hurt performance!</Typewriter></h1>