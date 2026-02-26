
<h1 class="absolute left-1/2 -translate-x-1/2 top-60 transition-all duration-1000" :class="{
    '-translate-y-50': $clicks >= 1
}"><Typewriter immediate>Resolution</Typewriter></h1>

<BlueskyProfile v-if="$clicks >= 1" class="absolute right-10 bottom-10 anim-in-top" />

<div class="absolute left-10 top-30 w-full">
    <div><Typewriter immediate> Link to this presentation:</Typewriter></div>
    <img class="w-80" src="/youruiisdeadonline.svg" />
</div>

<audio v-if="$clicks >= 1" src="partyRock.mp3" autoplay />
