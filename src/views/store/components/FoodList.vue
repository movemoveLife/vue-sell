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

<script>
export default {
    props: ["index", "foodData"]
};
</script>

<script setup>
import { reactive, toRefs } from "vue";
let data = reactive({
    activeIndex: 0,
    items: [{ text: "分组 1" }, { text: "分组 2" }]
});
</script>