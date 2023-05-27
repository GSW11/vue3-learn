<template>
  <div class="xt-box">
    <div><Menu></Menu></div>
    <div class="xt-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b(box) {
  @include bfc;
  display: flex;
  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>

<script setup lang="ts">
import Content from '@/Layout/Content/index.vue'
import Menu from '@/Layout/Menu/index.vue'
import Header from '@/Layout/Header/index.vue'

</script>