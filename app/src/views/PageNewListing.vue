<template>
  <div>
    <div class="flex justify-center pb-8">
      <router-link
        :class="$route.name == 'create' ? 'bg-gray-700 text-white' : ''"
        class="block font-bold capitalize rounded-right px-6 py-2 bg-gray-200 flex items-center space-x-2"
        :to="{ name: 'create' }"
      >
        <div class="text-3xl font-black">1</div>
        <div class="font-light text-2xl">create</div>
      </router-link>
      <div
        :class="$route.name == 'confirm' ? 'bg-gray-700 text-white' : ''"
        class="block font-bold capitalize  rounded-left  px-6 py-2 bg-gray-200 flex items-center space-x-2"
      >
        <div class="text-3xl font-black">2</div>
        <div class="font-light text-2xl">confirm</div>
      </div>
    </div>

    <div>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.name"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
