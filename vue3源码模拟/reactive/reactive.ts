import { track, trigger } from './effect.js'

const isObject = (x) => x !== null && typeof x === 'object'

export const reactive = <T extends object>(target: T) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      let res = Reflect.get(target, key, receiver) as any
      console.log(`Reflect-get: ${typeof res}`)
      track(target, key)
      if(isObject(res)) return reactive(res)
      return res
    },
    set(target, key, value, receiver) {
      let res = Reflect.set(target, key, value, receiver)
      console.log(`Reflect-set: ${typeof res}`)
      trigger(target, key)
      return res
    }
  })
}