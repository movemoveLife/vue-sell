<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="data.checked" @change="groupChange">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="结算" @submit="onSubmit" class="submit-all" button-color="#ffc400"
            v-if="store.state.isDelete">
            <van-checkbox v-model="data.submitChecked" checked-color="#ffc400" @click="chooseAll">全选</van-checkbox>
        </van-submit-bar>
        <div class="buy" v-else>
            <div class="left">
                <van-checkbox v-model="data.submitChecked" checked-color="#ffc400" @click="chooseAll">全选</van-checkbox>
            </div>
            <div class="delete" @click="handleDelete">删除</div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted, computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import ListItem from '@/components/ListItem.vue'
import router from '@/router';

const props = defineProps(['changeShow']);
const store = useStore()
const data = reactive({
    checked: [],
    submitChecked: true
})
const handleChange = (value, detail) => {
    store.state.cartList.map(item => {
        if (item.id === detail.name) {
            item.num = value
        }
    })
}
const init = () => { // 做默认全选功能
    data.checked = store.state.cartList.map(item => item.id)
}
const onSubmit = () => {
    if (data.checked.length) {
        store.commit('pay', updateData()) // 将选中的数据传过去
        router.push('/createorder')
    } else {
        Toast.fail('请选择商品')
    }
}
const chooseAll = () => {
    if (data.checked.length !== store.state.cartList.length) {
        init()
    } else {
        data.checked = []
    }
}
const groupChange = (result) => {
    if (result.length === store.state.cartList.length) {
        data.submitChecked = true
    } else {
        data.submitChecked = false
    }
    data.checked = result
}
const allPrice = computed(() => {
    let countList = updateData()
    let sum = 0
    countList.forEach(item => {
        sum += item.num * item.price
    })
    return sum * 100
})
const updateData = (type) => {
    return store.state.cartList.filter((item) => {
        if (type === 'delete') {
            return !data.checked.includes(item.id)
        } else {
            return data.checked.includes(item.id)
        }
    })
}
const handleDelete = () => {
    // 部分删除
    // 判断 data的checked 是否有值
    if (data.checked.length) {
        store.commit('delete', updateData('delete'))
        data.checked = []
        // 购物车没有数据的时候
        if (!store.state.cartList.length) {
            props.changeShow() // 可以看到直接操作props的属性
            store.commit('edit', 'delete')
        }
    } else {
        Toast.fail('请选择要删除的商品')
    }
    // 全部删除
}
onMounted(() => {
    init()
})
</script>

<style lang="less" scoped>
.cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;

    .submit-all {
        position: fixed;
        bottom: 46px;
    }

    .buy {
        position: fixed;
        bottom: 48px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .left {
            display: flex;
            align-items: center;
        }

        .delete {
            color: #fff;
            background-color: #ffc400;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            width: 110px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }

    .content {
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>