import { defineStore } from 'pinia'
import { Stores } from './stores'

export const useTestStore = defineStore(Stores.Test, {
  // 存储数据
  state: () => ({
    current: 1,
    name: '小涛'
  }),
  // computed 修饰一些值 缓存旧值
  getters: {

  },
  // 同步异步操作 修改state
  actions: {

  }
})