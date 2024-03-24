<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AffichePlateforme from '@/components/AffichePlateforme.vue';

const route = useRoute('/Plateforme/[id]');

let { data: Plateforme, error } = await supabase
  .from('Plateforme')
  .select(`
    *,
    Films(*)
    
    `)
  .eq('id', route.params.id)
  .single();

console.log("data Plateforme", Plateforme);
</script>

<template>
  <div>
    <AffichePlateforme v-bind="Plateforme" />
  </div>
</template>