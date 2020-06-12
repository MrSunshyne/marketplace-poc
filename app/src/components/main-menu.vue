<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
  >
    <div class="flex space-x-4">
      <router-link
        class="hidden text-center tracking-wider md:inline text-2xl uppercase font-serif font-extrabold"
        :to="'/'"
        >Marketplace PoC</router-link
      >
      <router-link
        v-if="!$route.path.includes('/new')"
        :to="{ name: 'create' }"
        class="hover:bg-gray-800 bg-gray-700 text-sm text-white hover:transition-opacity transition rounded-lg px-4 items-center flex "
        >Create Listing +
      </router-link>
    </div>

    <ul class="flex justify-center">
      <li class="relative">
        <router-link
          :to="{ name: 'login' }"
          class="block hover:bg-red-100 hover:transition-opacity transition rounded-lg px-4 py-2"
          >Login
        </router-link>
        <!-- <SvgMenuBg /> -->
      </li>
      <li class="relative">
        <router-link
          :to="{ name: 'register' }"
          class="block hover:bg-red-100 hover:transition-opacity transition rounded-lg px-4 py-2"
          >Register
        </router-link>
        <!-- <SvgMenuBg /> -->
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
