import type { Cosmetic, Achievement } from '@/types/user'
import type { MemeCard, TwistCard, Situation } from '@/types/card'
import type { StateCreator } from 'zustand'
import type { UserSlice } from './user-slice'
import axios from 'axios'

type State = {
  memeCards: MemeCard[],
  twistCards: TwistCard[],
  situations: Situation[],
  achievements: Achievement[],
  cosmetics: Cosmetic[]
}

export interface ConfigSlice {
  memeCards: MemeCard[],
  twistCards: TwistCard[],
  situations: Situation[],
  achievements: Achievement[],
  cosmetics: Cosmetic[],
  getGeneralConfig: () => void,
  resetConfig: () => void
}

const initialState: State = {
  memeCards: [],
  twistCards: [],
  situations: [],
  achievements: [],
  cosmetics: [],
}

export const createConfigSlice: StateCreator<
  ConfigSlice & UserSlice,
  [['zustand/devtools', never]],
  [],
  ConfigSlice
> = (set) => ({
  ...initialState,
  getGeneralConfig: async () => {
    const response = await axios.get('/api/config')
    set({
      memeCards: response?.data?.response?.memeCards,
      twistCards: response?.data?.response?.twistCards,
      situations: response?.data?.response?.situations,
      achievements: response?.data?.response?.achievements,
      cosmetics: response?.data?.response?.cosmetics
    }, false, 'config/getGeneralConfig')
  },
  resetConfig: () => {
    console.log('reset de config')
    set(initialState, false, 'config/reset')
  },
})