<h1 class="relative">
    <Typewriter immediate :delay="1000" class="transition-all duration-1000" :class="{'opacity-50 blur-10': $clicks >= 1}" >2. I don't have the capabilities!</Typewriter>
</h1>

<OnEnter>
    <!-- Sven -->
    <RiveJulian :model="'Sven'" class="w-120 scale-x-[-130%] absolute -bottom-170 -right-80 transition-all duration-500"
    thumbs-up happy
    :class="{
        '-translate-y-100 -rotate-z-30 -translate-x-40': $clicks === 1,
        }" />
    <div v-if="$clicks === 1" class="speach-bubble absolute right-40 bottom-80 right anim-in-top">Well you don't have to<br>I'll do it myself!</div>
    <!-- Julian -->
    <RiveJulian class="w-120 scale-x-[130%] absolute -bottom-170 -left-80 transition-all duration-500"
    thumbs-up happy 
    :class="{
        '-translate-y-100 rotate-z-30 translate-x-40': $clicks === 1,
        }" />
</OnEnter>