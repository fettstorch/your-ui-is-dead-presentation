<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<div class="absolute left-30 top-1/2 transition-all duration-1000 -translate-y-57 -translate-x-3">
    <h1>{{ t('perf.overview.h1') }}</h1>
    <OnEnter>
        <Typewriter immediate class="absolute -bottom-8" style="color: darkgray" :delay="1500">Contract</Typewriter>
    </OnEnter>
</div>

<template v-if="$clicks >= 1">
    <div><Typewriter immediate v-if="$clicks >= 1">{{ t('perf.contract.label') }}</Typewriter></div>
    <div><Typewriter immediate v-if="$clicks >= 2">- Translations</Typewriter></div>
    <div><Typewriter immediate v-if="$clicks >= 3">- Rotations</Typewriter></div>
    <div><Typewriter immediate v-if="$clicks >= 4">- Scales</Typewriter></div>
    <div><Typewriter immediate v-if="$clicks >= 5">- Skews</Typewriter></div>
    <div><Typewriter immediate v-if="$clicks >= 6">- Opacity</Typewriter></div>
</template>

<OnEnter>
    <audio v-if="$clicks >= 1 && $clicks < 9" src="partyRock-fadein.mp3" autoplay />
    <audio v-if="$clicks >= 9" src="vinyl-scratch.mp3" autoplay />
</OnEnter>


<img v-if="$clicks >= 7" class="absolute w-50 top-1/3 left-1/2 anim-in-top" src="https://media4.giphy.com/media/iOWD5MnStGUOmeBpea/giphy.gif?cid=5a38a5a2mzsroe23c1m29h9u0toji0oxxwsdmdunahtswkvx" />

<!-- news anchor -->
<img v-if="$clicks >= 7" class="absolute bottom-5 left-100 roundd-xl w-40 anim-in-bottom" src="https://media1.giphy.com/media/6JPQjvq37kRoj326xa/giphy.gif?cid=5a38a5a2uh44sd3ce3egkxj5g5yjo009pzgayv5vfiimvufj" />
<div v-if="$clicks >= 7" class="w-40 left-100 text-white absolute bottom-0 h-5 text-3 font-bold text-center anim-in-bottom" style="background: red;">{{ t('perf.contract.newsTicker') }}</div>

<img v-if="$clicks >= 7" class="absolute w-full top-0 left-0 anim-in-fade" style="animation-delay: 1s" src="https://media0.giphy.com/media/gKrbnqo25MlI2TUC78/giphy.gif?cid=5a38a5a2t8ttnrddxn9k4d8zv6vor7df4v6irplo70a63jdj" />

<OnEnter>
    <RiveJulian class="w-80 absolute -bottom-20 left-20 transition-all duration-250"
      :class="{'translate-y-20 -translate-x-40 scale-[150%] rotate-z-[45deg]': $clicks >= 7 }"
     :thumbsUp="$clicks >= 7" :happy="$clicks >= 7" />
    <RiveJulian class="w-80 absolute -bottom-20 right-20 rotate-y-[180deg] transition-all duration-250"
      :class="{'translate-y-20 translate-x-40 scale-[150%] rotate-z-[45deg]': $clicks >= 7 }"
    :thumbsUp="$clicks >= 7" :happy="$clicks === 7" :unsure="$clicks >= 8" :model="'Sven'" />
</OnEnter>
