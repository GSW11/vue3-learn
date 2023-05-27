<template>
  <h3>我是组件 好家伙</h3>
  <div ref="divelement">{{ name }}</div><br>
  <button @click="change">修改名字</button>
  <hr>
</template>

<style scoped lang="scss">
</style>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'

console.log('setup')
const name = ref<string>('小涛')
const divelement = ref<HTMLDivElement>()

const change = () => {
  name.value = '我被改啦！'
}

// 创建
onBeforeMount(() => {
  console.log('创建之前 ==>', name.value, divelement.value)
})
onMounted(() => {
  console.log('创建之后 ==>', name.value, divelement.value)
})

// 更新
onBeforeUpdate(() => {
  console.log('更新之前 ==>', divelement.value?.innerText)
})
onUpdated(() => {
  console.log('更新之后 ==>', divelement.value?.innerText)
})

// 销毁
onBeforeUnmount(() => {
  console.log('销毁之前 ==>')
})
onUnmounted(() => {
  console.log('销毁之后 ==>')
})

// 收集，更新依赖 （通常做调试用）
onRenderTracked((e) => console.log('tracker', e))
onRenderTriggered((e) => console.log('trigger', e))
</script>