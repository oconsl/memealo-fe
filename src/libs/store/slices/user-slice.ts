import type { StateCreator } from 'zustand'
import type { GameConfigSlice } from './game-config-slice'
import axios from 'axios'

type State = {
  isLogged: boolean
  username: string
}

export interface UserSlice {
  user: {
    isLogged: boolean
    username: string,
  }
  signIn: (username: string, password: string) => void,
  resetUser: () => void
}

const initialState: State = {
  isLogged: false,
  username: ''
}

export const createUserSlice: StateCreator<
  GameConfigSlice & UserSlice,
  [['zustand/devtools', never]],
  [],
  UserSlice
> = (set) => ({
  user:initialState,
  signIn: async (username: string, password: string) => {
    const response = await axios.post('/api/auth/sign-in', { username, password })
    set({
      user:{
        isLogged: true,
        username: response?.data?.response?.username
      }
    }, false, 'user/signIn')
  },
  resetUser: () => {
    console.log('reset de user')
    set({ user: initialState }, false, 'user/reset')
  },
})