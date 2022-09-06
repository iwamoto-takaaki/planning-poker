<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import { initializeApp } from 'firebase/app'
import { getFirebaseConfig } from './firebase-config'
import { getCurrentUser } from './modules/CurrentUser'
import { provide } from 'vue'

initializeApp(getFirebaseConfig())

const currentUser = getCurrentUser()
provide("current-user", currentUser.user)
</script>

<template>  
  <Header
    :user="currentUser.user.value"
    @sign-in-user="currentUser.signInUser"
    @sign-out-user="currentUser.signOutUser"
  />

  <router-view></router-view>
</template>

