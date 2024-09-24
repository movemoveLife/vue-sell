<template>
    <Header title="地址编辑" />
    <van-address-edit :area-list="data.areaList" show-delete show-set-default show-search-result
        :area-columns-placeholder="[]" @save="onSave" @delete="onDelete" />
</template>

<script setup>
import Header from '@/components/Header.vue'
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const data = reactive({
    areaList: {
        province_list: {
            110000: "广东省",
            120000: "浙江省",
        },
        city_list: {
            110100: "广州市",
            110200: "深圳市",
            120100: "杭州市",
            120200: "宁波市",
        },
        county_list: {
            110101: "天河区",
            110102: "海珠区",
            120102: "上城区",
            130102: "下城区",
        }
    }
})
const onSave = () => {

}
const onDelete = () => {

}
onMounted(() => {

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
</style>