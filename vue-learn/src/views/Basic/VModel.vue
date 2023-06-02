<template>
  <h1>我是VModel.vue父组件</h1>
  <div>isShow: {{ isShow }}</div>
  <div>text: {{ text }}</div>
  <button @click="isShow = !isShow">开关</button><hr>
  <VmodelVue v-model="isShow" v-model:textVal.isZs="text"></VmodelVue>
</template>

<script setup lang="ts">
// 自定义v-model 通过defineProps defineEmits双向绑定
// 默认emits:props = update:modelValue (emits固定，props可修改)
// vue3可实现多个v-model
// 自定义Modifiers
const isShow = ref(true)
const text = ref('小涛')
</script>

<style scoped lang="scss">

</style>