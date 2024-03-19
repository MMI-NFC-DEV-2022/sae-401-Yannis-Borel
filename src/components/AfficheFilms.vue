<script setup lang="ts">
import Icon1 from '../components/icon/Icon1.vue';
import Icon2 from '../components/icon/Icon2.vue';
import Icon3 from '../components/icon/Icon3.vue';
import Icon4 from '../components/icon/Icon4.vue';
import Icon5 from '../components/icon/Icon5.vue';
import { defineProps } from 'vue';
import type { SchemaFilms } from '@/types';
const props = defineProps<SchemaFilms>()
console.log(props);

</script>
<template>   
            <img
            :src="image"
            class="relative"
            />     
</template>