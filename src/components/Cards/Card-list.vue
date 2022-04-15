<template>
  <div
    v-for="card in cards"
    :key="card.id"
    class="
      p-1
      py-5 md:py-10 xl:py-16
      border-b
    border-gray-800
    "
  >
    <div
      class="
        flex
        justify-center md:justify-evenly items-center
      "
    >
      <img
        :src="card.first_image"
        :alt="card.title"
        class="
          w-1/2 md:w-1/3 lg:w-1/4
        "
      />
      <p
        class="
          absolute
          z-10
          tracking-widest
          text-xl sm:text-3xl
        "
      >
        VS
      </p>
      <img
        :src="card.second_image"
        :alt="card.title"
        class="
          w-1/2 md:w-1/3 lg:w-1/4
        "
      />
    </div>
    <div
      class="
        flex flex-row
        md:justify-evenly
        text-center
      "
    >
      <CardPlayer
        :nickPlayer="card.first_nick"
        :namePlayer="card.first_name"
      />
      <CardPlayer
        :nickPlayer="card.second_nick"
        :namePlayer="card.second_name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardPlayer from "@/components/Cards/Card-item.vue";

export default defineComponent({
  name: "Card-list",
  components: {
    CardPlayer,
  },
  data: () => ({
    cards: [],
  }),
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const json = require("/data/cards.json");
    this.cards = json.cards;
  },
});
</script>
