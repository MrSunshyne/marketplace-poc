<template>
  <router-link
    class="flex flex-col rounded-lg shadow-lg hover:shadow-md transition duration-300 ease-in-out transition-shadow overflow-hidden"
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
        <p class="text-sm leading-5 font-medium text-red-600">
          {{ details.category }}
        </p>

        <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
          {{ details.title }}
        </h3>
      </div>
      <div class="mt-3 flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://source.unsplash.com/property/600x300?as"
            alt=""
          />
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <time datetime="2020-03-16">
              {{ details.date_offline }}
            </time>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">
              {{ details.date_online }}
            </time>
          </div>
        </div>
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
