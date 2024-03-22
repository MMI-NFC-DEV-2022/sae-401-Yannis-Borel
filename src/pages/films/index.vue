<script setup lang="ts">
import type { SchemaFilms } from '@/types';
import { supabase } from '@/supabase';
import AfficheFilm from '@/components/AfficheFilm.vue';
 
console.log(supabase);

let {data : tableaufilms, error} = await supabase
    .from('Films')
    .select('*');
</script>

<template>
    <div class="bg-black relative text-white">
        <div class="relative">
            <img src="@/assets/images/creed_3.jpg" alt="creed 3" class="w-full h-full object-cover" />

            <!-- Overlay with gradient -->
            <div class="absolute inset-x-0 bottom-0"
                style="background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%); height: 20%;">
            </div>
            <div class=" absolute bg-black rounded-2xl bottom-0 left-0 ml-20 mb-36 p-3">
                <button class="text-white font-inter text-xl font-extrabold">
                    Nouveau
                </button>
            </div>
            <h1 class="absolute lg:text-8xl text-6xl font-normal text-center bottom-0 left-0 pl-20 pb-5"
                style="font-family: 'Coco-Bold';">Creed
                III</h1>
        </div>

        <span class=" text-white pl-16 pb-4 font-inter font-light text-lg">de</span>
        <span class=" text-[#D93278] pl-2 pb-4 font-inter italic font-semibold text-2xl">Michael
            B. Jordan</span>
        <span class=" text-white pl-2 pb-4 font-inter italic font-light  text-lg">(2023)</span>

        <h1 class="text-white font-inter text-3xl font-bold text-center pt-7 "> Tous les films </h1>
        <div class="flex justify-center">
            <div class="w-2/3 border-b-4 border-dotted border-white border-opacity-25 my-5"></div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <AfficheFilm v-for="films in tableaufilms" v-bind="films" />
        </div>
    </div>
</template>