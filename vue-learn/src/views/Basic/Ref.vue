<template>
  <div>
    Ref：{{ Tao }}
  </div>
  <hr>
  <div>
    shallowRef：{{ Tao2 }}
  </div>
  <hr>
  <div>
    customRef：{{ Tao3 }}
  </div>
  <hr>
  <div ref="dom">
    我是dom
  </div>
  <hr>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
  // 基础：vue是mvvm模型，改变数据->更改视图
  import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue';

  const Tao = ref({ name: '小涛' })
  const Tao2 = shallowRef({ name: '小涛2' }) // 浅层（第一层）Ref
  const Tao3 = MyRef<string>('小涛3') // 自定义Ref
  const dom = ref<HTMLDivElement>()

  const change = () => {
// 普通Ref
    Tao.value.name = '大涛'
    console.log('Ref是class：', Tao)
    console.log('isRef判断是否是Ref：', isRef(Tao))

// ShallowRef
    // Tao2.value.name = '大涛2'
    // console.log('Ref是class：', Tao2)
    // console.log('isRef判断是否是Ref：', isRef(Tao2))

// ref和shallowRef 更新数据不能在一个函数中使用，因为在ref使用的时候会调用triggerRef强制更新所有收集的依赖
    // Tao.value.name = '大涛'
    // Tao2.value.name = '大涛2'

// CustomRef
    // Tao3.value = '大涛3'

// ref获取dom
    // console.log(dom.value?.innerText)
  }

  function MyRef<T>(value: T) {
    // customRef不是深层的
    return customRef((track, trigger) => {
      let timer: any
      return {
        get() {
          track()
          return value
        },
        set(newVal) {
          clearTimeout(timer)
          timer = setTimeout(() => {
            console.log('500ms后触发了')
            value = newVal
            timer = null
            trigger()
          }, 500)
        }
      }
    })
  }
</script>

<style scoped>

</style>