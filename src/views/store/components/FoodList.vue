<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items"
            @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) in data.subItem" :key="index" class="item-bg">
                    <FoodListItem :item="item" />
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
import FoodListItem from "./FoodListItem.vue";
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