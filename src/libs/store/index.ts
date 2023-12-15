import type { UserSlice, GameConfigSlice, SharedSlice, ConfigSlice } from '@/libs/store/slices'
import { userSlice, gameConfigSlice, sharedSlice, configSlice } from '@/libs/store/slices'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useGameStore = create<GameConfigSlice & UserSlice & SharedSlice & ConfigSlice>()(
  devtools(
    (...a) => ({
      ...gameConfigSlice(...a),
      ...userSlice(...a),
      ...sharedSlice(...a),
      ...configSlice(...a)
    })
  )
)
