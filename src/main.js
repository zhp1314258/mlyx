import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './route/index.js'
let app = createApp(App)

//引入字体图标样式
import "./assets/fonts/iconfont.css"

import vant from "vant"
import "vant/lib/index.css"
app.use(vant)


app.use(router)
app.mount('#app')