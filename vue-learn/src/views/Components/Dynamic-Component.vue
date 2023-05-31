<template>
  <div style="display: flex">
    <div @click="switchCom(item, index)" :class="[active === index ? 'active' : '']" class="tabs" v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import AVue from '@/components/DynamicComponent/A.vue'
import BVue from '@/components/DynamicComponent/B.vue'
import CVue from '@/components/DynamicComponent/C.vue'
import type { Component } from 'vue'

const comId = ref<Component>(AVue)
const active = ref(0)
const switchCom = (item: DComData, index: number) => {
  comId.value = item.com
  console.log(comId.value)
  active.value = index
}

const data = reactive<DComData[]>([
  {
    name: 'A组件',
    com: AVue
  },
  {
    name: 'B组件',
    com: BVue
  },
  {
    name: 'C组件',
    com: CVue
  }
])
interface DComData {
  name: string,
  com: Component
}
</script>

<style scoped lang="scss">
.active {
  background: skyblue;
}
.tabs {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>