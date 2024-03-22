<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheActeur from '@/components/AfficheActeur.vue';

const route = useRoute('/acteur/[id]');

let {data : Acteur, error} = await supabase
    .from('Acteur')
    .select(`
    *,
    Films(*)
    
    `)
    .eq('id', route.params.id)
    .single();

console.log("data film",Acteur);
</script>

<template>
    <div>
        <AfficheActeur v-bind="Acteur" />
    </div>
</template>