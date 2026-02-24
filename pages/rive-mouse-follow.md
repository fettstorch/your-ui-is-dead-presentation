<RiveMouseFollow class="w-full absolute -bottom-30 anim-in-bottom transition-all duration-1000" :hands="$clicks >= 1"
:class="{
    'scale-[50%] translate-y-[18%]': $clicks >= 4,
}"
 />

<OnEnter>
 <RiveJulian v-if="$clicks >= 5" class="w-50 absolute left-20 bottom-5 anim-in-left" walking />
 </OnEnter>

<RiveInterface v-if="$clicks >= 4" class="w-160 absolute left-40 -top-135 pointer-events-none transition-all duration-1000 anim-in-top" style="animation-delay: 1s" :clicks="$clicks" />

<OnEnter>
    <BurgerCursor :clicks="$clicks" />
</OnEnter>