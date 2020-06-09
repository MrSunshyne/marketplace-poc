<template>
  <div>
    <div class="relative pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
      <div class="relative space-y-4" v-if="getSearchResults.length > 0">
        <h2 class="text-3xl font-bold">Results</h2>
        <div class="grid gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
          <ListingSingle
            v-for="listing in getSearchResults"
            :key="listing.id"
            :details="listing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ListingSingle from "../components/listing-single";
export default {
  components: {
    ListingSingle,
  },
  data() {
    return {
      apiEndpoint: this.$store.state.apiEndpoint,
      term: "two",
      results: [],
    };
  },
  computed: {
    ...mapGetters(["getSearchResults"]),
  },
};
</script>

<style lang="scss" scoped></style>
