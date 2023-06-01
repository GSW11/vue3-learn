<template>
  <h1>provideA.vue（父亲级别）</h1>
  <div class="box"></div><hr>
  <ProvideB></ProvideB>
</template>

<script setup lang="ts">
const color = inject<Ref<string>>('color')

</script>

<style scoped lang="scss">
.box {
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  background: v-bind(color);
}
</style>