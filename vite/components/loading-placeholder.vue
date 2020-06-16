<template>
  <div>
    <div class="flex space-x-6">
      <div v-for="card of 3" :key="card" class="w-1/3 shadow p-2 bg-white">
        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-heading />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
