<template>
  <div>
    <div class="bg-white">
      <div
        class="max-w-screen-xl mx-auto text-center space-y-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Buy anything?
          <br />
          Just one utility function away.
        </h2>

        <form class="flex justify-center">
          <div class="search-box">
            <input
              type="text"
              class="p-3 border-4 border-gray-200 text-2xl rounded-right text-center"
              placeholder="House, apartment, car.."
              v-model="term"
            />
          </div>

          <div
            class="inline-flex rounded-md overflow-hidden shadow rounded-left"
          >
            <button
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              @click.prevent="searchTerm(term)"
            >
              Search
            </button>
          </div>
        </form>

        <div class="ml-3 inline-flex ">
          <router-link
            :to="{ name: 'create' }"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium  text-red-700 hover:text-red-600  focus:outline-none focus:shadow-outline focus:border-red-300 transition duration-150 ease-in-out"
          >
            I want to sell something
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apiEndpoint: this.$store.state.apiEndpoint,
      term: "",
      results: [],
    };
  },
  computed: {
    ...mapGetters(["getSearchResults"]),
  },
  methods: {
    ...mapActions(["searchTerm"]),
  },
  // watch: {
  //   term: function(n, o) {
  //     this.searchTerm();
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
