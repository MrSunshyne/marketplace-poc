<template>
  <router-link
    class="flex flex-col rounded-lg shadow-lg hover:shadow-sm transition duration-300 ease-in-out transition-shadow overflow-hidden"
    :to="{ name: 'detail', params: { id: details.id } }"
  >
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        :src="randomPhotoFromUnsplash()"
        alt=""
      />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <h3 class="mt-2 text-xl leading-7 text-gray-900">
          {{ details.title }}
        </h3>
      </div>
      <div class="mt-3 flex items-center justify-between">
        <p class="text-xs leading-5 uppercase font-bold text-red-600">
          {{ details.category }}
        </p>

        <p
          class="text-2xl leading-5 font-black text-gray-900 bg-yellow-100 p-2 rounded-lg"
        >
          {{ details.currency }} {{ details.price }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["details"],
  methods: {
    randomPhotoFromUnsplash(cat) {
      let rand = new Date().toISOString();
      return `https://source.unsplash.com/random/600x300?q=${rand}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
