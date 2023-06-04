<template>
  <img id="img" src="@/assets/LazyLoadImages/pexels-axel-sandoval-15860983.jpg">
</template>

<script setup lang="ts">
import axios from '@/utils/axios'
import useBase64 from '@/hooks/useBase64'

// 总结vue3 setup异步请求方法
// watch/Effect onMounted Suspense 封装函数 then
// 在setup中直接使用await 会将整个setup变为异步
onMounted(async () => {
  const base64Url = await useBase64({ el: '#img' })
  console.log(base64Url)
})
</script>

<style scoped lang="scss">

</style>