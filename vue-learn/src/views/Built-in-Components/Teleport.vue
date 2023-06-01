<template>
  <div class="parent">
    <h1>我是父级</h1>
    <button @click="isTeleport = !isTeleport">isTeleport</button>
    <!-- 将组件传送到body下 -->
    <Teleport :disabled="isTeleport" to="body"><myTeleport /></Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import myTeleport from '@/components/TeleportComponent/myTeleport.vue'

const isTeleport = ref(false)
</script>

<style scoped lang="scss">
// myTeleport组件是absolute parent是relative
.parent {
  position: relative;
  height: 50vh;
  background: yellow;
}
</style>