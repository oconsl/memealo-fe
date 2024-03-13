'use client'
import { Squada_One, Inter } from "next/font/google"
import Image from "next/image"
import type { Achievement } from "@/types/user"
  type AchievementProps = {
    achievement: Achievement
  }
  const sqOne = Squada_One({ weight:['400'], subsets: ['latin'] })
  const inter = Inter ({ weight:['400'], subsets: ['latin'] })

  function Achievement({ achievement } : AchievementProps){
  
    return(
        <>
        <div className='relative h-[150px] w-[500px] bg-black  text-white rounded-twenty justify-between items-center ' key={achievement.id}>
            <div className=" bg-[#D9D9D9] h-[22px] w-[136px] absolute top-0 left-0 m-[-10px] rounded-twenty text-black text-center"> Logro Desbloqueado! </div>
          
          <div className="flex shrink-0 justify-center items-center text-center p-4">
            <Image src={achievement.imageUrl} width={125} height={300} alt="Meme" />
            <div className={`${sqOne.className}`}>
              <div className="flex-grow">
                <h2 className= 'text-3xl' >{achievement.title}</h2>
                <p className="text-2xl">{achievement.description}</p>
              </div>
            <div className="absolute top-[-10px] right-0 m-[-10px] w-33 h-33 rounded-full bg-[#D9D9D9] text-4xl text-black p-2">X</div>
            </div>
            
            </div>
        
        </div>
        </>
    )
}

export default Achievement
