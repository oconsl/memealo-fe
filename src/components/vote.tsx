import Card from "@/components/card"
import type {CardType} from "@/types/card"
const exampleCard: CardType = {   
  id: 1,   
  name: "Pepo",   
  type: "V",   
  image_url: "/memes/pepo-sad.webp", 
  card_lore: "Pepo",   
  card_number: 1, 
};

const arrayOfCards: CardType[] = new Array(6).fill("").map((_, index) => {
  return {
    ...exampleCard,
    id: index,
    name: `Pepo ${index}`,
    card_number: index,
  };
});

console.log(arrayOfCards)

export default function Vote() {
  return (
    <article className="backdrop-blur-sm w-screen h-screen absolute top-0 left-0 flex items-center justify-center">
      <section className="w-4/6 h-5/6 bg-martinique-500 flex flex-col items-center justify-around rounded-2xl">
        <div className="flex py-6 px-3 text-center items-center justify-center w-4/6 h-2/6 bg-astral-200 rounded-2xl border-4 border-martinique-700">
          <p className="text-4xl">cuando te levantas a las 3 de la mañana para comer y no hay nada</p>
        </div>
        <div className="w-full flex items-center justify-evenly gap-2 px-4">
          {arrayOfCards.map((card)=> {
            return <Card card={card} key={card.id}/>
          })}
          
        </div>
      </section>
    </article>
  )
}