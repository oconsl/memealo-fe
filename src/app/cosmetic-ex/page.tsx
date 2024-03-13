import Image from "next/image"

export default function CosmeticExample(){
    return(
        <>
        <div className="w-full h-screen bg-black">
        <Image className="w-16 h-16 rounded-full border-five border-brown-pod-logo-color" src="/Axel-by-Foster.webp" alt='Axel by Foster ' width={500} height={500} objectFit="cover">
        </Image>

        </div>
        </>
    )
}