<template>
  <div class="order">
    <Header title="订单" />
    <div class="content">
      <van-tabs color="#ffc400">
        <van-tab :title="item" v-for="(item, index) in data.navData" :key="index">
          <div v-for="(i, index) in store.state.orderListEnd" v-if="item === '全部' && store.state.orderListEnd.length">
            <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic" />
          </div>
          <div v-else>
            <Empty />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Empty from '@/components/Empty.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const data = reactive({
  navData: ['全部', '交易完成', '待付款', '待发货', '已发货']
})
</script>

<style lang="less" scoped>
.order {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>