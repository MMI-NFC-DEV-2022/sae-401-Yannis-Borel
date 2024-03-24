<template>
    <header class="px-6 flex items-center justify-between absolute w-full z-50"
        style="background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);">
        <RouterLink to="/" class="flex items-center p-6 text-white" style="font-family: 'Coco-Bold'">
            <span class="text-6xl font-bold text-[#D93278] pb-3 pr-1">YB</span>
            <span class="text-4xl font-bold text-white">Films</span>
        </RouterLink>
        <div class="relative">
            <button @click="isOpen = !isOpen" class="block md:hidden focus:outline-none">
                <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 24 24"
                    :class="{ 'transform rotate-90': isOpen }">
                    <path fill-rule="evenodd"
                        d="M4 7h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z" />
                </svg>
            </button>
            <nav :class="{ 'block shadow-lg bg-black': isOpen, 'hidden': !isOpen, }"
                class="absolute right-0 mt-2 py-2 w-48 rounded-xl md:block md:static md:shadow-none md:mt-0 md:py-0 md:bg-transparent md:w-auto">
                <RouterLink to="/films"
                    class="block px-4 py-2 mt-2 text-sm text-white md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline">
                    Films
                </RouterLink>
                <RouterLink to="/films/edit"
                    class="block px-4 py-2 mt-2 text-sm text-white md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline">
                    Ajouter un film
                </RouterLink>
                <RouterLink to="/login-logout"
                    class="block px-4 py-2 mt-2 text-sm text-white md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline">
                    Se connecter
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const isOpen = ref(false);
</script>

<style>
@font-face {
    font-family: "Coco-Bold";
    src: url("../fonts/Coco-Bold.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
}
</style>