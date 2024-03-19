<script setup lang="ts">
import AfficheFilms from '@/components/AfficheFilms.vue';
import type { SchemaFilms } from '@/types';
import { supabase } from '@/supabase';
 
console.log(supabase);
    
let {data : tableaufilms, error} = await supabase
    .from('Films')
    .select('*');
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheFilms v-for="films in tableaufilms" v-bind="films" />

    </div>
</template>