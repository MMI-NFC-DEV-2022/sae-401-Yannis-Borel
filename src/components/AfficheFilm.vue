<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';

const props = defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Acteur:Tables<'Acteur'>[]} & {Genre:Tables<'Genre'>[]}>()
console.log("props reçuent par AfficheFilm : ",props);

</script>
<template>
  
   
    <div class="mt-32">
    <RouterLink :to="`/maisons/${id}`">
 
       <div class="m-4 bg-gray-300 w-[70%] rounded-xl flex flex-wrap shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out">
        <img :src="images ?? undefined" class="h-auto rounded-t-xl"/>
        <div class="text-slate-700 p-4">
            <h3 class="text-xl font-semibold mb-2">{{ titre_film }}</h3>
        </div>

 
    </div>
    </RouterLink>
  </div>

</template>

