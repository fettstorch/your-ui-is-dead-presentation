<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<h1 class="absolute w-190 top-1/2 left-1/2 -translate-x-1/2 transition-all duration-1000"
    :class="{
        '-translate-y-50': $clicks >= 1
    }"
>
    <Typewriter immediate :delay="1000">{{ t('rive.perf.h1') }}</Typewriter>
</h1>

<OnEnter>
<div class="absolute left-10 top-50 text-4">
    <div><Typewriter v-if="$clicks >= 2" immediate>{{ t('rive.perf.loadingtimes') }}</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 3" immediate>{{ t('rive.perf.loadingtimesDetail') }}</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 4" immediate>{{ t('rive.perf.execution') }}</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 5" immediate>{{ t('rive.perf.executionDetail1') }}</Typewriter></div>
    <div><Typewriter v-if="$clicks >= 5" immediate>{{ t('rive.perf.executionDetail2') }}</Typewriter></div>
</div>

<img v-if="$clicks >= 6" class="anim-in-left w-30 absolute left-10 bottom-10" src="https://media1.giphy.com/media/9KawrQzIwdAYg/giphy.gif?cid=5a38a5a20k568ekjsqgzyabdbtgdw32c838yzm0yt1o46cod" />

</OnEnter>
