import { mutableHandlers } from './baseHandlers'

export const reactiveMap = new WeakMap<Object, any>()

export function reactive(target: object) {
  return createReactiveObject(target, mutableHandlers, reactiveMap)
}

function createReactiveObject(
  target: object,
  baseHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Object, any>
) {
  const exitingProxy = proxyMap.get(target)
  if (exitingProxy) {
    return exitingProxy
  }

  const proxy = new Proxy(target, baseHandlers)

  proxyMap.set(target, proxy)

  return proxy
}
