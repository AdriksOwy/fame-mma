<template>
  <div
    class="
      flex flex-col
      items-center
      absolute
      z-10
      w-full
    "
  >
    <img
      src="/assets/LOGO_FAME_MMA_V2.webp"
      alt="FAME MMA LOGO"
      class="
        w-32 sm:w-48 md:w-56 lg:w-72
        pb-3 sm:pb-6 lg:pb-12
        animate-fadeLogo
      "
    />
    <div
      v-if="loaded"
      class="
        flex
        justify-center
        gap-1 sm:gap-6 md:gap-10 lg:gap-16
        w-full lg:w-3/4
        animate-slideBottom
      "
    >
      <CountingBox
        typeTime="days"
      >
        {{ displayDays }}
      </CountingBox>
      <CountingBox
        typeTime="hours"
      >
        {{ displayHours }}
      </CountingBox>
      <CountingBox
        typeTime="minutes"
      >
        {{ displayMinutes }}
      </CountingBox>
      <CountingBox
        typeTime="seconds"
      >
        {{ displaySeconds }}
      </CountingBox>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CountingBox from "@/components/Ad/Counting-item.vue";

export default defineComponent({
  name: "Timer-item",
  components: {
    CountingBox,
  },
  props: [
    "year",
    "month",
    "date",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month - 1,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond,
      );
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num: any) =>
      (num < 10 ? "0" + num : num),

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.loaded = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    },
  },
});
</script>
