import './assets/main.css'
import MISADialog from './components/dialog/MISADialog.vue'
import MISAButton from './components/button/MISAButton.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('MISADialog', MISADialog)
app.component('MISAButton', MISAButton)
app.use(createPinia())
app.use(router)

app.mount('#app')
