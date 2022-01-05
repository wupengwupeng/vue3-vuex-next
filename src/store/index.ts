import { Store, createStore, useStore as baseUseStore } from 'vuex'
import { test } from '@/store/modules/test/index'
import { InjectionKey } from 'vue'
import { RootState } from './type'

export const store = createStore({
  modules: {
    test
  }
})

export const key: InjectionKey<Store<RootState>> = Symbol()
export function useStore() {
  return store
}