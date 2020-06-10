<template>
  <div>
    <div>
      <div>
        {{ getValidatedListing }}
      </div>
      <div class="mt-8 border-t border-gray-200 pt-5">
        <div class="flex justify-end">
          <span class="inline-flex rounded-md shadow-sm">
            <router-link
              :to="{ name: 'create' }"
              class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            >
              Back
            </router-link>
          </span>
          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <button
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
              @click="postListing"
            >
              Confirm
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      apiEndpoint: this.$store.state.apiEndpoint,
      categories: ["property", "car", "electronics", "furniture"],
      selectedCategory: 0,
    };
  },
  computed: {
    ...mapGetters(["getValidatedListing"]),
  },
  methods: {
    postListing() {
      const data = this.getValidatedListing;

      const raw = JSON.stringify(data);

      let requestOptions = {
        method: "POST",
        body: raw,
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(this.apiEndpoint + "/listings", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
