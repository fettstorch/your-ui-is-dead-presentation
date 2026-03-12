<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { useTarget } from '../composables/useTarget';

const { $clicks, $clicksContext } = useSlideContext()
const shouldShow = useTarget().target === 'web'
</script>

<template v-if="shouldShow">
    <div class="fixed left-5 bottom-5 w-10 h-10 text-3 whitespace-nowrap flex flex-row justify-center items-center rounded-[50%] bg-gray-800 text-white font-bold"
        style="border: 0.1em solid var(--slidev-theme-primary);">
        {{ $clicks }}/{{ $clicksContext.total }}
    </div>
</template>