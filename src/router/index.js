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
import { Toast } from 'vant'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/order',
            component: Order,
            meta: {
                isAuth: true
            }
        },
        {
            path: '/mine',
            component: Mine,
            meta: {
                isAuth: true
            }
        },
        {
            path: '/cart',
            component: Cart,
            meta: {
                isAuth: true
            }
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/createorder',
            component: CreateOrder,
            meta: {
                isAuth: true
            }
        },
        {
            path: '/address',
            component: Address,
            meta: {
                isAuth: true
            }
        },
        {
            path: '/addressedit',
            component: AddressEdit,
            meta: {
                isAuth: true
            }
        },
        {
            path: '/userinfoedit',
            component: UserInfoEdit,
            meta: {
                isAuth: true
            }
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

router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        // 一会登录了以后 会在localStorage里面 存储一个标识
        if (localStorage.isLogin === 'login') {
            next()
        } else {
            next('/login')
            Toast('请先去登录')
        }
    } else {
        next()
    }
})
export default router
