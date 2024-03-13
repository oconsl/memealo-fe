'use client'
import type { Cosmetic } from "@/types/user"
import Image from "next/image"

type CosmeticProps = {
    cosmetic: Cosmetic
}

function Cosmetic( {cosmetic} : CosmeticProps){

    return(
        <>
        <Image className="w-16 h-16 rounded-full border-five border-brown-pod-logo-color" src= {cosmetic.imageUrl} alt='Avatar frame' width={200} height={200} key={cosmetic.id} objectFit="cover">

        </Image>
        </>
    )
        
    }

    export default Cosmetic
