<template>
  <div
    class="
      flex flex-col
      items-center
      w-16 sm:w-20 md:w-24 lg:w-28
      py-2 sm:py-3 lg:py-4
      border md:border-2
      rounded-2xl
      shadow-center-box
      bg-opacity-70
      bg-black
    "
  >
    <p
      class="
        tracking-wider
        text-sm sm:text-base md:text-xl lg:text-3xl
      "
    >
      <slot />
    </p>
    <p
      class="
        tracking-wider
        text-xs sm:text-sm md:text-base lg:text-xl
      "
    >
      {{ typeTime }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Counting-item",
  props: {
    typeTime: String,
  },
});
</script>
