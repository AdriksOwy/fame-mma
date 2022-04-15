<template>
  <div
    class="
      flex
      justify-end
      items-end
      fixed
      z-30
      pointer-events-none
      w-full
      h-full
    "
  >
    <button
      class="
        flex
        justify-center
        items-center
        pointer-events-auto
        px-2 lg:px-3
        py-2
        mr-2 lg:mr-10
        mb-2 lg:mb-4
        animate-slideBottom
        duration-200
        hover:shadow-button
        rounded-full
        border-2
        border-red-600
        bg-opacity-50
        bg-red-600
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="
          w-7 lg:w-5 2xl:w-7
          h-7 lg:h-5 2xl:h-7
          fill-white
        "
      >
        <path
          d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
        />
      </svg>
      <span
        class="
          hidden lg:block
          lg:ml-2
          lg:text-xl 2xl:text-3xl
        "
      >
        HELP
      </span>
    </button>
  </div>
</template>
