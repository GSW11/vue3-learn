<template>
  <div @click.stop="clickTap(item, $event)" class="tree" v-for="item in data">
    <input type="checkbox"> <span>{{ item.name }}</span>
    <!-- 双问号表达式 只能处理左边为undefined和null item?.children?.length ?? [] -->
    <Tree v-if="item?.children?.length" :data="item?.children" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 不加export插件报错？
export interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}
defineProps<{ data: Tree[] }>()

// 注意冒泡
const clickTap = (item: Tree, e: MouseEvent) => {
  console.log(item)
  console.log(e.target)
}
</script>

<style scoped lang="scss">
.tree {
  margin-left: 10px;
}
</style>