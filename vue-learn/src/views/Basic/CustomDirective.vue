<template>
  <div class="btns">
    <button v-has-show="'shop:create'">创建</button>
    <button v-has-show="'shop:edit'">编辑</button>
    <button v-has-show="'shop:delete'">删除</button>
  </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue'

// permission
localStorage.setItem('userId', 'xiaotao-zx')

// mock后台的数据
const permission = [
  'xiaotao-zx:shop:edit',
  'xiaotao-zx:shop:create',
  // 'xiaotao-zx:shop:delete'
]

const userId = localStorage.getItem('userId')
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
  console.log(el)
  if(!permission.includes(userId + ":" + binding.value)) {
    el.style.display = 'none'
  }
}
</script>

<style scoped lang="scss">
</style>