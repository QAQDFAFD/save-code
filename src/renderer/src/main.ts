import { createApp } from 'vue'
import App from './App.vue'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.scss'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from './router'
import 'bytemd/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(Antd)
app.use(router)
app.mount('#app')
