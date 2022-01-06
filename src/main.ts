import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'



import '@/style/index.scss'

import router from '@/router/index'



const app = createApp(App);

app.use(router).use(ElementPlus).mount('#app')
