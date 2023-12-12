'use client'

import Image from 'next/image'
import Popup from 'reactjs-popup'
import { MemeCard } from '@/types/card'

export default function CardLore({
  id,
  name,
  cardLore,
  cardNumber,
  type,
  imageUrl
}: MemeCard) {
  return (
    <>
      <Popup
        trigger={
          <button className='button m-5 border-2 border-solid border-y-cyan-50 rounded-2xl'>
            <Image
              className='rounded-2xl h-72 w-56'
              src={imageUrl}
              alt={`${name}`}
              height={288}
              width={224}
            />
          </button>
        }
        modal
        nested
        position={'center center'}
      >
        <article className='flex flex-col p-4 max-h-max max-w-md bg-album_view-5 rounded-2xl justify-center items-center'>
          <h1 className='text-3xl w-full p-1 m-2 border-2 border-solid border-y-cyan-50 rounded-2xl'>
            #{cardNumber} - {name}
          </h1>
          <Image
            className='h-96 w-80 m-2 border-2 border-solid border-y-cyan-50 rounded-2xl'
            src={imageUrl}
            alt={`${name}`}
            height={288}
            width={224}
          />
          <div className='m-2 p-1 border-2 border-solid border-y-cyan-50 rounded-2xl'>
            <h3>Type: {type}</h3>
            <p>{cardLore}</p>
          </div>
        </article>
      </Popup>
    </>
  )
}
