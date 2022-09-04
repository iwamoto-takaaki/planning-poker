<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';
import { getPerformance } from 'firebase/performance';

import {
  User,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { makeBlock } from '@vue/compiler-core';

const firebaseApp = initializeApp(getFirebaseConfig());
getPerformance();

interface State {
  user: User | null,
}

const state = reactive<State>({
  user: null
});

const signInUser = async () => await signInWithPopup(getAuth(), new GoogleAuthProvider())
const signOutUser = () => signOut(getAuth()) 

onAuthStateChanged(getAuth(), (user) => state.user = user);
</script>

<template>
  <div>
    <div id="user-container">
      <div v-if="state.user">
        <div>{{ state.user.displayName }}</div>
        <button @click="signOutUser"> Sign Out </button>
      </div>
      <div v-if="!state.user">
        <button @click="signInUser"> Sign In </button>
      </div>
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
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
