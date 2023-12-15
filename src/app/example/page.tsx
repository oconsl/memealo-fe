import Situation from "@/components/situation"

export default function SituationExample (){
    const situationData = {id: 1, description: 'Cuando terminás una serie y tenés que esperar años para la próxima temporada'}
    return (
        <>
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
            <Situation situation={situationData}  />
            
            
        </div>
        
        </>
    )
}
