<template>
  <div>子集</div>
  <button @click="send">给父组件传值</button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 接受父组件传过来的值
// 无法在代码中使用title，需要定义props来接收，模板可直接使用
const props = defineProps({
  title: {
    type: String,
    default: '默认值'
  }
})
// ts写法
// withDefaults(defineProps<{
//   title: string
// }>(), { title: () => '默认值' })

// 给父组件传值
const emit = defineEmits(['on-click'])
// const emit = defineEmits<{ (e: "on-click", name:string): void }>()
const send = () => emit('on-click', '小涛')

// 给父组件暴露方法
// 常用于通过组件实例获取方法，如element-ui
defineExpose({
  name: '小涛'
})
</script>

<style scoped lang="scss">

</style>