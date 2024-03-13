import Situation from "@/components/situation"
import Cosmetic from '@/components/cosmetic'
import Achievement from "@/components/achievement"
export default function RoomView() {

    const situationData={id:1, description:'Cuando estuviste 2 meses sin tocar código y estás a 2 semanas de llegar al tercer finde'}
    const plusCardData={id:1, name:'Tenemos', imageUrl:'/Communist-Bugs-Bunny.jpg'}
    const cosmeticDataAxel={id:2, imageUrl:'/Axel-by-Foster.webp'}
    const cosmeticDataAnto={id:3, imageUrl:'/Anto-by-Foster.webp'}
    const cosmeticDataSarita={id:4, imageUrl:'/Sarita-by-Foster.webp'}
    const cosmeticDataMica={id:5, imageUrl:'/Mica-by-Foster.webp'}
    const cosmeticDataSebolla={id:6, imageUrl:'/Sebolla-by-Foster.webp'}
    const cosmeticDataBixio={id:7, imageUrl:'/Bixioneta-by-Foster.webp'}
    const cosmeticDataLucas={id:8, imageUrl:'/Lucas-by-Foster.webp'}
    const cosmeticDataSanti={id:9, imageUrl:'/Santi-by-Foster.webp'}
    const cosmeticDataMartu={id:10, imageUrl:'/Martu-by-foster.webp'}
    
    const achievementData={id:1, title:'Discriminado', description:'Qué lástima! Nadie eligió tu meme, pero te ganaste este logro, felicidades y ánimo!', imageUrl:'/crying-cat-meme.png' }
    
    return (
        
        < div className="flex relative w-screen h-screen bg-[#2B2C48] m-0 p-0">
                <Cosmetic cosmetic={cosmeticDataAxel}/>
                <Cosmetic cosmetic={cosmeticDataAnto}/>
                <Cosmetic cosmetic={cosmeticDataMica}/>
                <Cosmetic cosmetic={cosmeticDataSarita}/>
                <Cosmetic cosmetic={cosmeticDataSebolla}/>
                <Cosmetic cosmetic={cosmeticDataBixio}/>
                <Cosmetic cosmetic={cosmeticDataLucas}/>
                <Cosmetic cosmetic={cosmeticDataSanti}/>
                <Cosmetic cosmetic={cosmeticDataMartu}/>
            <div className="flex flex-col">
            <div className=" h-[137px] w-[433px] flex items-center justify-center box-border rounded-xl bg-martinique-inner-color text-brown-pod-logo-color text-5xl mb-23 text-center mt-20 title-shadow stroke">  Siguiente ronda en... </div>            
            <div className=" h-[383px] w-[433px] flex-col items-center justify-center box-border rounded-xl  bg-martinique-inner-color text-brown-pod-logo-color text-counter-size mb-28 text-center mt-10  title-shadow stroke"> 5 </div>
            </div>
            <div className='flex-none w-5/12 h-[10vh] absolute top-[3vh] left-[2vw] md:w-4/12 md:h-[15vh] md:top-[8vh] md:left-1/2 md:translate-x-[-50%] border-solid border-2 border-gray-500 text-gray-500'>Players</div>
            <div className="flex flex-col justify-center items-center w-full h-screen">
            <Situation situation={situationData} />
            </div>
            <div className='flex-none w-8/12 h-[34vh] absolute bottom-[5vh] right-[3vw] md:w-6/12 md:h-[40vh] md:bottom-[3vh] md:left-1/2 md:translate-x-[-50%] border-solid border-2 border-gray-500 text-gray-500'>Cards
            
            </div>
            <div className='flex-none w-[27vw] h-[12vh] absolute bottom-[24vh] left-[1vw] md:w-[22vw] md:h-[17vh] md:m-3 md:bottom-[26vh] border-solid border-2 border-gray-500 text-gray-500'>Special Cards
            </div>
            <div className='flex-none w-[16vw] h-[16vh] absolute bottom-[5vh] left-[7vw] md:w-[9vw] md:h-[22vh] md:m-3 md:bottom-[1vh] md:left-[7vw] border-solid border-2 border-gray-500 text-gray-500'>Deck</div>
            <div className='flex-none w-4/12 h-[10vh] absolute top-[3vh] right-[2vw] md:w-[22vw] md:h-[15vh] md:top-[2vw] md:right-[1vw] border-solid border-2 border-gray-500 text-gray-500'>Achievement
            <Achievement achievement={achievementData}/>
            </div>
            <div className='flex-none w-[10vw] h-[10vh] absolute top-[45vh] right-[1vw] md:w-[22vw] md:h-3/4 md:bottom-[2vh] md:right-[1vw] md:top-auto md:text-[15px] border-solid border-2 border-gray-500 text-gray-500 text-[8px]'>Mobile Button Chat/ Chat</div>
        </div>

    )
}