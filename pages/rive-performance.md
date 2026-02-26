<h1 class="absolute w-190 top-1/2 left-1/2 -translate-x-1/2 transition-all duration-1000"
    :class="{
        '-translate-y-50': $clicks >= 1
    }"
>
    <Typewriter immediate :delay="1000">4. This would hurt performance!</Typewriter>
</h1>

<OnEnter>
<div class="absolute left-10 top-50">
    <div><Typewriter v-if="$clicks >= 2" immediate>- Loadingtimes?</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 3" immediate>         - proprietary .riv binary format (small & fast to process)</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 4" immediate>- Execution?</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 5" immediate>         - "Canvas" only (in web). Detached from our Browsers complex render-pipeline</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 5" immediate>         - Rives own efficient low level render engine (C++)</Typewriter></div>
</div>

<img v-if="$clicks >= 6" class="anim-in-left w-30 absolute left-10 bottom-10" src="https://media1.giphy.com/media/9KawrQzIwdAYg/giphy.gif?cid=5a38a5a20k568ekjsqgzyabdbtgdw32c838yzm0yt1o46cod" />

</OnEnter>