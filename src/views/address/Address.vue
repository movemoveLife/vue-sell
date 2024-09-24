<template>
    <Header title="地址管理" />
    <van-address-list :list="data.list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
</template>

<script setup>
import Header from '@/components/Header.vue'
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const data = reactive({
    list: []
})
const init = () => {
    data.list = store.state.userAddress.map(item => {
        return {
            id: item.id,
            name: item.name,
            tel: item.tel,
            address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
            isDefault: item.isDefault
        }
    })
}
const onAdd = () => {
    router.push('/addressedit')
}
const onEdit = () => {
    router.push('addressedit')
}
onMounted(() => {
    init()
})
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/ .van-switch--on {
    background-color: #ffc400;
}

/deep/ .van-radio__icon {
    display: none;
}
</style>