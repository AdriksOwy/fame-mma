<template>
  <Whole>
    <Helper />
    <Nav />
    <Ad />
    <FightCard>
      <HeaderCard>
        FIGHT CARD
      </HeaderCard>
      <CardList />
    </FightCard>
    <Footer>
      FAME MMA © 2022 All rights reserved!
    </Footer>
  </Whole>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Whole from "@/components/Whole-item.vue";
import Helper from "@/components/Helper-item.vue";
import Nav from "@/components/Nav-item.vue";
import Ad from "@/components/Ad-item.vue";
import FightCard from "@/components/Fight-card.vue";
import HeaderCard from "@/components/Header-card.vue";
import CardList from "@/components/Cards/Card-list.vue";
import Footer from "@/components/Footer-item.vue";

export default defineComponent({
  name: "App",
  components: {
    Whole,
    Helper,
    Nav,
    Ad,
    FightCard,
    HeaderCard,
    CardList,
    Footer,
  },
});
</script>
