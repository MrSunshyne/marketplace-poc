<template>
  <div>
    <div>
      <div v-if="success" class="flex justify-center">
        <div class="w-1/2 py-16">
          <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
          >
            <svg
              class="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              Listing added with great success
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                Functions can be anything you want them to be. The question is.
                What do you wish for? Programming can be functional, imperative
                or something that hasn't been invented yet. What if code was
                murmured but not written. Think about that.
              </p>
            </div>

            <div class="pt-6">
              <router-link
              :to="{name: 'detail', params: {id: success.id}}"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
              >
                View listing
              </router-link
              :to="{name: 'detail', params: {id: success.id}}">
            </div>
          </div>
        </div>
      </div>

      <div v-else>
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
          <span class="ml-3 inline-flex rounded-md shadow-sm" v-if="!success">
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      success: false,
      apiEndpoint: this.$store.state.apiEndpoint,
      categories: ["property", "car", "electronics", "furniture"],
      selectedCategory: 0,
    };
  },
  computed: {
    ...mapGetters(["getValidatedListing"]),
  },
  components:  {
    
  },
  methods: {
    postListing() {
      const data = this.getValidatedListing;

      const raw = JSON.stringify(data);

      let requestOptions = {
        method: "POST",
        body: raw,
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(this.apiEndpoint + "/listings", requestOptions)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          this.success = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
