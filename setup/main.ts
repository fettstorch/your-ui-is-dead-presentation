import { defineAppSetup } from "@slidev/types";
import { inject } from "@vercel/analytics";

export default defineAppSetup(() => {
  inject();
});
