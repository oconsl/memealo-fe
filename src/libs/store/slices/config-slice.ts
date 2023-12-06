import type { StateCreator } from 'zustand'
import axios from 'axios'

type State = {
  avatar: string
  frame: string
  foil: string
  background: string
}

export interface ConfigSlice {
  config: {
    avatar: string
    frame: string
    foil: string
    background: string
  }
  getUserConfig: (userId: number) => void,
  resetConfig: () => void
}

const initialState: State = {
  avatar: '',
  frame: '',
  foil: '',
  background: ''
}

export const createConfigSlice: StateCreator<
  ConfigSlice,
  [['zustand/devtools', never]],
  [],
  ConfigSlice
> = (set) => ({
  config: initialState,
  getUserConfig: async (userId: number) => {
    const response = await axios.get(`/api/user/${userId}`)
    set({
      config: {
        avatar: response?.data?.response?.avatar,
        frame: response?.data?.response?.frame,
        foil: response?.data?.response?.foil,
        background: response?.data?.response?.background
      }
    }, false, 'config/getUserConfig')
  },
  resetConfig: () => {
    console.log('reset de user')
    set({ config: initialState }, false, 'config/reset')
  },
})