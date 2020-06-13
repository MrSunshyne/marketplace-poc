import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiEndpoint: "http://localhost:3535", // Should probably be in an .env file
    currentListing: null,
    searchResults: false,
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
      window.localStorage.setItem("validatedListing", JSON.stringify(payload));
      router.push({ name: "confirm" });
    },
    clearValidatedListing({ state }) {
      window.localStorage.clear("validatedListing");
      state.validatedListing = [];
    },
    restoreListingFromLocalStorage({ state }) {
      let fromLocalStorage = window.localStorage.getItem("validatedListing");
      if (fromLocalStorage !== null) {
        state.validatedListing = JSON.parse(fromLocalStorage);
      }
    },
    searchTerm({ state }, payload) {
      // ES6 Destructuring
      const { term, price, selectedCategory } = payload;
      let termQuery = "";
      let priceQuery = "";
      let selectedCategoryQuery = "";

      if (price !== null && price !== "") {
        priceQuery = `&price=${price}`;
      }

      if (selectedCategory !== null && selectedCategory !== "") {
        selectedCategoryQuery = `&category=${selectedCategory}`;
      }

      if (term !== null && term !== "") {
        termQuery = `&title_like=${term}`;
      }

      // search
      fetch(
        state.apiEndpoint +
          "/listings?" +
          "&_limit=10" +
          termQuery +
          priceQuery +
          selectedCategoryQuery
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.length === 0) {
            state.searchResults = "noresult";
          } else {
            state.searchResults = result;
          }
        })
        .catch((error) => {});
    },
    clearSearchResults({ state }) {
      state.searchResults = [];
    },
  },
  modules: {},
});
