<template>
  <div class="flex min-h-screen flex-col page">
    <main-menu></main-menu>
    <transition name="fade" mode="out-in">
      <router-view class="container mx-auto flex-grow" />
    </transition>
  </div>
</template>

<script>
import MainMenu from "./components/main-menu.vue";
import FooterSection from "./components/footer-section.vue";

export default {
  components: {
    MainMenu,
    FooterSection,
  },
};
</script>

<style lang="scss" scoped>
.page {
  // background-image: url("./assets/images/bg.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: contain;
}

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
