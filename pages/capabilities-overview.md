<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<OnEnter>
  <Typewriter v-if="$clicks < 1" class="anim-in font-bold absolute left-8 top-10 speach-bubble text-primary" immediate>{{ t('reasons.long2') }}</Typewriter>
  <Typewriter v-else class="anim-in font-bold absolute left-8 top-10 speach-bubble text-primary transition-all duration-1000" :class="{ 'translate-x-10': $clicks > 1 }" immediate>2. Capabilities</Typewriter>
</OnEnter>

<OnEnter :delayMs="1000">
  <Typewriter v-if="$clicks < 1" class="anim-in font-bold absolute left-110 top-30 speach-bubble text-primary" immediate>{{ t('reasons.long3') }}</Typewriter>
  <Typewriter v-else class="anim-in font-bold absolute left-110 top-30 speach-bubble transition-all duration-1000 text-primary" :class="{ '-translate-y-20 translate-x-55': $clicks > 1 }" immediate>{{ t('reasons.short3') }}</Typewriter>
</OnEnter>

<OnEnter :delayMs="2000">
  <Typewriter v-if="$clicks < 1" class="anim-in font-bold absolute left-130 top-70 speach-bubble text-primary" immediate>{{ t('reasons.long4') }}</Typewriter>
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

<AnimatedArrow v-if="$clicks >= 5" :config="{ start: [0.2, 0.2], end: [0.2, 0.6], strokeWidth: 4 }" />
<AnimatedArrow v-if="$clicks >= 5" :config="{ start: [0.48, 0.2], end: [0.225, 0.6], controlPoints: [[0.4, 0.4]], strokeWidth: 4 }" />

<AnimatedArrow v-if="$clicks >= 6" :config="{ start: [0.2, 0.2], end: [0.76, 0.6], controlPoints: [[0.3, 0.7], [0.7, 0.4]], strokeWidth: 4, color: 'white' }" />
<AnimatedArrow v-if="$clicks >= 6" :config="{ start: [0.48, 0.2], end: [0.76, 0.65], controlPoints: [[0.6, 0.7]], strokeWidth: 4, color: 'white' }" />
<AnimatedArrow v-if="$clicks >= 6" :config="{ start: [0.8, 0.2], end: [0.80, 0.6], strokeWidth: 4, color: 'white' }" />

<ClickCounter />

<!--
-->