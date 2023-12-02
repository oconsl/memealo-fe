import type { UserSlice, ConfigSlice, SharedSlice } from '@/libs/store/slices'
import { userSlice, configSlice, sharedSlice } from '@/libs/store/slices'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useGameStore = create<ConfigSlice & UserSlice & SharedSlice>()(
  devtools(
    (...a) => ({
      ...configSlice(...a),
      ...userSlice(...a),
      ...sharedSlice(...a),
    })
  )
)
