import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import "@/reset.scss"
import CardVue from './components/Card.vue'

const app = createApp(App)
app.component('Card', CardVue)

app.use(router)

app.mount('#app')
