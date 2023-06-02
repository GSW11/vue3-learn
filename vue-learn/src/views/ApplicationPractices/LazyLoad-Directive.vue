<template>
  <div class="imgs">
    <img v-lazy="item" v-for="item in imageList" :src="item.name" loading="lazy" width="360" height="500">
  </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue'

const imageGlob: Record<string, Function> = import.meta.glob('@/assets/LazyLoadImages/*.jpg')
const imageList: Array<Function> = []
for(let key in imageGlob) {
  imageList.push(imageGlob[key])
}

let vLazy: Directive<HTMLImageElement, Function> = async (el, binding) => {
  const def = await import('@/assets/logo.svg')
  el.src = def.default
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0) {
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