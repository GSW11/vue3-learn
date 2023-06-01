<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition name="fade">
      <div class="box" v-if="flag"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// 可配合第三方动画库使用 <transition class="第三方库类名" @enter-from @enter...></transition>
// transition有八个生命周期钩子
// apper 进入页面时的动画 apper-from-class apper-active-class apper-to-class
// 渲染多个组件时使用<transition-group></transition-group> 常用于v-for、列表
import { ref } from 'vue'

const flag = ref(true)
</script>

<style scoped lang="scss">
// 为什么有顺序问题
.box {
  width: 200px;
  height: 200px;
  background-color: red;
}
.fade-enter-from {
  width: 0;
  height: 0;
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter-to {
  width: 200px;
  height: 200px;
}
.fade-leave-from {
  width: 200px;
  height: 200px;
}
.fade-leave-active {
  transition: all 3s ease;
}
.fade-leave-to {
  width: 0;
  height: 0;
}
</style>