<template>
  <div>
    <form @submit.prevent="createListing()">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3 flex flex-col space-y-2 ">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="title"
            >Title</label
          >
          <input
            v-model="formData.title"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
            type="text"
            id="title"
          />
        </div>

        <div class="col-span-1 flex flex-col space-y-2 ">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="price"
            >Price</label
          >
          <input
            v-model="formData.price"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
            type="text"
            id="currency"
          />
        </div>

        <div class="col-span-2 flex flex-col space-y-2 ">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="date_online"
            >Date_online</label
          >
          <input
            v-model="formData.date_online"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
            type="date"
            id="date_online"
          />
        </div>

        <div class="col-span-2 flex flex-col space-y-2 ">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="date_offline"
            >Date_offline</label
          >
          <input
            v-model="formData.date_offline"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
            type="date"
            id="date_offline"
          />
        </div>

        <div class="col-span-2 flex flex-col space-y-2 ">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="email"
            >Email</label
          >
          <input
            v-model="formData.email"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
            type="text"
            id="email"
          />
        </div>

        <div class="col-span-2 flex flex-col space-y-2 ">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="mobile"
            >Mobile</label
          >
          <input
            v-model="formData.mobile"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
            type="text"
            id="mobile"
          />
        </div>

        <div class="col-span-2 flex flex-col space-y-2">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            for="description"
            >Description</label
          >
          <textarea
            v-model="formData.description"
            id="description"
            class="p-3 p-2 focus:border-gray-500 border-2 border-gray-200 rounded-lg "
          ></textarea>
        </div>

        <div class="col-span-2 flex flex-col space-y-2">
          <label
            class="uppercase text-sm font-bold tracking-wider text-gray-600"
            >Pick a category</label
          >
          {{ formData.category }}
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-5">
        <div class="flex justify-end">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <input
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
              value="Create"
            />
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      apiEndpoint: this.$store.state.apiEndpoint,

      formData: {
        title: "My Title",
        description: "My Description",
        date_online: "1/16/2020",
        date_offline: "1/22/2020",
        price: 2253,
        currency: "$",
        mobile: "491-639-5303",
        email: "email@yahoo.com",
        category: "Property",
        slug: true,
        featured: false,
      },
    };
  },
  methods: {
    createListing() {
      const raw = JSON.stringify(this.formData);

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
