<template>
    <div class="create-order">
        <Header title="生成订单" />
        <van-contact-card type="edit" :name="data.name" :tel="data.tel" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic" />
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>¥{{ data.totalPrice }}</span>
            </div>
            <van-button type="primary" class="pay-btn" block color="#ffc400" @click="createOrder">生成订单</van-button>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { Dialog } from 'vant'

const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({
    name: 'jason',
    tel: '13868050257',
    totalPrice: 0
})
const onEdit = () => {
    console.log('编辑')
}
const initPrice = () => {
    let price = 0
    if (store.state.orderList.length) {
        store.state.orderList.forEach(item => {
            price += item.num * item.price
        })
    }
    data.totalPrice = price
}
const createOrder = () => {
    Dialog({
        title: '提示',
        message: '生成订单成功'
    }).then(() => {
        // 要和购物车联系起来
        let newList = store.state.cartList.filter(item => {
            return !route.query.list.includes(item.id + "")
        })
        store.commit('delete', newList)
        router.push('/order')
    })
}
// 初始化用户地址
const initUser = () => {
    store.state.userAddress.forEach(item => {
        if (item.isDefault) {
            data.name = item.name
            data.tel = item.tel
        }
    })
}
onMounted(() => {
    initPrice()
    initUser()
})
</script>

<style lang="less" scoped>
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>