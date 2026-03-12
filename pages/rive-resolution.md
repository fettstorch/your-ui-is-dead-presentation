<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<h1 v-if="$clicks >= 1" class="absolute left-1/2 -translate-x-1/2 top-60 transition-all duration-1000" :class="{
    '-translate-y-50': $clicks >= 1
}"><Typewriter immediate>{{ t('rive.res.h1') }}</Typewriter></h1>

<BlueskyProfile v-if="$clicks >= 1" class="absolute right-10 bottom-10 anim-in-top" style="animation-delay: 2s" theme="light" />

<div v-if="$clicks >= 1" class="absolute left-50 bottom-10 w-full anim-in-left">
    <div><Typewriter immediate>{{ t('rive.res.linkLabel') }}</Typewriter></div>
    <img class="w-80" src="/youruiisdeadonline.svg" />
</div>

<div class="anim-in-fade">
    <div class="disco-overlay absolute inset-0 z-9999 pointer-events-none" />
    <div class="disco-light disco-light-left absolute -top-40 -left-40 w-100 h-80 rounded-full pointer-events-none opacity-100" />
    <div class="disco-light disco-light-right absolute -top-40 -right-40 w-80 h-80 rounded-full pointer-events-none opacity-100" />
</div>

<OnEnter>
    <RiveJulian class="slide-in-slowly z-1000 absolute -left-20 -bottom-45 pointer-events-none w-100 h-80" style="transform: rotate(10deg)" vibing amazed/>
    <RiveJulian model="Sven" class="slide-in-slowly z-1000 absolute -right-20 -bottom-55 pointer-events-none w-100 h-80" style="transform: scaleX(-1) rotate(10deg)" vibing happy />
    <audio src="partyRock-fadein.mp3" autoplay />
</OnEnter>

<OnEnter>
 <div class="links anim-in-fade" v-if="$clicks >= 1">
   <span class="links-label"><span v-html="t('rive.res.linksLabel')" /></span>
   <div class="links-panel">
     <a href="https://cubic-bezier.com" target="_blank">cubic-bezier.com</a>
     <a href="https://prismic.io/blog/css-animation-examples" target="_blank">CSS Animation Examples</a>
     <a href="https://eleftheriabatsou.hashnode.dev/advanced-css-animations-and-examples" target="_blank">Advanced CSS Animations</a>
     <a href="https://webperf.tips/tip/browser-rendering-pipeline/" target="_blank">Browser Rendering Pipeline</a>
     <a href="https://webperf.tips/tip/layers-and-compositing/" target="_blank">Layers and Compositing</a>
     <a href="https://support.google.com/chrome/thread/346713355" target="_blank">Chrome's Rendering Pipeline</a>
     <a href="https://motion.dev/magazine/web-animation-performance-tier-list" target="_blank">Animation Performance Tier List</a>
     <a href="https://aleksandargjoreski.dev/blog/browser-rendering-pipeline/" target="_blank">Browser Rendering Pipeline (Gjoreski)</a>
     <a href="https://csstriggers.com/" target="_blank">CSS Triggers</a>
   </div>
 </div>
</OnEnter>

<style>
@keyframes slideInSlowly {
  from { translate: 0 100%; }
  to { translate: 0 0; }
}
.slide-in-slowly {
  animation: slideInSlowly 14s ease-out forwards;
}
@keyframes disco {
  0%   { background-color: rgba(255, 0, 0, 0.1); }
  16%  { background-color: rgba(255, 165, 0, 0.1); }
  33%  { background-color: rgba(255, 255, 0, 0.1); }
  50%  { background-color: rgba(0, 255, 0, 0.1); }
  66%  { background-color: rgba(0, 128, 255, 0.1); }
  83%  { background-color: rgba(180, 0, 255, 0.1); }
  100% { background-color: rgba(255, 0, 0, 0.1); }
}
.disco-overlay {
  animation: disco 3s linear infinite;
}
@keyframes spinLight {
  from { transform: rotate(0deg); }
  50% { transform: rotate(180deg) scale(1.3)}
  to { transform: rotate(360deg); }
}
.disco-light {
  background: repeating-conic-gradient(
    rgba(255, 0, 0, 0.6) 0deg,
    rgba(255, 255, 0, 0.6) 30deg,
    rgba(0, 255, 0, 0.6) 60deg,
    rgba(0, 255, 255, 0.6) 90deg,
    rgba(0, 0, 255, 0.6) 120deg,
    rgba(255, 0, 255, 0.6) 150deg,
    rgba(255, 0, 0, 0.6) 180deg
  );
  filter: blur(30px);
}
.disco-light-left {
  animation: spinLight 6s linear infinite;
}
.disco-light-right {
  animation: spinLight 6s linear infinite reverse;
}
.links {
  position: absolute;
  left: 0;
  top: 25%;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  z-index: 10000;
  pointer-events: auto;
}
.links-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 12px 6px;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
  line-height: 1;
  user-select: none;
  white-space: nowrap;
}
.links-panel {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(0, 0, 0, 0.85);
  padding: 12px 16px;
  border-radius: 0 8px 8px 0;
  max-width: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-width 0.4s ease, opacity 0.3s ease, padding 0.4s ease;
  padding: 12px 0;
}
.links:hover .links-panel {
  max-width: 400px;
  opacity: 1;
  padding: 12px 16px;
}
.links:hover .links-label {
  border-radius: 0;
}
.links-panel a {
  color: #93c5fd;
  text-decoration: none;
  font-size: 0.8rem;
  white-space: nowrap;
  transition: color 0.2s;
}
.links-panel a:hover {
  color: #bfdbfe;
  text-decoration: underline;
}
</style>

<ClickCounter />
