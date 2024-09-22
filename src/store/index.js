import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: [], // 购物车列表数据
        isDelete: true, // 确定header组件 点击编辑的时候 底部组件的展示
        edit: true, // 默认展示编辑的状态
    },
    mutations: {
        addCart(state, value) {
            state.cartList = value
        },
        changeDelete(state) {
            state.isDelete = !state.isDelete
        },
        delete(state, value) {
            state.cartList = value
        },
        edit(state, value) {
            if (value) {
                state.edit = true
            } else {
                state.edit = !state.edit
            }
        }
    },
    actions: {}
})