import { effect, ReactiveEffect } from './effect'

export type Dep = Set<ReactiveEffect>

export const createDep = (effect?: ReactiveEffect[]): Dep => {
  const dep = new Set<ReactiveEffect>(effect) as Dep

  return dep
}
