<template>
  <div>
    姓：<input v-model="firstName" /><br>
    名：<input v-model="lastName" /><br>
    选项式-全名：{{ name }}
    函数式-全名：{{ name2 }}
  </div>
  <button @click="changeName">修改名称</button>
  <hr><br><br>
  <div><input v-model="keyword" placeholder="搜索" type="text" /></div>
  <div style="margin-top: 20px">
    <table border width="600" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>物品名称</th>
          <th>物品单价</th>
          <th>物品数量</th>
          <th>物品总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchData" :key="item.id">
          <td align="center">{{ item.name }}</td>
          <td align="center">{{ item.price }}</td>
          <td align="center">
            <button @click="item.num>1 ? item.num-- : null">-</button>
              {{ item.num }}
            <button @click="item.num++">+</button>
          </td>
          <td align="center">{{ item.num * item.price }}</td>
          <td align="center"><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" align="right">
            总价：{{ total }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'


// 1. Computed基础用法
let firstName = ref('张')
let lastName = ref('三')

  // (1) 选项式写法 支持一个对象传入get函数以及set函数自定义操作
let name = computed<string>({
  get() {
    return firstName.value + '-' + lastName.value
  },
  set(newVal) {
    [firstName.value, lastName.value] = newVal.split('-')
  }
})

let changeName = () => {
  name.value = '小-涛'
  // name2.value = '小-涛'
}

  // (2) 函数式写法 只能支持一个getter函数 不允许接收参数修改值
  // 得到的值是readonly属性
let name2 = computed(() => firstName.value + '-' + lastName.value)


// 2. Computed应用
interface Data {
  id: number
  name: string
  price: number
  num: number
}
let data = reactive<Data[]>([
  {
    id: 1,
    name: '小涛的绿帽子',
    price: 500,
    num: 1
  },
  {
    id: 2,
    name: '小涛的红衣服',
    price: 10,
    num: 1
  },
  {
    id: 3,
    name: '小涛的白袜子',
    price: 1000,
    num: 1
  }
])
let $total = ref<number>(0)
let keyword = ref<string>('')
const total = computed(() => {
  return $total.value = data.reduce((prev: number, next: Data) => prev + next.num * next.price, 0)
})
const searchData = computed(() =>  data.filter((item: Data) => item.name.includes(keyword.value)))
const del = (index: number) => {
  data.splice(index, 1)
}
</script>