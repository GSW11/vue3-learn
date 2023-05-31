<template>
  <div>
    {{ tao }}
  </div>
  <hr>
  <div>
    <button @click="change">修改</button>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from 'vue'

// toRef只能用于响应式对象
// 应用场景：将reactive中的值分离出来单独使用
const tao = reactive({ name: '小涛', age: 22, like: 'js' })
const like = toRef(tao, 'like')
const change = () => {
  like.value = 'ts'
  console.log(tao)
}

// toRefs源码模拟
// toRefs可将reactive的所有属性toRef
// const toRefs = <T extends object>(obj: T) => {
//   const map:any = {}
//   for(let key in obj) {
//     map[key] = toRef(obj, key)
//   }
//   return map
// }
// const { name, age, like } = toRefs(tao)

// toRaw脱去响应式
console.log(tao, toRaw(tao))
</script>