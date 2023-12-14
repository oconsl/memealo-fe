import Situation from "@/components/situation"

export default function SituationExample (){
    const situationData = {id: 1, description: 'nbuifvbhdvfbhudfbhudvfhu'}
    return (
        <>
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <Situation situation={situationData}  />
            
        </div>
        
        </>
    )
}
