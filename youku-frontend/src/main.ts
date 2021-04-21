import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ElCol, ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon, ElImage, ElRow, ElSpace} from "element-plus";

import './css/youku.css'
import 'common-resetcss/reset.css'
import './assets/iconfont/iconfont.css'

const components = [ ElDropdown, ElDropdownMenu, ElDropdownItem, ElImage, ElIcon, ElSpace, ElRow, ElCol ]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.use(store).use(router)
app.mount('#app')
