<template>
  <h1>provideB.vue（孙子级别）</h1>
  <button @click="change">修改provide的值 yellow</button>
  <div class="box"></div><hr>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import type { Ref } from 'vue'

const color = inject<Ref<string>>('color')
const change = () => color!.value = 'yellow'
</script>

<style scoped lang="scss">
.box {
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  background: v-bind(color);
}
</style>