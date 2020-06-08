<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
  >
    <router-link
      class="hidden text-center tracking-wider md:inline text-2xl uppercase font-serif font-extrabold"
      :to="'/'"
      >Marketplace PoC</router-link
    >

    <ul class="flex mr-3">
      <li>
        <a href="#" target="_blank">Create Listing +</a>
        <!-- <SvgMenuBg /> -->
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.main-menu {
  /* @apply bg-black; */

  ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      position: relative;
      button {
        margin: 10px;
      }

      a {
        padding: 10px;
        display: block;
        @apply border-2;
        text-decoration: none;
        border-color: transparent;
        cursor: pointer;
      }
    }
  }
}

@screen sm {
  .main-menu {
    ul {
      li {
        padding: 10px;

        button {
          margin: 10px;
        }
        a {
          padding: 10px;
        }
      }
    }
  }
}
</style>
