export type CardType = {
  id: number
  name: string
  card_lore: string
  card_number: number
  type: string
  image_url: string
}

export type MemeCard = {
  id: number
  name: string
  cardLore: string
  cardNumber: number
  type: string
  imageUrl: string
}

export type TwistCard = {
  id: number
  name: string
  description: string
  key: string
  imageUrl: string
}

export type Situation = {
  id: number
  description: string
}