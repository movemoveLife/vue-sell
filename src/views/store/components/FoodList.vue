<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items"
            @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) in data.subItem" :key="index" class="item-bg">
                    <ListItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange" />
                </div>
            </template>
        </van-tree-select>
    </div>

    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script setup>
import { reactive, toRefs, defineProps } from "vue";
import ListItem from "@/components/ListItem.vue";
const props = defineProps(['index', 'foodData']);

let data = reactive({
    activeIndex: 0,
    items: [],
    subItem: []
});
// 初始化数据
const initData = () => {
    let newArray = []
    props.foodData?.items?.forEach((item, index) => {
        newArray.push({ text: item.text })
        // 最后的subItem 是最后一项
        if (data.activeIndex === index) {
            data.subItem = item.children
        }
    })
    data.items = newArray
}
initData()
const navClick = (index) => {
    data.activeIndex = index
    initData()
}
const handleAdd = (id) => {
    data.subItem.forEach((item, index) => {
        if (item.id === id) {
            item.add = false
            item.num += 1
        }
    })
}
const handleChange = (value, detail) => {
    data.subItem.forEach(item => {
        if (item.id === detail.name) {
            item.num = value
        }
    })
    // console.log(data.subItem)
}
</script>

<style lang="less" scoped>
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>