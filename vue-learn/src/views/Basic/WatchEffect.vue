<template>
  <input id="ipt" v-model="message" type="text">
  <input v-model="message2" type="text">
  <button @click="stop">停止监听</button>
</template>

<style scoped lang="less">
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { watchEffect, ref, getCurrentInstance } from 'vue'

let message = ref<string>('小涛')
let message2 = ref<string>('大涛')

const stop = watchEffect((onCleanup) => {
  let element: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement

  console.log('message ==>', message.value)
  console.log('message ==>', message2.value)
  console.log('element ==>', element)
  onCleanup(() => console.log('before')) // 在副作用执行之前运行，通常用来清除上一次未完成的请求（异步）
}, {
  flush: 'post' // 组件更新后执行
})
</script>