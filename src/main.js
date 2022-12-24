import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './route/index.js'
let app = createApp(App)

//引入字体图标样式
import "./assets/fonts/iconfont.css"
// import "./assets/download/iconfont/iconfont.css"
//引入flexible适配
// import "./assets/flexible.js"

import vant from "vant"
import "vant/lib/index.css"
app.use(vant)


app.use(router)
app.mount('#app')