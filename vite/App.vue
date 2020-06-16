<template>
  <div class="flex min-h-screen flex-col page">
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

<style lang="scss">
body {
  overflow-y: scroll;
}

.page {
  // background-image: url("./assets/images/bg.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: contain;
}

@screen md {
  .container {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
</style>
