<div class="absolute left-30 top-1/2 transition-all duration-1000" :class="{
    ' -translate-y-57 -translate-x-3': $clicks < 2,
    ' -translate-y-100 -translate-x-3': $clicks >= 2
}">
    <h1>3. This would hurt performance!</h1>
    <Typewriter immediate class="absolute -bottom-8" style="color: darkgray">Pipeline</Typewriter>
</div>

<PageRender v-if="$clicks >= 1" :clicks="$clicks" class="absolute left-10 bottom-10 w-140 h-100 transition-all duration-1000" :class="{
    'translate-x-0 -translate-y-20': $clicks >= 2
    }" />

<!-- style -->
<div v-if="$clicks >= 6 && $clicks < 7" class="absolute top-35 left-160 text-3">
    <div class="anim-in-top ex-block">1. Selector Matching <br> <Typewriter immediate :delay="1000" class="font-normal">Matches CSS selectors against DOM elements to determine which rules apply.</Typewriter></div>
    <div class="anim-in-top ex-block">2. Cascade Resolution <br> <Typewriter immediate :delay="3500" class="font-normal">Resolves conflicts using specificity, source order, and !important.</Typewriter></div>
    <div class="anim-in-top ex-block">3. Updates Render Tree <br> <Typewriter immediate :delay="5500" class="font-normal" style="color: #56a2e8">Links elements to style nodes.</Typewriter></div>
</div>
<DOMCSSOMRenderTree v-if="$clicks >= 4 && $clicks < 7" :clicks="$clicks" class="absolute left-40 top-5 w-115 h-105" />



<!-- layout -->
<div v-if="$clicks >= 7 && $clicks < 9" class="absolute top-35 left-160 text-3">
    <div class="anim-in-top ex-block">1. Box Generation <br> <Typewriter immediate :delay="1000" class="font-normal">Creates layout boxes for each Render Tree node (block, inline, flex, grid).</Typewriter></div>
    <div class="anim-in-top ex-block">2. Geometry Calculation <br> <Typewriter immediate :delay="3500" class="font-normal">Recursively computes width and height, often derived from children or content.</Typewriter></div>
    <div class="anim-in-top ex-block">3. Coordinate Assignment <br> <Typewriter immediate :delay="5500" class="font-normal">Assigns precise floating-point x/y positions to each box.</Typewriter></div>
</div>
<PageRenderLayout v-if="$clicks >= 8 && $clicks < 9" class="absolute left-10 bottom-30 w-140 h-100 opacity-50"/>

<!-- paint -->
<div v-if="$clicks >= 9 && $clicks < 12" class="absolute top-30 left-160 text-3 flex flex-col">
    <PipelineStep color="#22c55e" class="anim-in-top scale-60 -translate-x-10">Layerize</PipelineStep>
    <div class="anim-in-top"><div class="ex-block">1. Identify Layers<span></span></div><Typewriter immediate :delay="1000" class="font-normal ex-text">Identifies elements in the Render Tree that should be grouped into one layer based on how likely it is they should be animated together.</Typewriter></div>
    <PipelineStep v-if="$clicks >= 11" color="#22c55e" class="anim-in-top scale-60 -translate-x-10">Rasterize</PipelineStep>
    <div v-if="$clicks >= 11" class="anim-in-top" ><div class="ex-block">2. Create Textures<span></span></div><Typewriter immediate class="font-normal ex-text">Delegate tasks to render threads. Generate textures (actual pixelmaps) via GPU.</Typewriter></div>
</div>

<!-- composite -->
<div v-if="$clicks >= 12 && $clicks < 14" class="absolute top-35 left-160 text-3">
    <div class="anim-in-top ex-block">1. Layer Composition <br> <Typewriter immediate :delay="1000" class="font-normal">All the layers and pixel data are combined together to create a plan on how to construct the next frame.</Typewriter></div>
    <div v-if="$clicks >= 13" class="anim-in-top ex-block" style="animation-delay: 0s">2. Frame Display <br> <Typewriter immediate class="font-normal">The Frame generation instruction is sent to the GPU process and drawn onto the display.</Typewriter></div>
</div>

<img v-if="$clicks === 12" class="patrick anim-in-fade w-80" style="animation-delay: 1s" src="/patrick-letter.gif" />
<img v-if="$clicks === 12" class="anim-in-fade w-40 -translate-x-10 -translate-y-20" style="animation-delay: 3s" src="/patrick-letter-nothing.jpg" />

<!-- Examples / Lessons -->
<div v-if="$clicks >= 15" class="absolute top-35 left-170 text-3 max-w-70">
    <div class="anim-in-top ex-block">1. Composite only 😌 <br> <Typewriter immediate :delay="1000" class="font-normal">transform (translate, rotate, scale, skew), opacity</Typewriter></div>
    <div class="anim-in-top ex-block">2. Paint & Composite 🙂<br> <Typewriter immediate :delay="4000" class="font-normal">color, background, border-color, border-radius, outline, visibility, ...</Typewriter></div>
    <div class="anim-in-top ex-block">3. Layout & Paint & Composite 🙁<br> <Typewriter immediate :delay="7000" class="font-normal">width, height, top, right, bottom, left, position, display, flex-*, grid-*, align-*, justify-*, min-*, max-*, padding, margin, border-width, z-index, ...</Typewriter></div>
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-row top-3 right-37 w-60 pointer-events-none">
    <img class="relative w-14" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
    <span class="ml-2 text-2 italic translate-y-6">hover to colorize <br> click to increase height</span>
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-row top-30 right-57 w-60 pointer-events-none">
    <img class="relative w-14" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
    <span class="ml-2 text-2 italic translate-y-6">click to <br> increase padding</span>
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-row top-16 left-15 w-60 pointer-events-none">
    <span class="ml-2 text-2 italic translate-y-6">hover to scale</span>
    <img class="relative -scale-x-[100%] w-14" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
</div>

<div v-if="$clicks >= 15" class="anim-in-fade absolute flex flex-col top-26 left-11 w-60 pointer-events-none">
    <span class="ml-2 text-2 italic translate-y-6">hover boxes to <br> increase their x-margins</span>
    <img class="relative translate-y-6 rotate-[90deg] -scale-x-[100%] w-11" src="https://media0.giphy.com/media/WSxuismGwJHM8CAvBW/giphy.gif?cid=5a38a5a2so7n3ok6y3mktqi2yf4qv6jrkfofhbqmlgq8q6ug" />
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
    .ex-block .font-normal, .ex-text {
        display: inline-block;
        font-style: italic;
        color: white;
    }

    .patrick {
        mask-image: radial-gradient(70% 70% at center, black, transparent 70%);
        filter: brightness(120%);
    }
</style>