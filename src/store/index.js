import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiEndpoint: process.env.VUE_APP_BASEURL,
    currentListing: null,
    searchResults: null,
    searchBusy: false,
    validatedListing: [],
  },
  getters: {
    getSearchResults(state) {
      return state.searchResults;
    },
    getSearchBusy(state) {
      return state.searchBusy;
    },
    getValidatedListing(state) {
      return state.validatedListing;
    },
  },
  actions: {
    createListing({ state }, payload) {
      state.validatedListing = payload;

      router.push({ name: "confirm" });
    },
    searchTerm({ state }, payload) {
      // ES6 Destructuring
      const { term, price } = payload;
      let priceQuery = "";

      if (price !== null) {
        console.log(price);
        priceQuery = `&price=${price}`;
      }

      // search
      fetch(
        state.apiEndpoint + "/listings?q=" + term + "&_limit=10" + priceQuery
      )
        .then((res) => res.json())
        .then((result) => {
          state.searchResults = result;
        })
        .catch((error) => {});
    },
    clearSearchResults({ state }) {
      state.searchResults = [];
    },
  },
  modules: {},
});
