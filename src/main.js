import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config.ts';

createApp(App).mount('#app')

const firebaseApp = initializeApp(getFirebaseConfig());
