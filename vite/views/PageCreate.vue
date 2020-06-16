<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(validate)">
        <div class="grid grid-cols-2 px-8 md:px-0 md:grid-cols-4 gap-4">
 
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="title">Title *</FormLabel>
            </div>
            <input
              v-model="formData.title"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="text"
              id="title"
              ref="title"
            />

            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="price">Price *</FormLabel>
            </div>
            <input
              v-model="formData.price"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="number"
              id="currency"
            />

          <div class="col-span-2 flex flex-col space-y-2 ">
            <FormLabel label="date_online">Publish date</FormLabel>

            <input
              v-model="formData.date_online"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="date"
              id="date_online"
            />
          </div>

          <div class="col-span-2 flex flex-col space-y-2 ">
            <FormLabel label="date_offline">Expiration date</FormLabel>
            <input
              v-model="formData.date_offline"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="date"
              id="date_offline"
            />
          </div>

            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="email">email</FormLabel>
            </div>
            <input
              v-model="formData.email"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="text"
              id="email"
            />

            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="mobile">mobile</FormLabel>
            </div>
            <input
              v-model="formData.mobile"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="text"
              id="mobile"
            />

 
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="description">Description * </FormLabel>
            </div>
            <textarea
              v-model="formData.description"
              id="description"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg h-40 "
            ></textarea>

          <div class="col-span-2 flex flex-col space-y-2">
            <FormLabel label="category">Pick a category</FormLabel>
            <div class="grid grid-cols-4 md:grid-cols-4 gap-3">
              <div
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                class="cursor-pointer bg-gray-200 px-4 py-2 rounded flex flex-col justify-center"
                :class="
                  formCategory == category
                    ? 'font-bold bg-red-300 text-white'
                    : ''
                "
              >
                <img
                  class="block w-full"
                  :src="`/images/categories/${category}.svg`"
                  alt=""
                />
                <div class="text-center capitalize text-black">
                  {{ category }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-5">
          <div class="flex justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <router-link
                :to="{ name: 'home' }"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              >
                Cancel
              </router-link>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <input
                type="submit"
                class="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
                value="Continue"
              />
            </span>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import FormErrors from "../components/form-error.vue";
import FormLabel from "../components/form-label.vue";
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
    return {
      apiEndpoint: this.$store.state.apiEndpoint,
      categories: ["property", "car", "electronics", "furniture"],
      formCategory: "",
      errors: [],
      formData: {
        title: "",
        description: "",
        date_online: new Date().toISOString().substr(0, 10),
        date_offline: new Date().toISOString().substr(0, 10),
        price: 0,
        currency: "$",
        category: "property",
        mobile: "",
        email: "",
        slug: true,
        featured: false,
      },
    };
  },
  mounted() {
    // Focus title on mounted
    this.focusInput();

    // Check if Local Storage has cookies for us /jk
    this.restoreListingFromLocalStorage();

    // Restore inputs if possible
    if (this.getValidatedListing.hasOwnProperty("title")) {
      // Restoring from store
      this.formData = this.getValidatedListing;
      this.formCategory = this.getValidatedListing.category;
    }
  },
  components: {
    FormLabel,
  },
  computed: {
    ...mapGetters(["getValidatedListing"]),
  },
  methods: {
    ...mapActions(["createListing", "restoreListingFromLocalStorage"]),
    selectCategory(category) {
      this.formCategory = category;
    },
    focusInput() {
      this.$refs.title.focus();
    },
    validate() {
      // Retreive Data
      const data = {
        ...this.formData,
        category: this.formCategory,
      };

      //  Send validated data to store
      this.createListing(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
