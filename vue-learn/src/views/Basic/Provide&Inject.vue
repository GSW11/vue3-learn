<template>
  <h1>Provide&Inject（爷爷级别）</h1>
  <label>
    <input v-model="colorVal" type="radio" name="color" value="red">
    红色
  </label>
  <label>
    <input v-model="colorVal" type="radio" name="color" value="pink">
    粉色
  </label>
  <label>
    <input v-model="colorVal" type="radio" name="color" value="yellow">
    黄色
  </label>
  <div class="box"></div><hr>
  <ProvideA></ProvideA>
</template>

<script setup lang="ts">
// provide(提供) inject(注入/获取) 跨组件传值
// 子组件修改provide的值影响其他组件 禁止修改可用readonly
// 兄弟组件传参方式：1.通过父组件当桥梁 2.eventBus 

let colorVal = ref('red')
provide('color', colorVal)
</script>

<style scoped lang="scss">
.box {
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  background: v-bind(colorVal);
}
</style>