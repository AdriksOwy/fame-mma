<template>
  <div
    class="
      w-1/2 md:w-1/3 lg:w-1/4
    "
  >
    <p
      class="
        tracking-wider
        text-base sm:text-xl lg:text-2xl
        text-red-600
      "
    >
      {{ nickPlayer }}
    </p>
    <p
      class="
        tracking-wider
        text-sm sm:text-lg lg:text-xl
      "
    >
      {{ namePlayer }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card-item",
  props: {
    nickPlayer: String,
    namePlayer: String,
  },
});
</script>
