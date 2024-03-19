<!-- components/Header.vue -->

<script setup lang="ts">import { ref } from "vue";
import { RouterLink } from "vue-router";
const isOpen = ref(false);

</script>

<template>
  <header
    class="px-6 flex items-center justify-between fixed w-full z-50" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);"
>
    
   <RouterLink to="/" class="text-[60px] font-bold p-6" style="font-family: 'Coco-Bold'">
  YB
</RouterLink>

    <div class="relative">
      <button
        @click="isOpen = !isOpen"
        class="block md:hidden focus:outline-none"
      >
        <svg
          class="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          :class="{ 'transform rotate-90': isOpen }"
        >
          <path
            fill-rule="evenodd"
            d="M4 7h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
          />
        </svg>
      </button>
      <nav
        :class="{
          'block shadow-lg bg-white': isOpen,
          'hidden': !isOpen,
        }"
        class="absolute right-0 mt-2 py-2 w-48 rounded-xl md:block md:static md:shadow-none md:mt-0 md:py-0 md:bg-transparent md:w-auto"
      >
        <RouterLink
          to="/"
          class="block px-4 py-2 mt-2 text-sm md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline"
          >Link 1
        </RouterLink>
        <RouterLink
          to="/"
          class="block px-4 py-2 mt-2 text-sm md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline"
          >Link 2
        </RouterLink>
        <RouterLink
          to="/about"
          class="block px-4 py-2 mt-2 text-sm md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline"
          >Link 3
        </RouterLink>
      </nav>
    </div>
    
  </header>
   <div class="bg-black h-[1px] mx-auto mt-[-20px] w-3/4"> </div>
</template>



<style>
@font-face {
  font-family: "Coco-Bold";
  src: url("../fonts/Coco-Bold.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
</style>