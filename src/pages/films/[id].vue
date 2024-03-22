<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';

const route = useRoute('/films/[id]');

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

    if (error) {
        console.error('error', error);
    }

console.log("dans films id : ",film);
</script>

<template>
    <div>
        <AfficheSingle v-bind="film" />
    </div>
</template>