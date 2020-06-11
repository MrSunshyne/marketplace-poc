<template>
  <div>
    <div class="relative bg-gray-50  pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div class="relative space-y-4">
        <h2 class="text-3xl font-bold">Featured</h2>
        <div v-if="busy">
          <LoadingPlaceholder />
        </div>
        <div v-else>
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
          <div v-if="error" class="bg-red-100 p-4">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPlaceholder from "./loading-placeholder.vue";
import ListingSingle from "../components/listing-single";
export default {
  components: {
    ListingSingle,
    LoadingPlaceholder,
  },
  data() {
    return {
      featured: null,
      error: null,
      busy: false,
    };
  },
  methods: {
    async fetchFeatured() {
      this.busy = true;
      const apiEndpoint = this.$store.state.apiEndpoint;
      fetch(apiEndpoint + "/listings?featured=true")
        .then((res) => res.json())
        .then((result) => {
          this.busy = false;
          this.featured = result;
        })
        .catch((error) => {
          this.busy = false;
          console.log("sd");
          this.error = error;
        });
    },
  },
  mounted() {
    this.fetchFeatured();
  },
};
</script>

<style lang="scss" scoped></style>
