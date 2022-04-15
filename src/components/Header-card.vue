<template>
  <div
    class="
      relative
      z-10
      shadow-3xl-top md:shadow-4xl-top
      text-center
      border-b md:border-b-2
      border-white
    "
  >
    <h1
      class="
        p-2 sm:p-4 lg:p-6 2xl:p-8
        tracking-widest
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
      "
    >
      <slot />
    </h1>
  </div>
</template>
