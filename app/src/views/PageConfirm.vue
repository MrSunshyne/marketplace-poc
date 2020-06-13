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
                :to="{ name: 'detail', params: { id: success.id } }"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
              >
                View listing
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="relative">
        <BusyLoader class="absolute inset-0 w-full h-full " v-if="busy" />
        <div
          class="bg-white shadow-xl overflow-hidden sm:rounded-lg"
          v-if="getValidatedListing"
        >
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-2xl  leading-6 font-bold text-gray-900">
              Preview : {{ getValidatedListing.title }}
            </h3>
          </div>
          <div class="grid grid-cols-2">
            <div
              class="bg-gray-100 flex justify-center items-center text-3xl font-bold text-gray-300"
            >
              image goes here
            </div>
            <div class="">
              <div class="px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Description
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.description }}
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Available since
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.date_online }}
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Offer expires in
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.date_offline }}
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Email address
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.email }}
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Price
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.currency }}
                      {{ getValidatedListing.price }}
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Mobile
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.mobile }}
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <label
                      class="text-xs uppercase leading-5 font-medium text-gray-500"
                    >
                      Category
                    </label>
                    <div class="mt-1 text-sm leading-5 text-gray-900">
                      {{ getValidatedListing.category }}
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
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
import { mapGetters, mapActions } from "vuex";
import BusyLoader from "../components/busy-loader.vue";
export default {
  data() {
    return {
      success: false,
      apiEndpoint: this.$store.state.apiEndpoint,
      categories: ["property", "car", "electronics", "furniture"],
      selectedCategory: 0,
      busy: false,
    };
  },
  computed: {
    ...mapGetters(["getValidatedListing"]),
  },
  components: {
    BusyLoader,
  },
  methods: {
    ...mapActions(["clearValidatedListing"]),

    postListing() {
      this.busy = true;
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
          return response.json();
        })
        .then((data) => {
          this.busy = false;
          this.success = data;
          this.clearValidatedListing();
        })
        .catch((error) => {
          this.busy = false;
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
