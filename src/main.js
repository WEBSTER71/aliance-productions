import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script'

import '../src/assets/scss/main.scss'
const app = createApp(App);
app.use(router, LoadScript).mount('#app')
