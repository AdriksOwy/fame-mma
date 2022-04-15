<template>
  <nav
    class="
      lg:flex
      lg:justify-center
      relative
      z-20
      lg:py-5
      border-t-2
      shadow-3xl-bottom md:shadow-4xl-bottom
    "
  >
    <div
      class="
        flex
        justify-between
        w-full lg:w-3/4
        p-3 lg:p-0
        animate-slideTop
      "
    >
      <a
        href=""
      >
        <img
          src="/assets/LOGO_FAME_MMA_V1.svg"
          alt="FAME MMA LOGO"
          class="
            w-32 md:w-48
          "
        />
      </a>
      <div
        class="
          hidden lg:flex
          gap-8
        "
      >
        <NavButton>
          FAQ
        </NavButton>
        <NavButton
          href="#FightCard"
        >
          FIGHT CARD
        </NavButton>
        <NavButton
          class="
            border-2
            border-red-600
            duration-200
            hover:shadow-button
            bg-opacity-50
            bg-red-600
          "
        >
          BUY ACCESS
        </NavButton>
        <NavButton
          class="
            border-2
          "
        >
          SIGN IN
        </NavButton>
      </div>
      <button
        @click="toggleModal"
        class="
          block lg:hidden
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="
            bi bi-list
            w-7 md:w-12
            h-7 md:h-12
          "
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="showModal"
      class="
        block lg:hidden
      "
    >
      <NavModal
        @close="toggleModal"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavButton from "@/components/Nav-Buttons/Nav-button.vue";
import NavModal from "@/components/NavModal-item.vue";

export default defineComponent({
  name: "Nav-item",
  components: {
    NavButton,
    NavModal,
  },
  data: () => ({
    showModal: false,
  }),
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
</script>
