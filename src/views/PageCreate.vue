<template>
  <div>
    <form>
      <div class="flex flex-col space-y-4">
        <div class="col-span-1 ">
          <label for="title">Title</label>
          <input
            v-model="title"
            class="border-2 border-gray-200 rounded-lg "
            type="text"
            id="title"
          />
          {{ title }}
        </div>

        <div class="col-span-1 ">
          <label for="date_online">Date_online</label>
          <input
            v-model="date_online"
            class="border-2 border-gray-200 rounded-lg "
            type="text"
            id="date_online"
          />
          {{ date_online }}
        </div>

        <div class="col-span-1 ">
          <label for="date_offline">Date_offline</label>
          <input
            v-model="date_offline"
            class="border-2 border-gray-200 rounded-lg "
            type="text"
            id="date_offline"
          />
          {{ date_offline }}
        </div>

        <div class="col-span-1 ">
          <label for="email">Email</label>
          <input
            v-model="email"
            class="border-2 border-gray-200 rounded-lg "
            type="text"
            id="email"
          />
          {{ email }}
        </div>

        <div class="col-span-1 ">
          <label for="price">Price</label>
          <input
            v-model="price"
            class="border-2 border-gray-200 rounded-lg "
            type="text"
            id="currency"
          />
          {{ price }}
        </div>

        <div class="col-span-1 ">
          <label for="mobile">Mobile</label>
          <input
            v-model="mobile"
            class="border-2 border-gray-200 rounded-lg "
            type="text"
            id="mobile"
          />
          {{ mobile }}
        </div>

        <div class="col-span-1">
          <label>Pick a category</label>
          {{ category }}
        </div>

        <div class="col-span-1">
          <label for="description">Description</label>
          <textarea
            v-model="description"
            id="description"
            class="border-2 border-gray-200 rounded-lg "
          ></textarea>
          {{ description }}
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-5">
        <div class="flex justify-end">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
            >
              Create
            </button>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      date_online: "",
      date_offline: "",
      email: "",
      currency: "",
      price: "",
      mobile: "",
      category: "",
      description: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
