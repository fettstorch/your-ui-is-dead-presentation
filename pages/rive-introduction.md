<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<img v-if="$clicks >= 3" class="w-90 anim-in-fade absolute top-10 left-10 rounded-xl" src="https://media2.giphy.com/media/l2SpMbZ3PlhSVjinK/200.gif?cid=5a38a5a2jpoi9bsy1hhge385bxp7pballd6kxre4wokamfvl" />

<h1 class="relative">
    <Typewriter v-if="$clicks >= 1" immediate :keep-caret="false">{{ t('rive.intro.whatIs') }}</Typewriter>
    <Typewriter immediate :delay="1000" :speed="100">Rive</Typewriter>
    <span v-if="$clicks >= 1" class="anim-in-top" style="animation-delay: 1s">?</span>
</h1>

<img v-if="$clicks >= 2" src="/cool-unicorn.png" class="w-90 absolute -bottom-10 -right-10 anim-in-slide-right" />

<OnEnter>
    <RiveJulian class="w-50 absolute bottom-0 -left-110 transition-all duration-8000 linear" happy walking :jump="$clicks >= 5" :class="{'translate-x-380': $clicks >= 4 }"/>
    <RiveJulian class="w-50 absolute bottom-0 -left-50  transition-all duration-8000 linear" :model="'Sven'" happy walking :class="{'translate-x-380': $clicks >= 4 }"/>
</OnEnter>

<ClickCounter />
