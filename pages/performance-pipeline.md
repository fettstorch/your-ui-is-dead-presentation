<script setup>
import { useI18n } from '../composables/useI18n'
import { useTarget } from '../composables/useTarget'
const { t } = useI18n()

const { isWeb } = useTarget()
</script>

<div class="absolute left-30 top-1/2 transition-all duration-1000" :class="{
    '-translate-y-57 -translate-x-3': $clicks < 2,
    ' -translate-y-100 -translate-x-3': $clicks >= 2
}">
    <h1>{{ t('perf.overview.h1') }}</h1>
    <Typewriter immediate class="absolute -bottom-8" style="color: darkgray">Pipeline</Typewriter>
</div>

<PageRender v-if="$clicks >= 1" :clicks="$clicks" class="absolute left-10 bottom-10 w-140 h-100 transition-all duration-1000" :class="{
    'translate-x-0 -translate-y-20': $clicks >= 2
    }" />

<!-- style -->
<div v-if="$clicks >= 6 && $clicks < 7" class="absolute top-35 left-160 text-3">
    <div class="anim-in-top ex-block">1. Selector Matching <br> <Typewriter immediate :delay="1000" class="font-normal">{{ t('perf.pipe.selectorMatching') }}</Typewriter></div>
    <div class="anim-in-top ex-block">2. Cascade Resolution <br> <Typewriter immediate :delay="3500" class="font-normal">{{ t('perf.pipe.cascadeResolution') }}</Typewriter></div>
    <div class="anim-in-top ex-block">3. Updates Render Tree <br> <Typewriter immediate :delay="5500" class="font-normal" style="color: #56a2e8">Links elements to style nodes.</Typewriter></div>
</div>
<DOMCSSOMRenderTree v-if="$clicks >= 4 && $clicks < 7" :clicks="$clicks" class="absolute left-40 top-5 w-115 h-105" />



<!-- layout -->
<div v-if="$clicks >= 7 && $clicks < 9" class="absolute top-35 left-160 text-3">
    <div class="anim-in-top ex-block">1. Box Generation <br> <Typewriter immediate :delay="1000" class="font-normal">{{ t('perf.pipe.boxGeneration') }}</Typewriter></div>
    <div class="anim-in-top ex-block">2. Geometry Calculation <br> <Typewriter immediate :delay="3500" class="font-normal">{{ t('perf.pipe.geometryCalc') }}</Typewriter></div>
    <div class="anim-in-top ex-block">3. Coordinate Assignment <br> <Typewriter immediate :delay="5500" class="font-normal">{{ t('perf.pipe.coordAssign') }}</Typewriter></div>
</div>
<PageRenderLayout v-if="$clicks >= 8 && $clicks < 9" class="absolute left-10 bottom-30 w-140 h-100 opacity-50"/>

<!-- paint -->
<div v-if="$clicks >= 9 && $clicks < 12" class="absolute top-30 left-160 text-3 flex flex-col">
    <PipelineStep color="#22c55e" class="anim-in-top scale-60 -translate-x-10">Layerize</PipelineStep>
    <div class="anim-in-top"><div class="ex-block">1. Identify Layers<span></span></div><Typewriter immediate :delay="1000" class="font-normal ex-text">{{ t('perf.pipe.identifyLayers') }}</Typewriter></div>
    <PipelineStep v-if="$clicks >= 11" color="#22c55e" class="anim-in-top scale-60 -translate-x-10">Rasterize</PipelineStep>
    <div v-if="$clicks >= 11" class="anim-in-top" ><div class="ex-block">2. Create Textures<span></span></div><Typewriter immediate class="font-normal ex-text">{{ t('perf.pipe.createTextures') }}</Typewriter></div>
</div>

<!-- composite -->
<div v-if="$clicks >= 12 && $clicks < 14" class="absolute top-35 left-160 text-3">
    <div class="anim-in-top ex-block">1. Layer Composition <br> <Typewriter immediate :delay="1000" class="font-normal">{{ t('perf.pipe.layerComposition') }}</Typewriter></div>
    <div v-if="$clicks >= 13" class="anim-in-top ex-block" style="animation-delay: 0s">2. Frame Display <br> <Typewriter immediate class="font-normal">{{ t('perf.pipe.frameDisplay') }}</Typewriter></div>
</div>

<img v-if="$clicks === 12" class="patrick anim-in-fade w-80" style="animation-delay: 1s" src="/patrick-letter.gif" />
<img v-if="$clicks === 12" class="anim-in-fade w-40 -translate-x-10 -translate-y-20" style="animation-delay: 3s" src="/patrick-letter-nothing.jpg" />

<!-- Examples / Lessons -->
<div v-if="$clicks >= 15" class="absolute top-35 left-170 text-3 max-w-70">
    <div class="anim-in-top ex-block">1. Composite only 😌 <br> <Typewriter immediate :delay="1000" class="font-normal">transform (translate, rotate, scale, skew), opacity</Typewriter></div>
    <div class="anim-in-top ex-block">2. Paint & Composite 🙂<br> <Typewriter immediate :delay="4000" class="font-normal">color, background, border-color, border-radius, outline, visibility, ...</Typewriter></div>
    <div class="anim-in-top ex-block">3. Layout & Paint & Composite 🙁<br> <Typewriter immediate :delay="7000" class="font-normal">width, height, top, right, bottom, left, position, display, flex-*, grid-*, align-*, justify-*, min-*, max-*, padding, margin, border-width, z-index, ...</Typewriter></div>
    <div class="anim-in-top ex-block">4. Restyle & Reflow & Repaint & Composite 😭<br> <Typewriter immediate :delay="9000" class="font-normal">{{ t('perf.pipe.restyleReflow') }}</Typewriter></div>
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-row top-3 right-37 w-60 pointer-events-none">
    <img class="relative w-14" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
    <span class="ml-2 text-2 italic translate-y-6">{{ t('perf.pipe.hintColorize') }} <br> {{ t('perf.pipe.hintHeight') }}</span>
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-row top-25 right-57 w-60 pointer-events-none">
    <img class="relative w-14" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
    <span class="ml-2 text-2 italic translate-y-6">{{ t('perf.pipe.hintPadding') }}</span>
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-row top-16 left-15 w-60 pointer-events-none">
    <span class="ml-2 text-2 italic translate-y-6">{{ t('perf.pipe.hintScale') }}</span>
    <img class="relative -scale-x-[100%] w-14" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-col top-30 left-11 w-60 pointer-events-none">
    <span class="ml-2 text-2 italic translate-y-6"><span v-html="t('perf.pipe.hintMargins')" /></span>
    <img class="relative translate-y-6 rotate-[90deg] -scale-x-[100%] w-11" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
</div>

<!-- Info-box web only -->
<div v-if="$clicks >= 15 && isWeb" class="info-box transition-all duration-600 absolute left-1/2 -translate-x-[50%] -bottom-1 translate-y-[90%] bg-gray-900 rounded-xl px-6 py-3 hover:translate-y-0!" style="border: 0.2rem solid var(--slidev-theme-primary)" >
Mind that this is but a very simplified mental model of the actual process of the causalities in the render pipeline. In reality e.g.:<br>
<details class="pipe-detail text-sm my-1"><summary class="cursor-pointer">even when using...</summary>even when using a predefined hover class the restyle step will in fact happen as the browser needs to redetermine what rules should apply now to a certain element.</details>
<details class="pipe-detail text-sm my-1"><summary class="cursor-pointer">even removing an...</summary>even removing an element would actually trigger the restyle occasionally for example due to an nth-element rule.</details>
But also sometimes certain restyles/reflows need only happen once before the animation, then all following keyframes can require only e.g. repaint -> composite.
<div class="absolute w-10 h-10 flex flex-row justify-center items-center -top-5 -right-5 rounded-[50%] bg-gray-900 italic font-bold" style="border: 0.2rem solid var(--slidev-theme-primary); color: var(--slidev-theme-primary)">i</div>
</div>

<style>
    .ex-block {
        margin-bottom: 1em;
        font-weight: bold;
        text-decoration: underline;
        color: var(--slidev-theme-primary);
    }
    .ex-block:nth-child(2) {
        animation-delay: 3000ms;
    }
    .ex-block:nth-child(3) {
        animation-delay: 5000ms;
    }
    .ex-block:nth-child(4) {
        animation-delay: 9000ms;
    }
    .ex-block .font-normal, .ex-text {
        display: inline-block;
        font-style: italic;
        color: white;
    }

    .pipe-detail summary {
        list-style: none;
    }
    .pipe-detail summary::marker,
    .pipe-detail summary::-webkit-details-marker {
        display: none;
    }
    .pipe-detail summary::before {
        content: '▶';
        display: inline-block;
        font-size: 1.1em;
        margin-right: 0.4em;
        color: var(--slidev-theme-primary);
        transition: transform 0.2s;
    }
    .pipe-detail[open] summary::before {
        transform: rotate(90deg);
    }
    .pipe-detail[open] summary {
        font-size: 0;
    }
    .pipe-detail[open] summary::before {
        font-size: 1.1rem;
    }

    .patrick {
        mask-image: radial-gradient(70% 70% at center, black, transparent 70%);
        filter: brightness(120%);
    }

    .info-box:not(:hover) {
        animation: attentionjump 1s alternate infinite ease;
    }

    @keyframes attentionjump {
        0% { translate: 0 0; }
        25% { translate: 0 -10%; }
        50% { translate: 0 0; }
    }
</style>

<ClickCounter />
