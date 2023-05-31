<template>
  <div>
    case1:<input v-model="message" type="text">
    <hr>
    case2:<input v-model="message2" type="text">
    <hr>
    case3:<input v-model="message3.foo.bar" type="text">
  </div>
</template>

<style scoped lang="less">

</style>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

let message = ref<string>('小涛')
let message2 = ref<string>('大涛')
watch([message, message2], (newV, oldV) => {
  console.log(newV, oldV)
})

let message3 = reactive({
  foo: {
    bar: 8
  }
})
watch(() => message3.foo.bar, (newV, oldV) => {
  console.log(newV, oldV)
}, {
  deep: true, // 深度监听 （reactive默认深度）（深度监听整个对象newV===oldV）
  immediate: true, // 立即执行 默认旧值为undefined
  flush: 'pre' // pre组件更新前执行 sync同步执行 post组件更新后执行
})
</script>