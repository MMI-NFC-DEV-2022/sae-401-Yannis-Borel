<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/acteur/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Acteur:Tables<'Acteur'>[]} & {Genre:Tables<'Genre'>[]}>()

</script>

<template>

    <div class="bg-black text-white">
        <div class="bg-black relative text-white">
            <div class="relative">
                <img :src="banniere_film" alt="creed 3" class="w-full h-full object-cover" />

                <!-- Overlay with gradient -->
                <div class="absolute inset-x-0 bottom-0"
                    style="background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%); height: 20%;">
                </div>

                <h1 class="absolute lg:text-8xl text-6xl font-normal text-center bottom-0 left-0 pl-20 pb-5"
                    style="font-family: 'Coco-Bold';">{{ titre_film }}</h1>
            </div>

            <span class=" text-white pl-16 pb-4 font-inter font-light text-lg">de</span>
            <span class=" text-[#D93278] pl-2 pb-4 font-inter italic font-semibold text-2xl">{{ nom_realisateur
                }}</span>
            <span class=" text-white pl-2 pb-4 font-inter italic font-light  text-lg">{{ date_film }}</span>
            <svg class="w-5 h-5 fill-current text-[#D93278]" viewBox="0 0 24 24">
                <path
                    d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
            </svg>
        </div>
        <div v-for="n in (5 - (note_film ?? 0))" class="text-white ">
            <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path
                    d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
            </svg>
        </div>

        <div class="flex flex-row">
            <div class="w-1/4 mr-8">
                <img :src="images" alt="Placeholder Image"
                    class="w-full rounded-lg object-cover object-center mt-24 ml-10">
            </div>
            <div class="flex-1">
                <h2 class="text-white font-coco font-bold text-4xl mt-8 ml-32 " style="font-family: 'Coco-Bold';">
                    Synopsis
                </h2>
                <p class="text-white font-inter text-xl font-light mx-32 mt-10">{{ description_film }}</p>
            </div>
        </div>
        <div v-for="unActeur in Acteur">
            <p>{{ unActeur.nom_acteur }} </p>

            <RouterLink :to="{ name: '/acteur/[id]', params: { id: unActeur.id } }"> <img
                    :src="unActeur.image_acteur ?? undefined" class="h-52">
            </RouterLink>

            <p v-for="unActeur in Acteur">{{ unActeur.nationaliter_acteur }} </p>
        </div>
    </div>

</template>