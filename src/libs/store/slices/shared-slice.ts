import type { StateCreator } from 'zustand'
import type { ConfigSlice, UserSlice } from '@/libs/store/slices'

export interface SharedSlice {
  resetAll: () => void
}

export const createSharedSlice: StateCreator<
  ConfigSlice & UserSlice,
  [['zustand/devtools', never]],
  [],
  SharedSlice
> = (_set, get) => ({
  resetAll: () => {
    get().resetUser()
    get().resetConfig()
  },
})