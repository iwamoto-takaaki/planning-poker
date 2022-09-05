<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import { getCounter } from './modules/Counter'
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';
import { getCurrentUser } from './modules/CurrentUser';

initializeApp(getFirebaseConfig());

const currentUser = getCurrentUser()
const counter = getCounter()
</script>

<template>  
  <Header
    :user="currentUser.user.value"
    @sign-in-user="currentUser.signInUser"
    @sign-out-user="currentUser.signOutUser"
  />

  <router-view></router-view>

  <HelloWorld
    msg="Vite + Vue"
    :count="counter.count.value"
    @increment="counter.increment"
  />
</template>

