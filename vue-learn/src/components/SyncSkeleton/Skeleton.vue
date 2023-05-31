<template>
  <div class="sk">
    <div class="sk-2">
      <div class="sk-avatar sk-color"></div>
      <div class="sk-name sk-color"></div>
    </div>
    <hr>
    <div class="sk-3 sk-color" style="margin-top: 20px;"></div>
    <div class="sk-3 sk-color"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.sk-color {
  background-color: #f0f2f5;
}
.sk {
  position: relative;
  top: 10px;
  left: 10px;
  width: 500px;
  .sk-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0 10px 10px;
    .sk-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .sk-name {
      margin-left: 15px;
      width: 80px;
      height: 20px;
    }
  }
  .sk-3 {
    margin-top: 10px;
    width: 100%;
    height: 20px;
  }
}
</style>