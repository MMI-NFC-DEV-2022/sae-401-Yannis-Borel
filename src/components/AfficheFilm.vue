<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';

const props = defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Acteur:Tables<'Acteur'>[]} & {Genre:Tables<'Genre'>[]}>()
console.log("props reçuent par AfficheFilm : ",props);

</script>
<template>


  <div class="mt-32">
    <RouterLink :to="`/films/${id}`">
      <div class="flex flex-wrap justify-center">
        <div
          class="mx-20 mb-20 bg-gray-300 w-[50%] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <img :src="images ?? undefined" class="h-auto rounded-t-xl" />
          <div class="text-slate-700 p-4">
            <h3 class="text-xl font-semibold mb-2">{{ titre_film }}</h3>
            <div class="flex pl-2 pb-2 h-auto">
              <div v-for="n in note_film ?? 0" class="text-white">
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
            </div>
          </div>
        </div>


      </div>
    </RouterLink>
  </div>

</template>

