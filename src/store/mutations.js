import { ADDCART } from './mutation-types'

export default {
    [ADDCART](state, value) {
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
    },
    pay(state, value) {
        state.orderList = value
    },
    orderListEd(state) {
        state.orderListEnd = state.orderListEnd.concat(state.orderList)
    },
    addAddress(state, value) {
        state.userAddress.map(item => {
            if (value.isDefault) {
                item.isDefault = false
            }
        })
        state.userAddress.push(value)
    },
    editAddress(state, value) {
        state.userAddress = state.userAddress.map(item => {
            if (value.isDefault) {
                item.isDefault = false
            }
            if (item.id === value.id) {
                return value
            } else {
                return item
            }
        })
    },
    deleteAddress(state, value) {
        state.userAddress = state.userAddress.filter(item => {
            return !(item.id === value.id)
        })
        if (value.isDefault) { // 如果删除的是默认地址，则将第一个地址设为默认地址
            state.userAddress[0].isDefault = true
        }
    },
}