<template>
  <div v-if="modelValue" class="model">
    <div class="close"><button @click="close">关闭</button></div>
    <h3>我是v-model子组件 dialog</h3>
    <div>内容：<input @input="change" :value="textVal" type="text"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ 
  modelValue: boolean,
  textVal: string,
  textValModifiers?: {
    isZs: boolean
  }
}>()
const emit = defineEmits(['update:modelValue', 'update:textVal'])
const close = () => emit('update:modelValue', false)
const change = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:textVal', props?.textValModifiers?.isZs ? target.value + '自学' : target.value)
}
</script>

<style scoped lang="scss">
.model {
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 5px solid #ccc;
  padding: 10px;
  .close, h3 {
    margin-bottom: 10px;
  }
  .close {
    align-self: flex-end;
    right: 0;
  }
}
</style>