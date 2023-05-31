<template>
  <h1>生命周期</h1>
  <LifeCycleComponent v-if="flag" />
  <LifeCycleComponent v-if="flag" />
  <button @click="flag = !flag">创建-销毁</button>
</template>

<style scoped lang="less">
</style>

<script setup lang="ts">
import { ref } from 'vue'
import LifeCycleComponent from '@/components/LifeComponent.vue'

const flag = ref<Boolean>(true)
</script>