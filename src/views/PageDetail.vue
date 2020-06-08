<template>
  <div>
    <div class="bg-white shadow overflow-hidiven  sm:rounded-lg">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ currentListing.title }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Product Name
        </p>
      </div>
      <div class="px-4 py-5 sm:px-6">
        <dl class="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <label class="text-sm leading-5 font-medium text-gray-500">
              Date Online
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.date_online }}
            </div>
          </div>
          <div class="sm:col-span-1">
            <label class="text-sm leading-5 font-medium text-gray-500">
              Date Offline
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.date_offline }}
            </div>
          </div>
          <div class="sm:col-span-1">
            <label class="text-sm leading-5 font-medium text-gray-500">
              Email adivress
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.email }}
            </div>
          </div>
          <div class="sm:col-span-1">
            <label class="text-sm leading-5 font-medium text-gray-500">
              Price
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.currency }} {{ currentListing.price }}
            </div>
          </div>
          <div class="sm:col-span-1">
            <label class="text-sm leading-5 font-medium text-gray-500">
              Mobile
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.mobile }}
            </div>
          </div>
          <div class="sm:col-span-1">
            <label class="text-sm leading-5 font-medium text-gray-500">
              Category
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.category }}
            </div>
          </div>
          <div class="sm:col-span-2">
            <label class="text-sm leading-5 font-medium text-gray-500">
              description
            </label>
            <div class="mt-1 text-sm leading-5 text-gray-900">
              {{ currentListing.description }}
            </div>
          </div>
        </dl>
      </div>
    </div>

    <!-- <pre>
      {{ currentListing }}
    </pre> -->
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
      let raw = await fetch("/api/db.json");
      raw = await raw.json();
      let selectedListing = raw.listings[0].filter(
        (item) => item.id === parseInt(this.slug)
      );
      this.currentListing = selectedListing[0];
    },
  },
  mounted() {
    this.fetchListing();
  },
};
</script>

<style lang="scss" scoped></style>
