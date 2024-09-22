<template>
  <div class="cart">
    <Header title="购物车" :edit="true" />
    <CartDetail v-if="isShow" />
    <Empty v-else />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Empty from '@/components/Empty.vue'
import CartDetail from './components/CartDetail.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const isShow = ref(true)
const store = useStore()

const init = () => {
  if (store.state.cartList.length === 0) {
    isShow.value = false
  }
}
onMounted(() => {
  init()
})
</script>

<style lang="less" scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>