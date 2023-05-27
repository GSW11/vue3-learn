<template>
  <div class="xt-content">
    <div v-for="item in 100">{{ item }}</div>
  </div>
</template>

<style scoped lang="scss">
@include b(content) {
  flex: 1;
  overflow: auto;
}
</style>

<script setup lang="ts">

</script>