<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items">
            <template #content>
                商品
            </template>
        </van-tree-select>
    </div>

    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script setup>
import { reactive, toRefs, defineProps } from "vue";
const props = defineProps(['index', 'foodData']);

let data = reactive({
    activeIndex: 0,
    items: [{ text: "分组 1" }, { text: "分组 2" }]
});
// 初始化数据
const initData = () => {
    let newArray = []
    props.foodData?.items?.forEach((item, index) => {
        newArray.push({ text: item.text })
    })
    data.items = newArray
}
initData()
</script>