<RiveMouseFollow class="w-full absolute -bottom-30 anim-in-bottom transition-all duration-1000" :hands="$clicks >= 1 && $clicks < 4"
:class="{
    'scale-[50%] translate-y-[18%]': $clicks >= 4,
}"
 />

<RiveMouseFollowScreen :clicks="$clicks" />

<OnEnter>
    <BurgerCursor :clicks="$clicks" />
</OnEnter>