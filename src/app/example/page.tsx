import Situation from "@/components/situation"
import Achievement from "@/components/achievement"
import TwistCard from "@/components/twistCard"
import MemeCard from "@/components/memeCard"
import Loading from "@/components/loading"
export default function SituationExample (){
    const situationData = { id: 1, description: 'Cuando terminás una serie y tenés que esperar años para la próxima temporada' }
    const achievementData= { id:1, title:'Discriminado', description:'Que lástima! Nadie eligió tu meme, pero te ganaste este logro, felicidades y ánimo!', imageUrl:'/crying-cat-meme.png' }
    const twistCardData={id:1, name:'CARTA TROLL', description:'Te trollea, lol', imageUrl:'/Trollface.png'}
    const memeCardData={id:1, name:'DOGUE', cardLore:'Dogue (pronunciado /ˈdoʊdʒ/ DOHJ) es un término coloquial para "perro" que está principalmente asociado con imágenes de Shiba Inus (apodados "Shibe") y leyendas de monólogos internos en Tumblr. Estas fotos pueden estar retocadas con Photoshop para cambiar la cara del perro o con subtítulos de monólogos internos en la fuente Comic Sans. El meme y la iconografía principales asociados con Doge son del Shiba Inu llamado Kabosu, cuyas fotos tomadas por su dueña Atsuko Sato a principios de 2010 se volvieron virales en internet, generando numerosos memes y tendencias más amplias en las décadas siguientes. A partir de 2017, los formatos irónicos de Doge ganaron prevalencia sobre la versión original y positiva a medida que el personaje memético continuaba evolucionando.', cardNumber:50, type:'Animal', imageUrl:'/Doge-meme.webp'}
    
    return (
        <>
      
            <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
            
            <Situation situation={situationData}  />
            <Achievement achievement={achievementData}/>
            <TwistCard twistCard={twistCardData}/>
            <MemeCard memeCard={memeCardData}/>
            

                
        </div>
       
        </>
    )
}
