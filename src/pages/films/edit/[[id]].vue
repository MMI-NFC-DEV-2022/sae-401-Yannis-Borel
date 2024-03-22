<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import  Form  from "@/components/Form.vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";


</script>

<template>
    <Form />
</template>