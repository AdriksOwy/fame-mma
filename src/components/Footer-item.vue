<template>
  <footer
    class="
      lg:flex lg:flex-col
      lg:items-center
      footer
      p-2 md:p-6
      text-center
      text-black
      bg-white
    "
  >
    <div
      class="
        w-full lg:w-3/4
      "
    >
      <h1
        class="
          pb-2 md:pb-6
          text-base sm:text-lg md:text-xl lg:text-2xl
          border-b
        "
      >
        Sponsors
      </h1>
      <div
        class="
          flex flex-row
          p-4
        "
      >
        <img
          src="/assets/LOGO_BETCLIC.svg"
          alt="BETCLIC LOGO"
          class="
            w-1/5
            lg:h-64
          "
        />
        <img
          src="/assets/LOGO_SFD.svg"
          alt="SFD LOGO"
          class="
            w-1/5
            lg:h-64
          "
        />
        <img
          src="/assets/LOGO_5PD.svg"
          alt="5PD LOGO"
          class="
            w-1/5
            lg:h-64
          "
        />
        <img
          src="/assets/LOGO_GBS.svg"
          alt="GBS LOGO"
          class="
            w-1/5
            lg:h-64
          "
        />
        <img
          src="/assets/LOGO_APIS.svg"
          alt="APIS LOGO"
          class="
            w-1/5
            lg:h-64
          "
        />
      </div>
    </div>
    <p
      class="
        w-full lg:w-3/4
        pt-2 md:pt-6
        tracking-wider
        text-xs sm:text-sm md:text-base lg:text-lg
        border-t
      "
    >
      <slot />
    </p>
  </footer>
</template>
