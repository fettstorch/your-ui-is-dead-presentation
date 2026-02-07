import { computed, ref } from "vue";
import { onSlideEnter, onSlideLeave } from "@slidev/client";

const globalActive = ref<string[]>([]);

export function useTypewriter({
  immediate = false,
}: { immediate?: boolean } = {}) {
  const instanceId = crypto.randomUUID();

  if (immediate) {
    globalActive.value.push(instanceId);
  }

  onSlideEnter(() => {
    globalActive.value.push(instanceId);
  });

  onSlideLeave(() => {
    globalActive.value = globalActive.value.filter((id) => id !== instanceId);
  });

  function checkIfActive() {
    return globalActive.value[globalActive.value.length - 1] === instanceId;
  }

  return {
    isActive: computed(checkIfActive),
  };
}
