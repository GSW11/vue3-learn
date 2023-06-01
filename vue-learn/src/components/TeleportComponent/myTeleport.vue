<template>
  <div class="myteleport">
    123123123
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.myteleport {
  width: 400px;
  height: 400px;
  background: #141414;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>