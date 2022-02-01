import { createApp } from 'vue'
import App from './App.vue'
import Router from './Utils/router'
import Store from './Utils/store'
import './index.css'

createApp(App)
    .use(Router)
    .use(Store)
    .mount('#app')
