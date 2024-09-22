<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="data.checked">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import ListItem from '@/components/ListItem.vue'

const store = useStore()
const data = reactive({
    checked: []
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
        bottom: 48px;
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