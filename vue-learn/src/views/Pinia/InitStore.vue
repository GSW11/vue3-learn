<template>
  <div>
    pinia: {{ Test.current }} -- {{ Test.name }}
    <button @click="change">修改pinia</button>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store'

const Test = useTestStore()

// pinia五种修改值的方式
// 1. 直接修改 Test.current++
// 2. 通过$patch方法(对象) Test.$patch({ current: 888, name: "娃娃" })
// 3. 通过$patch方法(函数) Test.$patch(state => state.name = '花花公子')
// 4. 通过$state方法修改整个state对象 x
// 5. 通过actions （可直接访问方法）
const change = () => {
  console.log(Test)
  Test.$patch(state => state.name = '花花公子')
}
</script>

<style scoped lang="scss">

</style>