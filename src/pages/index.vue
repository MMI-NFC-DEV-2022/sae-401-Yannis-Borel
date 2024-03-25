<script setup lang="ts">

import Header from "@/components/Header.vue";
import AfficheFilms from "@/components/AfficheFilm.vue";
import { supabase } from "@/supabase";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { useRouter } from "vue-router";

const router = useRouter();
router.replace ('/films');
</script>

<template >

 
</template>
