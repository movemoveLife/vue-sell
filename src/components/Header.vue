<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack"></van-icon>
        <div>{{ title }}</div>
        <div class="edit" v-if="edit" @click="handleEdit">编辑</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'

const props = defineProps(['title', 'edit']);
const store = useStore();
const router = useRouter();

const toBack = () => {
    router.back();
}
const handleEdit = () => {
    if (store.state.cartList.length) {
        store.commit('changeDelete');
    } else {
        Toast.fail('请先添加商品到购物车!');
    }
}
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;

    .edit {
        font-size: 16px;
        position: absolute;
        right: 15px;
        font-weight: normal;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}
</style>
