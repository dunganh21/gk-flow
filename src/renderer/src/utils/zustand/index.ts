/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mutate, StateCreator, StoreApi, create as zcreate } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Get<T, K, F> = K extends keyof T ? T[K] : F
type ZustandSet<T> = Get<Mutate<StoreApi<T>, [['zustand/immer', never]]>, 'setState', never>
type ZustandGet<T> = Get<Mutate<StoreApi<T>, [['zustand/immer', never]]>, 'getState', never>
export interface ZustandGetSet<T> {
  get: ZustandGet<T>
  set: ZustandSet<T>
}

export const createStore = <T extends Record<string, any>>(
  createState: StateCreator<T, [['zustand/immer', never]]> | undefined
) => zcreate<T, [['zustand/immer', never]]>(immer(createState as any))
