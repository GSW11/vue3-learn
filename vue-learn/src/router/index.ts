import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ref',
      name: 'Ref',
      component: () => import('@/views/Basic/Ref.vue')
    },
    {
      path: '/reactive',
      name: 'Reactive',
      component: () => import('@/views/Basic/Reactive.vue')
    },
    {
      path: '/toref',
      name: 'toRef',
      component: () => import('@/views/Basic/toRef.vue')
    },
    {
      path: '/computed',
      name: 'Computed',
      component: () => import('@/views/Basic/Computed.vue')
    },
    {
      path: '/watch',
      name: 'Watch',
      component: () => import('@/views/Basic/Watch.vue')
    },
    {
      path: '/watcheffect',
      name: 'WatchEffect',
      component: () => import('@/views/Basic/WatchEffect.vue')
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: () => import('@/views/Basic/LifeCycle.vue')
    },
    {
      path: '/provideinject',
      name: 'ProvideInject',
      component: () => import('@/views/Basic/Provide&Inject.vue')
    },
    {
      path: '/vmodel',
      name: 'VModel',
      component: () => import('@/views/Basic/VModel.vue')
    },
    {
      path: '/customdirective',
      name: 'CustomDirective',
      component: () => import('@/views/Basic/CustomDirective.vue')
    },
    {
      path: '/customhooks',
      name: 'CustomHooks',
      component: () => import('@/views/Basic/CustomHooks.vue')
    },
    {
      path: '/nexttick',
      name: 'NextTick',
      component: () => import('@/views/Basic/NextTick.vue')
    },
    {
      path: '/component-pass-data',
      name: 'Component-Pass-Data',
      component: () => import('@/views/Components/Component-Pass-Data.vue')
    },
    {
      path: '/global&recursive-components',
      name: 'Global&Recursive-Components',
      component: () => import('@/views/Components/Global&Recursive-Components.vue')
    },
    {
      path: '/dynamic-component',
      name: 'Dynamic-Component',
      component: () => import('@/views/Components/Dynamic-Component.vue')
    },
    {
      path: '/async-component',
      name: 'Async-Component',
      component: () => import('@/views/Components/Async-Component.vue')
    },
    {
      path: '/teleport',
      name: 'Teleport',
      component: () => import('@/views/Built-in-Components/Teleport.vue')
    },
    {
      path: '/keepalive',
      name: 'KeepAlive',
      component: () => import('@/views/Built-in-Components/KeepAlive.vue')
    },
    {
      path: '/transition',
      name: 'Transition',
      component: () => import('@/views/Built-in-Components/Transition.vue')
    },
    {
      path: '/transitiongroup',
      name: 'TransitionGroup',
      component: () => import('@/views/Built-in-Components/TransitionGroup.vue')
    },
    {
      path: '/lazyload-directive',
      name: 'LazyLoad-Directive',
      component: () => import('@/views/ApplicationPractices/LazyLoad-Directive.vue')
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/views/Layout.vue')
    }
  ]
})

export default router
