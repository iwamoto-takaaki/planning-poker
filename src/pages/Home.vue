<script setup lang="ts">
  import HelloWorld from '../components/HelloWorld.vue'
  import { getCounter } from '../modules/Counter'

  const counter = getCounter()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <router-link to="/room/1234">新規ルーム作成</router-link>
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
    