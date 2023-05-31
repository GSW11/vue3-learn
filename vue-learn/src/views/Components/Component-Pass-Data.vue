<template>
  <div>父集</div><hr>
  <WaterFall ref="wf" :title="name" @on-click="getName"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WaterFall from '@/components/WaterFall.vue'

let name = "小涛"
const getName = (name: string) => console.log('父组件接收数据', name)
const wf = ref<InstanceType<typeof WaterFall>>()
console.log(wf.value?.name)
</script>

<style scoped lang="scss">

</style>