<template>
  <div>
    <div
      class="bg-white shadow overflow-hidden sm:rounded-lg"
      v-if="currentListing"
    >
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-2xl leading-6 font-bold text-gray-900">
          {{ currentListing.title }}
        </h3>
      </div>
      <div class="grid grid-cols-2">
        <div class="bg-gray-100 flex justify-content items-center">
          <img
            class="w-full h-64 object-contain"
            src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
            alt=""
          />
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
                  {{ currentListing.description }}
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  class="text-xs uppercase leading-5 font-medium text-gray-500"
                >
                  Available since
                </label>
                <div class="mt-1 text-sm leading-5 text-gray-900">
                  {{ currentListing.date_online }}
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  class="text-xs uppercase leading-5 font-medium text-gray-500"
                >
                  Offer expires in
                </label>
                <div class="mt-1 text-sm leading-5 text-gray-900">
                  {{ currentListing.date_offline }}
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  class="text-xs uppercase leading-5 font-medium text-gray-500"
                >
                  Email address
                </label>
                <div class="mt-1 text-sm leading-5 text-gray-900">
                  {{ currentListing.email }}
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  class="text-xs uppercase leading-5 font-medium text-gray-500"
                >
                  Price
                </label>
                <div class="mt-1 text-sm leading-5 text-gray-900">
                  {{ currentListing.currency }} {{ currentListing.price }}
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  class="text-xs uppercase leading-5 font-medium text-gray-500"
                >
                  Mobile
                </label>
                <div class="mt-1 text-sm leading-5 text-gray-900">
                  {{ currentListing.mobile }}
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  class="text-xs uppercase leading-5 font-medium text-gray-500"
                >
                  Category
                </label>
                <div class="mt-1 text-sm leading-5 text-gray-900">
                  {{ currentListing.category }}
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      loading
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentListing: null,
      slug: null,
    };
  },
  beforeMount() {
    this.slug = this.$route.params.id;
  },
  methods: {
    async fetchListing() {
      const apiEndpoint = this.$store.state.apiEndpoint;

      let raw = await fetch(apiEndpoint + "/listings/" + this.slug);
      let json = await raw.json();
      this.currentListing = json;
    },
  },
  mounted() {
    this.fetchListing();
  },
};
</script>

<style lang="scss" scoped></style>
