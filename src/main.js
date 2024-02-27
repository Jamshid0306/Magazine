import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css"

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueAwesomePaginate)

app.mount('#app')
