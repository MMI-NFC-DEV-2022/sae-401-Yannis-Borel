<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/Plateforme/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps<Database["public"]["Tables"]["Plateforme"]["Row"] & { Films: Tables<'Films'>[] } & { Genre: Tables<'Genre'>[] } & { Collection: Tables<'Collection'>[] }>()
</script>

<template>
    <div class="bg-black text-white">
        <div v-if="Films && Films.length > 0" class="bg-black relative text-white">
            <div class="relative">
                <img :src="Films[0].banniere_film || undefined" alt="creed 3" class="w-full h-full object-cover" />
                <!-- Overlay with gradient -->
                <div class="absolute inset-x-0 bottom-0"
                    style="background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%); height: 20%;">
                </div>
                <h1 class="absolute lg:text-8xl text-6xl font-normal text-center bottom-0 left-0 pl-20 pb-5"
                    style="font-family: 'Coco-Bold';">
                    {{ Films[0].titre_film }}
                </h1>
            </div>
            <span class="text-white pl-16 pb-4 font-inter font-light text-lg">de</span>
            <span class="text-[#D93278] pl-2 pb-4 font-inter italic font-semibold text-2xl">{{ Films[0].nom_realisateur
                }}</span>
            <span class="text-white pl-2 pb-4 font-inter italic font-light text-lg">{{ Films[0].date_film }}</span>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/3 mb-8 md:mb-0">
                    <img :src="image_plateforme" alt="Support physique" class="w-full rounded-lg" />
                </div>
                <div class="md:w-2/3 md:pl-8">
                    <h1 class="text-3xl font-bold mb-4">{{ titre_plateforme }}</h1>
                    <p class="text-lg mb-4">{{ plateforme_prix }}</p>
                    <p class="text-lg mb-4">{{ description_une }}</p>
                    <p class="text-lg mb-4">{{ description_deux }}</p>
                    <p class="text-lg mb-4">{{ description_trois }}</p>
                    <a :href="lien_externe" target="_blank"
                        class="inline-block bg-[#D93278] text-white py-2 px-4 rounded hover:bg-[#c62a6b] transition-colors duration-300">
                        Acheter maintenant
                    </a>
                </div>
            </div>
        </div>
    </div>
</template> 