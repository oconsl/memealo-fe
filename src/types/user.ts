export enum CosmeticType {
  AVATAR,
  FRAME,
  FOIL,
  BACKGROUND
}

export type User = {
  id: number
  username: string
  email: string
  coins: number
  cosmetics: Cosmetic[]
  achievements: Achievement[]
}

export type Achievement = {
  id: number
  imageUrl: string
  description: string
  title: string
}

export type Cosmetic = {
  id: number
  imageUrl: string
  type: CosmeticType
}