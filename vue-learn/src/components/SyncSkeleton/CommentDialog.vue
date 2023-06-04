<template>
  <div class="commentDialog">
    <div class="personnalInfo">
      <div class="avatar"><img :src="data.url"></div>
      <div class="name">{{ data.name }}</div>
    </div>
    <hr>
    <div class="comment">{{ data.comment }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from '@/utils/axios'

// const data = {
//   name: 'abc',
//   url: 'https://picx.zhimg.com/v2-99a54b34f55f88404d02da16e3b2bde7_b.jpg',
//   age: 22,
//   comment: '111'
// }

interface Data {
  name: string,
  age: number,
  url: string,
  comment: string
}

const { data } = await axios.get<Data>('./data.json')
console.log(data)
</script>

<style scoped lang="scss">
.commentDialog {
  position: relative;
  top: 10px;
  left: 10px;
  width: 500px;
  background: #f1f1f1;
  .personnalInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0 10px 10px;
    .avatar {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      margin-left: 15px;
      width: 80px;
      height: 20px;
    }
  }
  .comment {
    padding: 10px;
  }
}
</style>