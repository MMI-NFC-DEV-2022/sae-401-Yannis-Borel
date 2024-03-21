<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/acteur/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Acteur:Tables<'Acteur'>[]} & {Genre:Tables<'Genre'>[]}>()
</script>

<template>
    <div>
        <h2>{{ titre_film }}</h2>
        <p>{{ description_film }}</p>
         <img :src="images" alt="Placeholder Image" class="w-40 h-70 rounded-lg object-cover object-center mb-6">
       <div v-for="unActeur in Acteur">
        <p >{{ unActeur.nom_acteur }} </p>

       <RouterLink :to="`/acteur/${id}`">  <img :src="unActeur.image_acteur ?? undefined" class="h-52" > </RouterLink>

        <p v-for="unActeur in Acteur">{{ unActeur.nationaliter_acteur }} </p>

       </div>
    </div>
</template>