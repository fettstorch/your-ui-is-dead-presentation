<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<h1 class="-translate-y-50">{{ t('reasons.long2') }}
  <h3 style="color: darkgray">
    <Typewriter immediate>Timing Functions </Typewriter>
  </h3>
</h1>

<OnEnter>
  <TimingFunctionComparison :clicks="$clicks" />
</OnEnter>

<iframe v-if="$clicks >= 10" src="https://cubic-bezier.com/#.17,.67,.83,.67" class="anim-in-bottom w-full h-[80vh] absolute top-80 hover:-translate-y-80 transition-all duration-1000"/>