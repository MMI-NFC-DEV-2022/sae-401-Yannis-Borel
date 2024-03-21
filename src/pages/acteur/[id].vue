<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheActeur from '@/components/AfficheActeur.vue';

const route = useRoute('/acteur/[id]');

let {data : film, error} = await supabase
    .from('Films')
    .select(`
    *,
    Acteur(*),
    Genre(*),
    Collection(*),
    Support(*),
    Plateforme(*),
    Variante(*)
    `)
    .eq('id', route.params.id)
    .single();

console.log("data film",film);
</script>

<template>
    <div>
        <AfficheActeur v-bind="film" />
    </div>
</template>