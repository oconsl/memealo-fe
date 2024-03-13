'use client'

import Image from "next/image"
import type { TwistCard } from "@/types/card"


type TwistCardProps = {
    twistCard: TwistCard
  }

function TwistCard({ twistCard } : TwistCardProps){

    return(
        <>
        <div className='relative h-[200px] w-[150px] bg-[#FF7E81] flex flex-col justify-center items-center text-white rounded-twenty border-4 border-white text-2xl' key={twistCard.id}>
            <h2 className="absolute top-2">{twistCard.name}</h2>
            <Image src={twistCard.imageUrl} alt={twistCard.description} width = {130} height={180}>
            </Image>
            
        </div>
        </>
    )
}

export default TwistCard