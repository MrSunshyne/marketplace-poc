import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiEndpoint: process.env.VUE_APP_BASEURL,
    currentListing: null,
    searchResults: [],
    searchBusy: false,
  },
  getters: {
    getSearchResults(state) {
      return state.searchResults;
    },
    getSearchBusy(state) {
      return state.searchBusy;
    },
  },
  mutations: {},
  actions: {
    searchTerm({ state }, payload) {
      // search
      fetch(state.apiEndpoint + "/listings?q=" + payload + "&_limit=10")
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          state.searchResults = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearSearchResults({ state }) {
      state.searchResults = [];
    },
  },
  modules: {},
});
