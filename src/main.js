import './assets/base.css'
import 'amfe-flexible'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. 引入vant组件库
import { Button, Icon } from 'vant'
// 2. 引入vant样式
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(Button) // 注册按钮
app.use(Icon)
app.mount('#app')
