import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ref',
      name: 'Ref',
      component: import('@/views/Ref.vue')
    },
    {
      path: '/reactive',
      name: 'Reactive',
      component: import('@/views/Reactive.vue')
    },
    {
      path: '/toref',
      name: 'toRef',
      component: import('@/views/toRef.vue')
    },
    {
      path: '/computed',
      name: 'Computed',
      component: import('@/views/Computed.vue')
    }
  ]
})

export default router
