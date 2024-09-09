import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Order from '../views/order/Order.vue'
import Mine from '../views/mine/Mine.vue'
import Cart from '../views/cart/Cart.vue'

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
        }
    ]
})

export default router
