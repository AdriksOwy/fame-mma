<template>
  <section
    class="
      flex
      justify-center
      items-center
      relative
      z-0
    "
  >
    <Timer
      :year="2022"
      :month="6"
      :date="30"
      :hour="20"
      :minute="0"
      :second="0"
      :millisecond="0"
    />
    <Video />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "@/components/Ad/Timer-item.vue";
import Video from "@/components/Ad/Video-item.vue";

export default defineComponent({
  name: "Ad-item",
  components: {
    Timer,
    Video,
  },
});
</script>
