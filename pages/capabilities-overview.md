<OnEnter>
  <Typewriter v-if="$clicks < 1" class="anim-in font-bold absolute left-8 top-10 speach-bubble text-primary" immediate>2. I don't have the capabilities!</Typewriter>
  <Typewriter v-else class="anim-in font-bold absolute left-8 top-10 speach-bubble text-primary transition-all duration-1000" :class="{ 'translate-x-10': $clicks > 1 }" immediate>2. Capabilities</Typewriter>
</OnEnter>

<OnEnter :delayMs="1000">
  <Typewriter v-if="$clicks < 1" class="anim-in font-bold absolute left-110 top-30 speach-bubble text-primary" immediate>3. This would hurt performance!</Typewriter>
  <Typewriter v-else class="anim-in font-bold absolute left-110 top-30 speach-bubble transition-all duration-1000 text-primary" :class="{ '-translate-y-20 translate-x-55': $clicks > 1 }" immediate>3. Enough on my Plate</Typewriter>
</OnEnter>

<OnEnter :delayMs="2000">
  <Typewriter v-if="$clicks < 1" class="anim-in font-bold absolute left-130 top-70 speach-bubble text-primary" immediate>4. I have enough on my plate right now!</Typewriter>
  <Typewriter v-else class="anim-in font-bold absolute left-130 top-70 speach-bubble transition-all duration-1000 text-primary" :class="{ '-translate-y-60 -translate-x-40': $clicks > 1 }" immediate>4. Performance</Typewriter>
</OnEnter>

<div v-if="$clicks >= 3" class="absolute left-10 bottom-10 text-cyan flex flex-row nowrap">
  <RiveCanvas :riveParams="{
    src: '/julian.riv',
    artboard: 'CSS',
    }" class="w-60" />
  <RiveCanvas :riveParams="{
    src: '/julian.riv',
    artboard: 'JS',
  }" class="w-60 -ml-25" />
</div>

<div v-if="$clicks >= 4" class="absolute right-10 bottom-10 rounded-xl overflow-clip">
  <RiveCanvas :riveParams="{
    src: '/julian.riv',
    artboard: 'Rive',
    }" class="w-60" />
</div>
