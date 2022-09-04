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
const counter = getCounter(0)
</script>

<template>  
  <div>
    <Header
      :user="currentUser.user.value"
      @sign-in-user="currentUser.signInUser"
      @sign-out-user="currentUser.signOutUser"
    />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld
    msg="Vite + Vue"
    :count="counter.count.value"
    @increment="counter.increment"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
