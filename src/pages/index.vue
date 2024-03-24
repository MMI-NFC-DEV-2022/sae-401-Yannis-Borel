<script setup lang="ts">

import Header from "@/components/Header.vue";
import AfficheFilms from "@/components/AfficheFilm.vue";
import { supabase } from "@/supabase";
import AfficheFilm from "@/components/AfficheFilm.vue";


</script>

<template >

    <AfficheFilm v-for="films in tableaufilms" v-bind="films" />
</template>
