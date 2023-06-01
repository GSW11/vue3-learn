<template>
  <ElButton type="primary" @click="isShow = !isShow" class="myButton">切换组件</ElButton>
  <div class="comContainer">
    <keep-alive :include="['A']" :exclude="['B']" :max="10">
      <A v-if="isShow"></A>
      <B v-else></B>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
// keep-alive只能容纳单个子节点（逻辑层面上） （v-show不能用）
// keep-alive卸载时存储到临时容器中，刷新会清空
// include属性优先级更高
import A from '@/components/KeepAliveComponents/A.vue'
import B from '@/components/KeepAliveComponents/B.vue'
import { ref } from 'vue'

const isShow = ref(true)
</script>

<style scoped lang="scss">
.myButton {
  margin-bottom: 20px;
}
</style>