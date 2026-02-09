<h1 class="-translate-y-50">2. I Don't Have The Capabilities!
  <h3 style="color: darkgray">
    <Typewriter immediate>Timing Functions </Typewriter>
  </h3>
</h1>

<TimingFunctionComparison :clicks="$clicks" />

<iframe v-if="$clicks >= 10" src="https://cubic-bezier.com/#.17,.67,.83,.67" class="anim-in-bottom w-full h-[80vh] absolute top-80 hover:-translate-y-80 transition-all duration-1000"/>