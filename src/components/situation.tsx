'use client'
import type { Situation } from '@/types/card'

type SituationProps = {
    situation: Situation
  }

function Situation({ situation } : SituationProps){

    return(
        <>
        <div className=' h-[300px] w-[600px] bg-[#9595A3] flex flex-col justify-center items-center text-black situation-text-stroke rounded-twenty border-4 border-martinique-border text-4xl text-center drop-shadow-situation-shadow-down-right' key={situation.id}>
            
            <p>{situation.description}</p>
        </div>
        </>
    )
}

export default Situation