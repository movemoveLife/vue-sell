import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Order from '../views/order/Order.vue'
import Mine from '../views/mine/Mine.vue'
import Cart from '../views/cart/Cart.vue'
import Store from '../views/store/Store.vue'
import CreateOrder from '../views/createOrder/CreateOrder.vue'
import Address from '../views/address/Address.vue'
import AddressEdit from '../views/addressEdit/AddressEdit.vue'
import UserInfoEdit from '../views/userinfoedit/UserInfoEdit.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/createorder',
            component: CreateOrder
        },
        {
            path: '/address',
            component: Address
        },
        {
            path: '/addressedit',
            component: AddressEdit
        },
        {
            path: '/userinfoedit',
            component: UserInfoEdit
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ]
})

export default router
