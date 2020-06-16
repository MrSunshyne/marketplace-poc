<template>
  <div class="home">
    <HomeSearch />
    <HomeSearchResults />
    <HomeListing />
  </div>
</template>

<script>
import HomeSearch from "../components/home-search.vue";
import HomeSearchResults from "../components/home-search-results.vue";
import HomeListing from "../components/home-listing.vue";

export default {
  name: "home",
  components: {
    HomeListing,
    HomeSearch,
    HomeSearchResults,
  },
};
</script>
