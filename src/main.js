import './assets/base.css'
import 'amfe-flexible'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1. 引入vant组件库
import { Button, Icon, Tabs, Tab, TreeSelect, Stepper, ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
// 2. 引入vant样式
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Button) // 注册按钮
app.use(Icon)
app.use(Tabs)
app.use(Tab)
app.use(TreeSelect)
app.use(Stepper)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.mount('#app')
