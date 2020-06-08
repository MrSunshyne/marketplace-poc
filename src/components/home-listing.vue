<template>
  <div>
    <div
      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="relative">
        <div class="mt-12 grid gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
          <ListingSingle />
          <ListingSingle />
          <ListingSingle />
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
};
</script>

<style lang="scss" scoped></style>
