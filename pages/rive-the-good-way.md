<h1 class="relative opacity-50 blur-10"> 3. I have enough on my plate right now!  </h1>

<!-- communication bubbles -->
<div class="flex flex-col justify-end items-center w-80% h-fit absolute bottom-70 left-1/2 -translate-x-1/2 gap-5">
    <div v-if="$clicks >= 2" class="speach-bubble right anim-in-bottom">I made this thing in Rive.<br>It has an input boolean and this event</div>
    <div v-if="$clicks >= 3" class="speach-bubble anim-in-bottom">I'll wire it up in the app</div>
</div>


<img src="/chair.png" class="w-40 -bottom-6 -scale-x-100 left-0 absolute" />
<img src="/chair.png" class="w-40 -bottom-6 right-0 absolute" />

<OnEnter>
    <!-- Sven -->
    <RiveJulian :model="'Sven'" class="w-120 scale-x-[-130%] absolute -bottom-170 -right-80 transition-all duration-500 -translate-y-165 rotate-z-0 w-60! -translate-x-90" sitting happy :class="{}" />
    <!-- Julian -->
    <RiveJulian class="w-120 scale-x-[130%] absolute -bottom-170 -left-80 transition-all duration-500 -translate-y-165 rotate-z-0 translate-x-90 w-60!"
    sitting happy :class="{ }" />
</OnEnter>

<!-- Svens desk-->
<img v-if="$clicks >= 1" src="/desk.png" class="w-70 -bottom-16 right-0 absolute anim-in-bottom -scale-x-100"  />
<img v-if="$clicks >= 1" class="w-40 bottom-10 right-30 absolute anim-in-bottom rotate-y-[360deg]"  src="https://media0.giphy.com/media/xiwrNAlNdJKVUJlAdM/giphy.gif?cid=5a38a5a20k76e40rqt9u0m0jvty36vrqpwsz8q2446t8a5aw" />
<!-- Julians desk -->
<img v-if="$clicks >= 1" src="/desk.png" class="w-70 -bottom-16 left-0 absolute anim-in-bottom" />
<img v-if="$clicks >= 1" class="w-40 bottom-10 left-30 absolute anim-in-bottom -scale-x-100" src="https://media0.giphy.com/media/xiwrNAlNdJKVUJlAdM/giphy.gif?cid=5a38a5a20k76e40rqt9u0m0jvty36vrqpwsz8q2446t8a5aw" />

<img v-if="$clicks >= 4" class="absolute left-0 top-10 w-full h-full anim-in-fade opacity-90" src="https://media3.giphy.com/media/SefUpaLtGNLs9gtg4u/200.gif?cid=5a38a5a2abuimhs9zjkbmw8i3av246jca06bpdrkvjldx8gd" />

<style>
    .speach-bubble:not(.right) {
        margin-right: 20rem;
    }
    .speach-bubble.right {
        margin-left: 20rem;
    }
</style>