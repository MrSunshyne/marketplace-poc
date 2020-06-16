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

        <form class="flex flex-col items-center space-y-4">
          <div class="md:flex justify-center space-y-4 md:space-x-0">
            <div class="search-box space-y-4">
              <input
                type="text"
                class="p-3 border-4 border-gray-200 text-2xl md:rounded-right text-center"
                placeholder="House, apartment, car.."
                v-model="term"
              />
              <input
                type="text"
                class="p-3 border-4 md:border-l-0 md:border-r-0 md:w-24 border-gray-200 text-2xl text-center"
                placeholder="$ 200"
                v-model="price"
              />
            </div>

            <div
              class="inline-flex w-64 md:w-auto p rounded-md overflow-hidden shadow rounded md:rounded-left"
            >
              <button
                class="inline-flex w-full md:w-auto items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                @click.prevent="searchTerm({ term, price, selectedCategory })"
              >
                Search
              </button>
            </div>
          </div>

          <div>
            <span
              class="relative z-0 inline-flex shadow-sm rounded-lg border border-gray-300 overflow-hidden"
            >
              <button
                type="button"
                class="capitalize relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="
                  selectedCategory == category ? 'bg-red-500 text-white' : ''
                "
              >
                {{ category }}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const term = "";
    const price = null;
    const results = [];
    const selectedCategory = "";
    const categories = ["property", "car", "electronics", "furniture"];

    const store = useStore();

    const apiEndpoint = computed(() => store.state.apiEndpoint);
    const getSearchResults = computed(() => store.state.searchResults);

    function searchTerm(payload) {
      store.dispatch("searchTerm", payload);
    }

    return {
      apiEndpoint,
      term,
      price,
      selectedCategory,
      results,
      categories,
      searchTerm,
    };
  },
};
</script>

<style lang="scss" scoped></style>
