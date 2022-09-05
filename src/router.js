import { createRouter, createWebHistory } from 'vue-router'
import Room from './pages/Room.vue'
import Home from './pages/Home.vue'

export default new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/room/:id', component: Room },
    { path: '/', name: 'home', component: Home }
  ]
})