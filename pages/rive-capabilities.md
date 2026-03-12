<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<h1 class="relative">
    <Typewriter immediate :delay="1000" class="transition-all duration-1000" :class="{'opacity-50 blur-10': $clicks >= 1}" >{{ t('rive.cap.blurredH1') }}</Typewriter>
</h1>

<OnEnter>
    <!-- Sven -->
    <RiveJulian :model="'Sven'" class="w-120 scale-x-[-130%] absolute -bottom-170 -right-80 transition-all duration-500"
    thumbs-up happy
    :class="{
        '-translate-y-100 -rotate-z-30 -translate-x-40': $clicks === 1,
        }" />
    <div v-if="$clicks === 1" class="speach-bubble absolute right-40 bottom-80 right anim-in-top"><span v-html="t('rive.cap.bubble')" /></div>
    <!-- Julian -->
    <RiveJulian class="w-120 scale-x-[130%] absolute -bottom-170 -left-80 transition-all duration-500"
    thumbs-up happy
    :class="{
        '-translate-y-100 rotate-z-30 translate-x-40': $clicks === 1,
        }" />
</OnEnter>

<ClickCounter />
