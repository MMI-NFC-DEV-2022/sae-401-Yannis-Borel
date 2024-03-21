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
    <div class="bg-black relative">
        <div class="relative">
            <img src="@/assets/images/creed_3.jpg" alt="creed 3" class="w-full h-full object-cover" />

            <!-- Overlay with gradient -->
            <div class="absolute inset-x-0 bottom-0"
                style="background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%); height: 20%;">
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <AfficheFilm v-for="films in tableaufilms" v-bind="films" />
        </div>
    </div>
</template>