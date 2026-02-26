
<h1 class="absolute left-1/2 -translate-x-1/2 top-60 transition-all duration-1000" :class="{
    '-translate-y-50': $clicks >= 1
}"><Typewriter immediate>Thank you for your attention!</Typewriter></h1>

<BlueskyProfile v-if="$clicks >= 1" class="absolute right-10 bottom-10 anim-in-top" style="animation-delay: 2s" theme="light"/>

<div v-if="$clicks >= 1" class="absolute left-50 bottom-10 w-full anim-in-left">
    <div><Typewriter immediate> Link to this presentation:</Typewriter></div>
    <img class="w-80" src="/youruiisdeadonline.svg" />
</div>

<div class="anim-in-fade">
    <div v-if="$clicks >= 1" class="disco-overlay absolute inset-0 z-9999 pointer-events-none" />
    <div v-if="$clicks >= 1" class="disco-light disco-light-left absolute -top-40 -left-40 w-100 h-80 rounded-full pointer-events-none opacity-20" />
    <div v-if="$clicks >= 1" class="disco-light disco-light-right absolute -top-40 -right-40 w-80 h-80 rounded-full pointer-events-none opacity-20" />
</div>

<OnEnter>
    <RiveJulian v-if="$clicks >= 1" class="slide-in-slowly z-1000 absolute -left-20 -bottom-55 pointer-events-none w-100 h-80" style="transform: rotate(10deg)" vibing amazed/>
    <RiveJulian v-if="$clicks >= 1" model="Sven" class="slide-in-slowly z-1000 absolute -right-20 -bottom-55 pointer-events-none w-100 h-80" style="transform: scaleX(-1) rotate(10deg)" vibing happy />
    <audio v-if="$clicks >= 1" src="partyRock.mp3" autoplay />
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
</style>
