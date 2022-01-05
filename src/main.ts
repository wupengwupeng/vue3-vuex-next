import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '@/css/index.css'
import 'element-plus/dist/index.css'
import router from '@/router/index'



const app = createApp(App);

app.use(router).use(ElementPlus).mount('#app')
