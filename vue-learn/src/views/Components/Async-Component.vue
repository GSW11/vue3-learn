<template>
  <Suspense>
    <template #default>
      <CommentDialog />
    </template>
    <template #fallback>
      <Skeleton />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
import Skeleton from '@/components/SyncSkeleton/Skeleton.vue'

const CommentDialog = defineAsyncComponent(() => import('@/components/SyncSkeleton/CommentDialog.vue'))
</script>

<style scoped lang="scss">

</style>