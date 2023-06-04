<template>
  <div class="imgs">
    <!-- loading属性 lazy -->
    <!-- <img loading="lazy" v-for="item in imageList" :src="item.name" width="360" height="500"> -->

    <!-- offsetTop & clientHeight + scrollTop -->
    <!-- getBoundingClientRect -->
    <!-- <img v-for="item in imageList" :src="item.name" width="360" height="500"> -->
    
    <!-- IntersectionObserver -->
    <img v-lazy="item" v-for="item in imageList" :src="item.name" width="360" height="500">
  </div>
</template>

<script setup lang="ts">
// 懒加载4种方法
import type { Directive } from 'vue'

const imageGlob: Record<string, Function> = import.meta.glob('@/assets/LazyLoadImages/*.jpg')
const imageList: Array<Function> = []
for(let key in imageGlob) {
  imageList.push(imageGlob[key])
}

// 1. loading属性 lazy

// 2. offsetTop & clientHeight + scrollTop

// 3. getBoundingClientRect

// 4. IntersectionObserver方法
let vLazy: Directive<HTMLImageElement, Function> = async (el, binding) => {
  const def = await import('@/assets/logo.svg')
  el.src = def.default
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0) {
      // 显示效果
      setTimeout(async () => {
        const imgModule = await binding.value()
        el.src = imgModule.default
        observer.unobserve(el)
      }, 500)
    }
  })
  observer.observe(el)
}
</script>

<style scoped lang="scss">
.imgs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>