<div>
    <OnEnter >
        <RiveJulian class="w-80 absolute -bottom-20 left-10" angry :angryWaving="$clicks >=1" />
        <div v-if="$clicks >= 1" class="speach-bubble absolute top-40 left-1/4 anim-in">But what about <div class="anim-float">PERFORMANCE!?!?</div></div>
    </OnEnter>
</div>