<template>
  <div class="flex min-h-screen flex-col">
    <main-menu></main-menu>
    <router-view class="container mx-auto flex-grow" />
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

<style lang="scss"></style>
