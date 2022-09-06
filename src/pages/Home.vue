<script setup lang="ts">
  import { inject, Ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { User } from 'firebase/auth'
  import HelloWorld from '../components/HelloWorld.vue'
  import { getCounter } from '../modules/Counter'
  import { createRoom } from '../modules/Room'

  const counter = getCounter()
  const user = inject('current-user') as Ref<User | null>

  const router = useRouter()
  const onClickNewRoomButton = async () => {
    const room = await createRoom(user.value?.uid || null)
    if (room.data != null) {
      console.log(room.data.id)
      console.log(router)
      try {
        const ret = await router.push(`/room/${room.data.id}`)
      } catch(err) {
        console.log(err)
      }
      
    } else {
      // TODO: error handling
    }
  }
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
  <div v-if="user != null">
    <button @click="onClickNewRoomButton">新規ルーム作成</button>
  </div>
  <div v-if="user == null">ログインしてください</div>


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
    