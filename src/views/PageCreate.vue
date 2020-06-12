<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(validate)">
        <div
          v-if="errors.length"
          class="bg-yellow-300 rounded-lg py-3 px-8 mb-8"
        >
          <p class="font-bold">🥴 Please correct the following error(s):</p>
          <ol class="list-decimal list-inside py-2">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ol>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <ValidationProvider
            class="col-span-3 flex flex-col space-y-2 "
            name="Title"
            rules="required|alpha_spaces"
            v-slot="{ errors }"
          >
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="title">Title *</FormLabel>
              <FormErrors :errors="errors" />
            </div>
            <input
              v-model="formData.title"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              :class="errors.length > 0 ? 'border-red-400' : ''"
              type="text"
              id="title"
            />
          </ValidationProvider>

          <ValidationProvider
            class="col-span-1 flex flex-col space-y-2 "
            name="Price"
            rules="required|numeric"
            v-slot="{ errors }"
          >
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="price">Price *</FormLabel>
              <FormErrors :errors="errors" />
            </div>
            <input
              v-model="formData.price"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              :class="errors.length > 0 ? 'border-red-400' : ''"
              type="number"
              id="currency"
            />
          </ValidationProvider>

          <div class="col-span-2 flex flex-col space-y-2 ">
            <FormLabel label="date_online">Date_online</FormLabel>
            <input
              v-model="formData.date_online"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              :class="errors.length > 0 ? 'border-red-400' : ''"
              type="date"
              id="date_online"
            />
          </div>

          <div class="col-span-2 flex flex-col space-y-2 ">
            <FormLabel label="date_offline">date_offline</FormLabel>
            <input
              v-model="formData.date_offline"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              type="date"
              id="date_offline"
            />
          </div>

          <ValidationProvider
            name="Email"
            rules="email"
            v-slot="{ errors }"
            class="col-span-2 flex flex-col space-y-2 "
          >
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="email">email</FormLabel>
              <FormErrors :errors="errors" />
            </div>
            <input
              v-model="formData.email"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              :class="errors.length > 0 ? 'border-red-400' : ''"
              type="text"
              id="email"
            />
          </ValidationProvider>

          <ValidationProvider
            class="col-span-2 flex flex-col space-y-2 "
            name="Mobile"
            rules="alpha_dash"
            v-slot="{ errors }"
          >
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="mobile">mobile</FormLabel>
              <FormErrors :errors="errors" />
            </div>
            <input
              v-model="formData.mobile"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
              :class="errors.length > 0 ? 'border-red-400' : ''"
              type="text"
              id="mobile"
            />
          </ValidationProvider>

          <ValidationProvider
            class="col-span-2 flex flex-col space-y-2 "
            name="Description"
            rules="required|alpha_spaces"
            v-slot="{ errors }"
          >
            <div class="flex items-end space-x-2 justify-between">
              <FormLabel label="description">Description * </FormLabel>
              <FormErrors :errors="errors" />
            </div>
            <textarea
              v-model="formData.description"
              id="description"
              class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg h-40 "
              :class="errors.length > 0 ? 'border-red-400' : ''"
            ></textarea>
          </ValidationProvider>

          <div class="col-span-2 flex flex-col space-y-2">
            <FormLabel label="category">Pick a category</FormLabel>
            <div class="flex space-x-4">
              <div
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                class="cursor-pointer bg-gray-200 px-4 py-2 rounded w-1/4 flex flex-col justify-center"
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
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import {
  required,
  email,
  alpha,
  numeric,
  alpha_spaces,
  alpha_dash,
} from "vee-validate/dist/rules";
import FormErrors from "../components/form-error.vue";
import FormLabel from "../components/form-label.vue";

import { mapActions, mapGetters } from "vuex";

extend("email", email);
extend("alpha", alpha);
extend("numeric", numeric);
extend("alpha_spaces", alpha_spaces);
extend("alpha_dash", alpha_dash);
extend("required", required);

export default {
  data() {
    return {
      apiEndpoint: this.$store.state.apiEndpoint,
      categories: ["property", "car", "electronics", "furniture"],
      errors: [],
      formCategory: "",
      formData: {
        title: "My 3",
        description: "My Description",
        date_online: "1/16/2020",
        date_offline: "1/22/2020",
        price: 2253,
        currency: "$",
        category: "property",
        mobile: "491-639-5303",
        email: "email@yahoo.com",
        slug: true,
        featured: false,
      },
    };
  },
  mounted() {
    // Restore inputs if possible
    if (this.getValidatedListing) {
      this.formData = this.getValidatedListing;
      this.formCategory = this.getValidatedListing.category;
    }
  },
  components: {
    ValidationProvider,
    FormErrors,
    FormLabel,
    ValidationObserver,
  },
  computed: {
    ...mapGetters(["getValidatedListing"]),
  },
  methods: {
    ...mapActions(["createListing"]),
    selectCategory(category) {
      this.formCategory = category;
    },
    checkForm: function(e) {
      // Reset Errors before check
      this.errors = [];

      this.validate();
    },
    validate() {
      // Retrive Data
      const data = {
        ...this.formData,
        category: this.formCategory,
      };

      //  Validate Everything

      //  Send validated data to store
      this.createListing(data);

      //  Navigate to confirmation route

      // this.$router.push({ name: "confirm" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
