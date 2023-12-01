'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { CardType } from '@/types/card'

const IMAGE_DIMENTIONS = {
  'V': {
    width: 200,
    height: 400
  },
  'H': {
    width: 400,
    height: 200
  },
  'S': {
    width: 250,
    height: 250
  }
} as const

type CardProps = {
  card: CardType
}

function Card({ card }: CardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleOpen = () => {
    setIsPlaying(() => true)
  }
  const handleClose = () => {
    setIsPlaying(() => false)
  }

  const playCard = (
    <div className='bg-[#181818] text-zinc-50  p-9 flex flex-col gap-8 rounded-lg absolute inset-0 opacity-90'>
      <div className='flex flex-col justify-center'>
        <button className='bg-slate-800 hover:bg-slate-950 text-white font-bold py-2 px-4 border border-slate-950 rounded'>Jugar carta</button>
      </div>
      <div className='flex flex-col justify-center'>
        <button className='bg-slate-800 hover:bg-slate-950 text-white font-bold py-2 px-4 border border-slate-950 rounded' onClick={handleClose}>Cancelar</button>
      </div>
    </div>
  )

  return (
    <article className='border-4 border-white rounded-[2.5rem] overflow-hidden p-1 relative'>
      <picture
        className=''
        onClick={handleOpen}
      >
        <Image
          src={card.image_url}
          alt={card.name}
          width={IMAGE_DIMENTIONS[card.type as keyof typeof IMAGE_DIMENTIONS].width}
          height={IMAGE_DIMENTIONS[card.type as keyof typeof IMAGE_DIMENTIONS].height}
          className='rounded-[2rem]'
        />
      </picture>
      {isPlaying ? playCard : null}
    </article>
  )
}

export default Card
