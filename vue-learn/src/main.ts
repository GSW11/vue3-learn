import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/reset.scss"
import CardVue from './components/Card.vue'

const store = createPinia()

const app = createApp(App)
app.component('Card', CardVue)

app.use(ElementPlus)
app.use(store)
app.use(router)



app.mount('#app')
