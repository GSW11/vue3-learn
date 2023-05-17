<template>
  <div>
    <form>
      <input v-model="form.name" type="text" /><br>
      <input v-model="form.age" type="text" /><br>
      <button @click.prevent="submit">提交</button>
    </form>
    <hr>
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <button @click="add">添加</button>
    <hr>

  </div>
</template>

<script setup lang="ts">
// reactive只支持引用类型 Array Object Map Set
import { reactive, readonly, shallowReactive } from 'vue'

// reactive基本用法
let form = reactive({
  name: '小涛',
  age: 22
})
const submit = () => {
  console.log(form)
}

// reactive 是proxy代理的 不能直接赋值
let list = reactive<string[]>([])
const add = () => {
  // 模拟异步
  setTimeout(() => {
    let res = ['1', '2', '3']
    // list = res
    list.push(...res)
    console.log(list)
  }, 1000)
}

// readonly readonly(reactive对象)
// 变为只读对象不能修改，但改变原reactive对象会影响readonly

// shallowReactive 浅层Reactive
// 与shallowRef相同，不能和Ref一起修改数据
</script>

<style scoped>

</style>