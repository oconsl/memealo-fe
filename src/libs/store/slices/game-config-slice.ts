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

export interface GameConfigSlice {
  game: {
    memeCards: MemeCard[],
    twistCards: TwistCard[],
    situations: Situation[],
    achievements: Achievement[],
    cosmetics: Cosmetic[],
  }
  getGeneralConfig: () => void,
  resetGameConfig: () => void
}

const initialState: State = {
  memeCards: [
    {
      id: 1,
      name: 'Meme 1',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 1',
      cardNumber: 2,
      type: 'meme',
    },
    {
      id: 2,
      name: 'Meme 2',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 2',
      cardNumber: 2,
      type: 'meme',
    },
    {
      id: 3,
      name: 'Meme 3',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 3',
      cardNumber: 2,
      type: 'meme',
    },
    {
      id: 4,
      name: 'Meme 4',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 4',
      cardNumber: 2,
      type: 'meme',
    },
    {
      id: 5,
      name: 'Meme 5',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 5',
      cardNumber: 2,
      type: 'meme',
    },
  ],
  twistCards: [],
  situations: [],
  achievements: [],
  cosmetics: [],
}

export const createGameConfigSlice: StateCreator<
  GameConfigSlice & UserSlice,
  [['zustand/devtools', never]],
  [],
  GameConfigSlice
> = (set) => ({
  game: {
    achievements: initialState.achievements,
    cosmetics: initialState.cosmetics,
    situations: initialState.situations,
    twistCards: initialState.twistCards,
    memeCards: [
      ...initialState.memeCards,
       {
      id: 42,
      name: 'Meme 42',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 4',
      cardNumber: 2,
      type: 'meme',
    },
     {
      id: 4123,
      name: 'Meme 4123',
      imageUrl: 'https://i.pinimg.com/originals/0f/6a/9e/0f6a9e1b6b5b6b5b6b5b6b5b6b5b6b5b.jpg',
      cardLore: 'Lore 4',
      cardNumber: 2,
      type: 'meme',
    },
    ]
  },
  getGeneralConfig: async () => {
    const response = await axios.get('/api/config')
    set({
      game: {
        memeCards: response?.data?.response?.memeCards,
        twistCards: response?.data?.response?.twistCards,
        situations: response?.data?.response?.situations,
        achievements: response?.data?.response?.achievements,
        cosmetics: response?.data?.response?.cosmetics
      }
    }, false, 'gameConfig/getGeneralConfig')
  },
  resetGameConfig: () => {
    console.log('reset de game config')
    set({ game: initialState }, false, 'gameConfig/reset')
  },
})