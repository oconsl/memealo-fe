import type { StateCreator } from 'zustand'
import type { GameConfigSlice, UserSlice, ConfigSlice } from '@/libs/store/slices'

export interface SharedSlice {
  resetAll: () => void
}

export const createSharedSlice: StateCreator<
  GameConfigSlice & UserSlice & ConfigSlice,
  [['zustand/devtools', never]],
  [],
  SharedSlice
> = (_set, get) => ({
  resetAll: () => {
    get().resetUser()
    get().resetGameConfig()
    get().resetConfig()
  },
})