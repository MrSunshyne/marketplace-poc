<template>
  <label
    class="uppercase text-sm font-bold tracking-wider text-gray-600"
    :for="label"
  >
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: ["label"],
};
</script>
