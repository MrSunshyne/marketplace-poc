<template>
  <div>
    <div
      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="relative space-y-4">
        <h2 class="text-3xl font-bold">Featured</h2>
        <div
          class="grid gap-5 mx-auto lg:grid-cols-3 lg:max-w-none"
          v-if="featured"
        >
          <ListingSingle
            v-for="listing in featured"
            :key="listing.id"
            :details="listing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingSingle from "../components/listing-single";
export default {
  components: {
    ListingSingle,
  },
  data() {
    return {
      featured: null,
    };
  },
  methods: {
    async fetchFeatured() {
      const apiEndpoint = this.$store.state.apiEndpoint;
      let raw = await fetch(apiEndpoint + "/listings?featured=true");
      let json = await raw.json();
      this.featured = json;
    },
  },
  mounted() {
    this.fetchFeatured();
  },
};
</script>

<style lang="scss" scoped></style>
