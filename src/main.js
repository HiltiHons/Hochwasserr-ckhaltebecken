import '../public/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import router from "@/router/index.js";


createApp(App)
    .use(Vue3Lottie)
    .use(router)
    .mount('#app')
