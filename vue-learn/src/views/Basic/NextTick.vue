
<template>
  <div ref="box" class="wraps">
    <div>
      <div class="item" v-for="item in chatList">
        <div>{{ item.name }}:</div>
        <div>{{ item.message }}</div>
      </div>
    </div>
  </div>
  <div class="ipt">
    <div>
      <textarea v-model="ipt" type="text" />
    </div>
    <div>
      <button @click="send">send</button>
    </div>
  </div>
</template>
 
<script setup lang='ts'>
// 实现滚动条随着聊天的增加，自动跟踪最后一条
//next Tick
//60FPS 1000/60 = 16.7ms
// 1.处理用户的事件，就是event 例如 click，input change 等。
 
// 2.执行定时器任务
 
// 3.执行 requestAnimationFrame
 
// 4.执行dom 的回流与重绘
 
// 5.计算更新图层的绘制指令
 
// 6.绘制指令合并主线程 如果有空余时间会执行 requestidlecallback
 
// for (let i =0;i<1000;i++) {
//   current.value = i
// }
 
let chatList = reactive([
  { name: '张三', message: "xxxxxxxxx" },
])
let box= ref<HTMLDivElement>()
let ipt = ref('')

// Vue 更新dom是异步的 数据更新是同步
// 我们本次执行的代码是同步代码
// 当我们操作dom 的时候发现数据读取的是上次的 就需要使用nextIick
const send = async () => {
  chatList.push({
     name: "小涛",
     message: ipt.value
  })
  // 1. async await模式
  await nextTick()
  box.value!.scrollTop = 9999999
  // 2. 回调形式
  // nextTick(() => box.value!.scrollTop = 9999999)
}
</script>
 
<style scoped lang='scss'>
.wraps {
  margin: 10px auto;
  width: 500px;
  height: 400px;
  overflow: auto;
  overflow-x: hidden;
  background: #fff;
  border: 1px solid #ccc;
 
  .item {
    width: 100%;
    height: 50px;
    background: #ccc;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
  }
}
 
.ipt {
  margin: 10px auto;
  width: 500px;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
 
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
  button {
    width: 100px;
    margin: 10px 0;
    float: right;
  }
}
</style>