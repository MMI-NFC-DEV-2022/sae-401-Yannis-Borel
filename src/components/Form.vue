<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const films = ref({});
const route = useRoute('/films/edit/[[id]]');

async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Films").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :", data);
        router.push({ name: "/films/edit/[[id]]", params: { id: data[0].id } });
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Films").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else films.value = data;
}
</script>

<template>
    <div class="bg-black text-white">
        <div class="p-2">
            <h2 class="text-2xl mt-32">Résultat (Prévisualisation)</h2>
            <AfficheFilm v-bind="films" />
        </div>
        <div class="p-2">
            <FormKit @submit="upsertFilm" type="form" v-model="films" :config="{
                classes: {
                    input: 'p-1 rounded border-gray-600 shadow-sm bg-[#333333] text-white',
                    label: 'text-white italic',
                    outer: 'py-2',
                },
            }">
                <FormKit name="titre_film" label="Titre du film" />
                <FormKit name="description_film" label="Description du film" />
                <FormKit name="note_film" type="number" label="Note /5" />
                <FormKit name="images" label="Images du film" />
            </FormKit>
        </div>
    </div>
</template>