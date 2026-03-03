<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<h1 class="relative">
    <Typewriter immediate :delay="1000" class="transition-all duration-1000" :class="{'opacity-50 blur-10': $clicks >= 1}" >{{ t('rive.bpp.h1') }}</Typewriter>
</h1>

<!-- communication bubbles -->
<div class="flex flex-col justify-end items-center w-80% h-fit absolute bottom-70 left-1/2 -translate-x-1/2 gap-5">
    <div v-if="$clicks >= 3" class="speach-bubble right anim-in-bottom">{{ t('rive.bpp.msg1') }}</div>
    <div v-if="$clicks >= 4" class="speach-bubble anim-in-bottom">{{ t('rive.bpp.msg2') }}</div>
    <div v-if="$clicks >= 5" class="speach-bubble right anim-in-bottom">{{ t('rive.bpp.msg3') }}</div>
    <div v-if="$clicks >= 6" class="speach-bubble anim-in-bottom">{{ t('rive.bpp.msg2') }}</div>
    <div v-if="$clicks >= 7" class="speach-bubble anim-in-bottom"><span v-html="t('rive.bpp.msg4')" />
    </div>
    <div v-if="$clicks >= 8" class="speach-bubble right anim-in-bottom">{{ t('rive.bpp.msg5a') }}<br><span v-if="$clicks >= 9" class="anim-in-fade">{{ t('rive.bpp.msg5b') }}</span></div>
    <div v-if="$clicks >= 10" class="speach-bubble anim-in-bottom">{{ t('rive.bpp.msg6') }}</div>
    <div v-if="$clicks >= 11" class="speach-bubble anim-in-bottom">{{ t('rive.bpp.msg7a') }} <span v-if="$clicks >= 12" class="anim-in-fade">{{ t('rive.bpp.msg7b') }}</span></div>
</div>


<img v-if="$clicks > 1" src="/chair.png" class="w-40 -bottom-6 -scale-x-100 left-0 absolute anim-in-bottom" />
<img v-if="$clicks > 1" src="/chair.png" class="w-40 -bottom-6 right-0 absolute anim-in-bottom" />

<OnEnter>
    <!-- Sven -->
    <RiveJulian :model="'Sven'" class="w-120 scale-x-[-130%] absolute -bottom-170 -right-80 transition-all duration-500"
    :thumbs-up="$clicks < 2" :sitting="$clicks >= 1" :happy="$clicks < 2" :angry="$clicks >= 7" :angry-waving="$clicks >= 13"
    :class="{
        '-translate-y-100 -rotate-z-30 -translate-x-40': $clicks === 1,
        '-translate-y-165 rotate-z-0 w-60! -translate-x-90': $clicks > 1,
        }" />
    <div v-if="$clicks === 1" class="speach-bubble absolute right-40 bottom-80 right anim-in-top">{{ t('rive.bpp.sven') }}</div>
    <!-- Julian -->
    <RiveJulian class="w-120 scale-x-[130%] absolute -bottom-170 -left-80 transition-all duration-500"
    :thumbs-up="$clicks < 2" :sitting="$clicks >= 1" :happy="$clicks < 2" :angry="$clicks >= 12" :angry-waving="$clicks >= 13"
    :class="{
        '-translate-y-100 rotate-z-30 translate-x-40': $clicks === 1,
        '-translate-y-165 rotate-z-0 translate-x-90 w-60!': $clicks > 1,
        }" />
</OnEnter>

<!-- Svens desk-->
<img v-if="$clicks > 1" src="/desk.png" class="w-70 -bottom-16 right-0 absolute anim-in-bottom -scale-x-100" style="animation-delay: 1s;" />
<img v-if="$clicks > 1" class="w-40 bottom-10 right-30 absolute anim-in-bottom rotate-y-[360deg]" style="animation-delay: 2s;" src="https://media0.giphy.com/media/xiwrNAlNdJKVUJlAdM/giphy.gif?cid=5a38a5a20k76e40rqt9u0m0jvty36vrqpwsz8q2446t8a5aw" />
<!-- Julians desk -->
<img v-if="$clicks > 1" src="/desk.png" class="w-70 -bottom-16 left-0 absolute anim-in-bottom" style="animation-delay: 1s;" />
<img v-if="$clicks > 1" class="w-40 bottom-10 left-30 absolute anim-in-bottom -scale-x-100" style="animation-delay: 2s;" src="https://media0.giphy.com/media/xiwrNAlNdJKVUJlAdM/giphy.gif?cid=5a38a5a20k76e40rqt9u0m0jvty36vrqpwsz8q2446t8a5aw" />

<img v-if="$clicks >= 13" class="absolute left-80 bottom-5 rounded-xl anim-in-bottom" src="https://media4.giphy.com/media/aTGwuEFyg6d8c/200.gif?cid=5a38a5a20zcrepcfwkytnnqn9ybs6hw3l0lfrfobcum50knx" />

<style>
    .speach-bubble:not(.right) {
        margin-right: 20rem;
    }
    .speach-bubble.right {
        margin-left: 20rem;
    }
</style>
