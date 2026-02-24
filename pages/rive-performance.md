<!--
<h1 class="relative">
    <Typewriter immediate :delay="1000" class="transition-all duration-1000">3. This would hurt performance!</Typewriter>
</h1>
-->

<OnEnter>
    <AnimatedArrow :config="{ start: [0, 0], end: [0.9, 0.9], strokeWidth: 7, dashArray: 900 }" />
    <AnimatedArrow :config="{ start: [0, 0.5], controlPoints: [[0.5, 0]], end: [0.9, 0.1], strokeWidth: 2 }" />
    <AnimatedArrow :config="{ start: [0, 0.5], controlPoints: [[0.25, 0], [0.75, 1.5]], end: [0.9, 0.4], strokeWidth: 2, dashArray: 600 }" />
</OnEnter>

<svg viewBox="00 0 100 100" class=" absolute left-40 bottom-10 bg-red-500 w-100 opacity-0">
    <defs>
        <marker
            id="arrowhead"
            markerWidth="3"
            markerHeight="3"
            refX="1.5"
            refY="1.5"
            orient="auto"
        >
            <polygon points="0 0, 3 1.5, 0 3" fill="#d3d3d3"/>
        </marker>
    </defs>
    <path d="M10 50, Q50 0 50 50, T85 50, T 10 80"
    stroke="#d3d3d3"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-dasharray="260"
    stroke-dashoffset="260"
    marker-end="url(#arrowhead)"
    />
</svg>

<style>
    path {
        animation: draw 1s ease-in-out both;
    }

    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

    polygon {
        animation: fadeIn 1s 0.8s ease both;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>