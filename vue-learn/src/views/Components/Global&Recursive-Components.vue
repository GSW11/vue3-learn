<template>
  <div class="Components">
    <div class="GlobalComponent">
      <!-- 全局组件在main.ts中注册 -->
      <h3>全局组件</h3><br>
      <Card />
      <Card />
    </div>

    <div class="RecursiveComponent">
      <h3>递归组件</h3><br>
      <Tree :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Tree from '@/components/Tree.vue'

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}
const data = reactive<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false
      }
    ]
  },
  {
    name: '2',
    checked: false
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: false
          }
        ]
      }
    ]
  }
])

</script>

<style scoped lang="scss">
.Components {
  display: flex;
  .GlobalComponent, .RecursiveComponent {
    width: 50%;
    height: 100%;
  }
}
</style>