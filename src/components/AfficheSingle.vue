<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/acteur/[id]');
import type { Database, Tables } from '@/supabase-types';
const props = defineProps<Database["public"]["Tables"]["Films"]["Row"] & { Acteur: Tables<'Acteur'>[] } & { Collection: Tables<'Collection'>[] } & { Plateforme: Tables<'Plateforme'>[] } & { Support: Tables<'Support'>[] } & { Variante: Tables<'Variante'>[] }>();

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
            
        </div>

        <div class="flex flex-col md:flex-row">
            <div class="hidden md:block md:w-1/4 md:mr-8">
                <img :src="images" alt="Placeholder Image"
                    class="w-full rounded-lg object-cover object-center mt-8 md:mt-24 md:ml-14">
            </div>
            <div class="flex-1 sm:px-14">
                <h2 class="text-white font-coco font-bold text-3xl md:text-4xl mt-4 md:mt-8 md:ml-32"
                    style="font-family: 'Coco-Bold';">
                    Synopsis
                </h2>
                <p class="text-white font-inter text-base md:text-xl font-light mt-4 md:mx-32 md:mt-10">
                    {{ description_film }}
                </p>
            </div>
        </div>
        <div class="relative ml-14 mt-32">
            <h1 class="text-white font-inter text-2xl font-bold pb-3">Les acteurs principaux</h1>
            <div class="absolute left-0 bottom-0 w-44 ">
                <hr class="bg-[#D93278] h-1 border-none ">
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <div v-for="unActeur in Acteur" :key="unActeur.id" class="flex flex-col items-center">
                <RouterLink :to="{ name: '/acteur/[id]', params: { id: unActeur.id } }" class="mb-2">
                    <img :src="unActeur.image_acteur || undefined" class="w-48 h-64 object-cover rounded-lg"
                        :alt="unActeur.nom_acteur">
                </RouterLink>
                <p class="text-center">{{ unActeur.nom_acteur }}</p>
            </div>
        </div>
        <div class="relative ml-14 mt-32">
            <h1 class="text-white font-inter text-2xl font-bold pb-3">Supports streaming</h1>
            <div class="absolute left-0 bottom-0 w-44 ">
                <hr class="bg-[#D93278] h-1 border-none ">
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <div v-for="UnePlateforme in Plateforme" :key="UnePlateforme.id" class="flex flex-col items-center">
                <div class="mb-2 flex items-center">
                    <div class="w-24 h-24 mr-4">
                        <RouterLink :to="{ name: '/Plateforme/[id]', params: { id: UnePlateforme.id } }">
                            <img :src="UnePlateforme.image_plateforme || undefined"
                                class="w-full h-full object-cover rounded" alt="Image de la plateforme">
                        </RouterLink>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-center md:text-left mb-1">{{ UnePlateforme.titre_plateforme }}</h2>
                        <p class="text-center md:text-left">{{ UnePlateforme.plateforme_prix }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="relative ml-14 mt-32">
            <h1 class="text-white font-inter text-2xl font-bold pb-3">Supports physiques</h1>
            <div class="absolute left-0 bottom-0 w-44 ">
                <hr class="bg-[#D93278] h-1 border-none ">
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <div v-for="UnSupport in Support" :key="UnSupport.id" class="flex flex-col items-center">
                <div class="mb-2 flex items-center">
                    <div class="w-24 h-24 mr-4">
                        <RouterLink :to="{ name: '/Support/[id]', params: { id: UnSupport.id } }">
                            <img :src="UnSupport.image_support || undefined" class="w-full h-full object-cover rounded"
                                alt="Image de la plateforme">
                        </RouterLink>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-center md:text-left mb-1">{{ UnSupport.titre_support }}</h2>
                        <p class="text-center md:text-left">{{ UnSupport.prix_support }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative ml-14 mt-32">
            <h1 class="text-white font-inter text-2xl font-bold pb-3">Commentaires</h1>
            <div class="absolute left-0 bottom-0 w-44">
                <hr class="bg-[#D93278] h-1 border-none">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4">
            <div class="bg-[#1a1a1a] rounded-lg p-6 flex flex-col">
                <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/48" alt="User Avatar" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h3 class="text-white font-semibold">John Doe</h3>
                        <p class="text-gray-400 text-sm">Il y a 2 jours</p>
                    </div>
                </div>
                <p class="text-white text-base">Ce film est absolument incroyable ! J'ai adoré chaque minute. Les
                    performances des acteurs étaient exceptionnelles, et l'intrigue m'a tenu en haleine jusqu'à la fin.
                    Une véritable œuvre d'art cinématographique.</p>
            </div>

            <div class="bg-[#1a1a1a] rounded-lg p-6 flex flex-col">
                <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/48" alt="User Avatar" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h3 class="text-white font-semibold">Jane Smith</h3>
                        <p class="text-gray-400 text-sm">Il y a 1 semaine</p>
                    </div>
                </div>
                <p class="text-white text-base">J'ai trouvé ce film un peu trop long et lent par moments. Cependant, la
                    photographie était magnifique, et les performances des acteurs ont réussi à me captiver malgré tout.
                </p>
            </div>

            <div class="bg-[#1a1a1a] rounded-lg p-6 flex flex-col">
                <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/48" alt="User Avatar" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h3 class="text-white font-semibold">Bob Johnson</h3>
                        <p class="text-gray-400 text-sm">Il y a 3 semaines</p>
                    </div>
                </div>
                <p class="text-white text-base">Ce film est une véritable claque visuelle ! Les effets spéciaux sont
                    époustouflants, et l'action ne s'arrête jamais. J'ai passé un excellent moment, même si l'histoire
                    n'était pas exceptionnelle.</p>
            </div>
        </div>
        <div class="mt-10 px-4">
            <h2 class="text-white font-inter text-xl font-bold mb-4">Laisser un commentaire</h2>
            <div class="bg-[#1a1a1a] rounded-lg p-6">
                <div class="mb-4">
                    <label class="block text-white font-bold mb-2" for="name">Nom</label>
                    <input class="w-full px-3 py-2 text-white bg-[#333333] rounded" id="name" type="text"
                        placeholder="Votre nom" disabled>
                </div>
                <div class="mb-4">
                    <label class="block text-white font-bold mb-2" for="comment">Commentaire</label>
                    <textarea class="w-full px-3 py-2 text-white bg-[#333333] rounded" id="comment" rows="4"
                        placeholder="Votre commentaire..." disabled></textarea>
                </div>
                <button class="bg-[#D93278] text-white font-bold py-2 px-4 rounded" disabled>Envoyer</button>
            </div>
        </div>
    </div>


</template>