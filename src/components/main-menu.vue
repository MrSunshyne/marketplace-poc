<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
  >
    <router-link
      class="hidden text-center tracking-wider md:inline text-2xl uppercase font-serif font-extrabold"
      :to="'/'"
      >Marketplace PoC</router-link
    >

    <ul class="flex justify-center">
      <li class="relative">
        <router-link
          :to="{ name: 'create' }"
          class="block hover:bg-red-100 hover:transition-opacity transition rounded-lg px-4 py-2"
          >Create Listing +
        </router-link>
        <!-- <SvgMenuBg /> -->
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
