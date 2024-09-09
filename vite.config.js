import { fileURLToPath, URL } from 'node:url'
import pxtorem from 'postcss-pxtorem'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
  ],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16, // 这里写设计稿的宽度/10即可，例如设计稿宽度是750px就写75
          // vant默认是37.5，如果是使用了vant的话可以像下面这样写
          // rootValue(res) {
          //   return res.file.indexOf("vant") !== -1 ? 37.5 : 75;
          // },
          propList: ['*'], // 需要转换的属性，默认转换所有属性
          selectorBlackList: [], // CSS选择器黑名单，防止部分选择器被转换
          exclude: /\/node_modules\//i, // 忽略包文件转换rem
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
