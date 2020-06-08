<template>
  <div class="home">
    <HomeSearch />
    <HomeListing />
  </div>
</template>

<script>
import HomeSearch from "../components/home-search.vue";
import HomeListing from "../components/home-listing.vue";

export default {
  name: "home",
  components: {
    HomeListing,
    HomeSearch,
  },
};
</script>
