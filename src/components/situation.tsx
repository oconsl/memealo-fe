'use client'
import type { Situation } from '@/types/card'

type SituationProps = {
    situation: Situation
  }

function Situation({ situation } : SituationProps){

    return(
        <>
        <div className=' h-[300px] w-[600px] bg-[#9595A3] flex flex-col justify-center items-center text-black rounded-lg border-4 border-martinique-border ' key={situation.id}>
            
            <p>{situation.description}</p>
        </div>
        </>
    )
}

export default Situation