<template>
  <div>
    <button @click="random">random</button>
    <TransitionGroup move-class="move" class="wraps" tag="div">
      <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => ({ id: index, number: (index % 9) + 1})))
const random = () => list.value = _.shuffle(list.value)
</script>

<style scoped lang="scss">
.move {
  transition: all 0.5s;
}

.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10);
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
  }
}
</style>