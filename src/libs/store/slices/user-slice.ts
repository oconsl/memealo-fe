import type { StateCreator } from 'zustand'
import type { ConfigSlice } from './config-slice'
import axios from 'axios'

type State = {
  isLogged: boolean
  username: string
}

export interface UserSlice {
  isLogged: boolean
  username: string,
  signIn: (username: string, password: string) => void,
  resetUser: () => void
}

const initialState: State = {
  isLogged: false,
  username: ''
}

export const createUserSlice: StateCreator<
  ConfigSlice & UserSlice,
  [['zustand/devtools', never]],
  [],
  UserSlice
> = (set) => ({
  ...initialState,
  signIn: async (username: string, password: string) => {
    const response = await axios.post('/api/auth/sign-in', { username, password })
    set({ isLogged: true, username: response?.data?.response?.username }, false, 'user/signIn')
  },
  resetUser: () => {
    console.log('reset de user')
    set(initialState, false, 'user/reset')
  },
})