<script setup lang="ts">

import Header from "@/components/Header.vue";
import AfficheFilms from "@/components/AfficheFilms.vue";
import { supabase } from "@/supabase";

console.log(supabase);


let {data : tableaufilms, error} = await supabase
    .from('Films')
    .select('*');
    if (error) console.log("n'a pas pu charger la table Film :", error);
</script>

<template class="">
  <Header />
  <main class="">
   <img src="@/assets/images/creed_3.jpg" alt="creed 3" class=" w-full  object-cover" />


   <AfficheFilms v-for="film in tableaufilms" v-bind="film" />
  

   </main>
   
   
</template>
