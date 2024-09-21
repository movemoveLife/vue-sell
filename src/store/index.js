import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: [], // 购物车列表数据
    },
    mutations: {
        addCart(state, value) {
            state.cartList = value
        }
    },
    actions: {}
})