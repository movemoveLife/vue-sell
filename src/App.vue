<template>
  <div class="app">
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
.app {
  width: 160px;
  height: 160px;
  background: red;
}
</style>