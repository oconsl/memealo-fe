'use client'

import Image from "next/image"
import type { MemeCard } from "@/types/card"

type MemeCardProps = {
    memeCard: MemeCard
  }

  function MemeCard({memeCard}: MemeCardProps){
    return(
        <>
         
            <div className='relative min-h-[620px] w-[460px] bg-[#83ADC3]  text-white rounded-twenty' key={memeCard.id}>
            <div className='absolute top-0 right-0 h-full w-[50px] bg-[#77BADD] text-white rounded-3xl'>
                    <h2 className=" flex justify-center transform rotate-90 text-5xl"> <span className="relative left-[90px]">#{memeCard.cardNumber} </span> <span className="relative left-[95px]"> - </span> <span className="relative left-[100px]"> {memeCard.name}</span></h2>
                    <div className="flex justify-center transform rotate-90">
                        <span className="text-5xl text-brown-pod-logo-color stroke relative left-[430px]">MEMEALO!</span>
                    </div>
                    
                </div>
                <Image className="rounded-twenty border-black border-4 absolute right-14 top-7" src={memeCard.imageUrl} alt='meme 1' width={225} height={273}></Image>
                <h2 className="text-8xl relative top-7 left-14 "> {memeCard.cardNumber}</h2>
                <h4 className="text-2xl relative top-7 left-11"> Tipo: {memeCard.type} </h4>
                <h4 className="text-2xl relative top-7 left-11"> Año: 2010 </h4>
                <h4 className="text-2xl relative top-7 left-11"> Origen: Tumblr </h4>
                <h4 className="text-2xl relative top-7 left-11"> Región: Japón  </h4>
                <p className="relative top-11 pr-14 pl-4">{memeCard.cardLore}</p>
                
            </div>
        </>
    )
  }

  export default MemeCard