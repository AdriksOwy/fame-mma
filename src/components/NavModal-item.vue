<template>
  <div
    @click.self="closeModal"
    class="
      flex flex-col
      items-center
      fixed
      w-full
      h-full 
      bg-black
    "
  >
    <NavModalButton>
      FAQ
    </NavModalButton>
    <NavModalButton
      @click="closeModal"
      href="#FightCard"
    >
      FIGHT CARD
    </NavModalButton>
    <NavModalButton>
      BUY ACCESS
    </NavModalButton>
    <NavModalButton>
      SIGN IN
    </NavModalButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavModalButton from "@/components/Nav-Buttons/NavModal-button.vue";

export default defineComponent({
  name: "NavModal-item",
  components: {
    NavModalButton,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
});
</script>
