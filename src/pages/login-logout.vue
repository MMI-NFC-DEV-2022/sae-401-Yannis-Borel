<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>
<template>
    <div class="flex align-middle justify-center">
        <button class="mt-28" v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{user.email}})
        </button>
        <button class="mt-28" v-else @pointerdown="supabase.auth.signInWithOAuth({provider: 'github'})">
            Se connecter avec Github
        </button>
    </div>
</template>