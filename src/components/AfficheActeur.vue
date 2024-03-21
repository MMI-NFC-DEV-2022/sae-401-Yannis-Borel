<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/acteur/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Acteur:Tables<'Acteur'>[]} & {Genre:Tables<'Genre'>[]} & {Collection:Tables<'Collection'>[]}>()
</script>

<template>
    <div>
        <h2>{{ titre_film }}</h2>
        <p>{{ description_film }}</p>
        <p>{{ note_film }}</p>
        <p>{{ date_film }}</p>
        <p>{{ temps_film }}</p>
        <p v-for="unActeur in Acteur">{{ unActeur.nom_acteur }}</p>
      
    </div>
</template>