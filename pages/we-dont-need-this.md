<h1 class="-translate-y-30"><Typewriter immediate :delay="1000" :speed="50" class="text-primary">1. We Don't Need This!</Typewriter></h1>

<img v-if="$clicks >= 1" src="/not-gonna-take-long.gif" class="w-60 absolute bottom-10 left-10 rounded-xl anim-in" />
<img v-if="$clicks >= 4" src="/chair.png" class="w-50 bottom-4 right-15 absolute anim-in-slide-right" />
<img v-if="$clicks >= 5" src="/sit-yo-ass-down.gif" class="w-80 absolute bottom-10 left-10 rounded-xl anim-in" />

<OnEnter>
  <div class="absolute bottom-0 transition-all duration-5000" :class="{
    '-right-100': $clicks <= 1,
    'right-30': $clicks >= 2
  }">
    <RiveJulian class="w-80 -scale-x-100" :angry="$clicks < 5" :walking="$clicks < 3" :angryWaving="$clicks < 5" :sitting="$clicks >= 5" :unsure="$clicks >= 5"/>
    <img v-if="$clicks >= 6" src="/pm-cap.png" class="w-34 absolute left-46 top-10 rotate-16 anim-in-top" />
  </div>
</OnEnter>
