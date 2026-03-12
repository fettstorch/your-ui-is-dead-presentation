<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

# Reasons Against Animations

<div class="mt-40">
  <div>1. <Typewriter v-if="$clicks >= 1" immediate >{{ t('reasons.item1') }}</Typewriter></div>
  <div>2. <Typewriter v-if="$clicks >= 2" immediate >{{ t('reasons.item2') }}</Typewriter></div>
  <div>3. <Typewriter v-if="$clicks >= 3" immediate >{{ t('reasons.item4') }}</Typewriter></div>
  <div>4. <Typewriter v-if="$clicks >= 4" immediate >{{ t('reasons.item3') }}</Typewriter></div>
</div>

<OnEnter>
  <RiveJulian class="w-100 absolute left-10 -bottom-40 transition-all" model="Sven" :style="{
    transform: `translateY(calc(${$clicks}0% * (1 - 0.${$clicks}))) scale(calc(1 - 0.${$clicks}))`
  }"
  :unsure="$clicks === 1"
  :sad="$clicks >= 2"
  />
</OnEnter>
<OnEnter class="-scale-x-100">
  <RiveJulian class="w-100 absolute left-10 -bottom-90 transition-all" :style="{
    transform: `rotateZ(${Math.pow(-1, $clicks) * ($clicks) * 10}deg) scale(calc(1.${$clicks} + ${$clicks * $clicks * 0.041}))`
  }" :angry="$clicks >= 1" :angryWaving="$clicks >= 3" />
</OnEnter>

<ClickCounter />

<!--
-->