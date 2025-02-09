import './assets/base.css'
import 'amfe-flexible'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1. 引入vant组件库
import {
    Button, Icon, Tabs, Tab, TreeSelect, Stepper, ActionBar, ActionBarIcon, ActionBarButton,
    CheckboxGroup, Checkbox, SubmitBar, ContactCard, Card, AddressList, AddressEdit,
    Form, Field,
} from 'vant'
// 2. 引入vant样式
import 'vant/lib/index.css'
import './api/mock'

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
app.use(CheckboxGroup)
app.use(Checkbox)
app.use(SubmitBar)
app.use(ContactCard)
app.use(Card)
app.use(AddressList)
app.use(AddressEdit)
app.use(Form)
app.use(Field)
app.mount('#app')
