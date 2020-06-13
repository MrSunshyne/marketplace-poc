<template>
  <div>
    <div v-if="getSearchResults === 'noresult'">
      <div
        class="flex flex-col items-center justify-center py-32 space-y-5 bg-gray-200 mb-16"
      >
        <h2 class="text-3xl font-bold text-center text-gray-700">
          No Results... :( <br />
          Try something else?
        </h2>
        <p class="text-xl text-gray-500">
          Hint: Try "Mauritius" as title or "200" as price. They exist in the db
          :D
        </p>
      </div>
    </div>
    <template v-else-if="getSearchResults">
      <div
        class="relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8"
        v-if="getSearchResults.length > 0"
      >
        <div class="relative space-y-4">
          <div class="flex items-center justify-between space-x-3">
            <h2 class="text-3xl font-bold">
              Your search yeilded {{ resultsCount }} results
            </h2>
            <button
              class="px-2 py-1 text-xs hover:bg-red-300 bg-red-200 rounded uppercase font-bold text-red-800"
              @click="clearSearchResults"
            >
              Clear
            </button>
          </div>
          <div class="grid gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <ListingSingle
              v-for="listing in getSearchResults"
              :key="listing.id"
              :details="listing"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoadingPlaceholder from "./loading-placeholder.vue";

import ListingSingle from "../components/listing-single";
export default {
  components: {
    ListingSingle,
    LoadingPlaceholder,
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
    resultsCount() {
      return this.getSearchResults.length;
    },
  },
  methods: {
    ...mapActions(["clearSearchResults"]),
  },
};
</script>

<style lang="scss" scoped></style>
