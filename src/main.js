import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(router)
app.use(AOS.init())
app.mount('#app')