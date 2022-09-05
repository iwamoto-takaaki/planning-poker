import Home from './pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home }
  ]
})