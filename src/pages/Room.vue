<script setup lang="ts">
    import { inject, Ref } from 'vue'
    import { User } from '@firebase/auth'

    const user = inject<Ref<User | null>>("current-user")
</script>

<template>
    <div>
        <p>email: {{ user?.email }}</p>
        <p>Room: {{ $route.params.id }}</p>
    </div>
</template>