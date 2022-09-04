<script setup lang="ts">
import { User } from 'firebase/auth';

const props = defineProps<{
  user: User | null
}>()

const emit = defineEmits<{
    (e: 'sign-in-user'): null,
    (e: 'sign-out-user'): null,
}>()

const signInUser = () => emit('sign-in-user')
const signOutUser = () => emit('sign-out-user')
</script>

<template>
    <div id="user-container">
        <div v-if="!props.user">
            <button @click="signInUser"> Sign In </button>
        </div>
        <div v-if="props.user">
            <div>{{ props.user.displayName }}</div>
            <button @click="signOutUser"> Sign Out </button>
        </div>
    </div>
</template>