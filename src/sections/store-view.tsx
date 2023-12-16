"use client";
import { useState } from "react";
// SACAR LOS ANY PONER LOS TIPOS CORRECTOS, HEADER CON INFO DE USUARIO, SUMAR Y BUTTON DE BUY Y AÑADIR UN FONDO DE TIENDA  
const cards = [
  {
    id: 1,
    name: "Card 1",
    price: "$5",
    description: "Description of the card 1",
  },
  {
    id: 2,
    name: "Card 2",
    price: "$8",
    description: "Description of the card 2",
  },
  {
    id: 3,
    name: "Card 3",
    price: "$12",
    description: "Description of the card 3",
  },
  {
    id: 4,
    name: "Card 4",
    price: "$15",
    description: "Description of the card 4",
  },
  {
    id: 5,
    name: "Card 5",
    price: "$20",
    description: "Description of the card 5",
  },
  {
    id: 6,
    name: "Card 6",
    price: "$25",
    description: "Description of the card 6",
  },
  {
    id: 7,
    name: "Card 7",
    price: "$30",
    description: "Description of the card 7",
  },
  {
    id: 8,
    name: "Card 8",
    price: "$35",
    description: "Description of the card 8",
  },
];

const backgrounds = [
  {
    id: 1,
    name: "Background 1",
    price: "$15",
    description: "Description of the background 1",
  },
  {
    id: 2,
    name: "Background 2",
    price: "$20",
    description: "Description of the background 2",
  },
  {
    id: 3,
    name: "Background 3",
    price: "$25",
    description: "Description of the background 3",
  },
  {
    id: 4,
    name: "Background 4",
    price: "$30",
    description: "Description of the background 4",
  },
  {
    id: 5,
    name: "Background 5",
    price: "$35",
    description: "Description of the background 5",
  },
  {
    id: 6,
    name: "Background 6",
    price: "$40",
    description: "Description of the background 6",
  },
  {
    id: 7,
    name: "Background 7",
    price: "$45",
    description: "Description of the background 7",
  },
  {
    id: 8,
    name: "Background 8",
    price: "$50",
    description: "Description of the background 8",
  },
];

const avatars = [
  {
    id: 1,
    name: "Avatar 1",
    price: "$10",
    description: "Description of the avatar 1",
  },
  {
    id: 2,
    name: "Avatar 2",
    price: "$18",
    description: "Description of the avatar 2",
  },
  {
    id: 3,
    name: "Avatar 3",
    price: "$22",
    description: "Description of the avatar 3",
  },
  {
    id: 4,
    name: "Avatar 4",
    price: "$28",
    description: "Description of the avatar 4",
  },
  {
    id: 5,
    name: "Avatar 5",
    price: "$32",
    description: "Description of the avatar 5",
  },
  {
    id: 6,
    name: "Avatar 6",
    price: "$38",
    description: "Description of the avatar 6",
  },
  {
    id: 7,
    name: "Avatar 7",
    price: "$42",
    description: "Description of the avatar 7",
  },
  {
    id: 8,
    name: "Avatar 8",
    price: "$48",
    description: "Description of the avatar 8",
  },
];

// type Product = {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
// };

//   type ProductsByType = {
//     Cards: Product[];
//     Backgrounds: Product[];
//     Avatars: Product[];
//   };

const productsByType: ProductsByType = {
  Cards: cards,
  Backgrounds: backgrounds,
  Avatars: avatars,
};

type ProductsByType = {
  [key: string]: any[];
};

export default function Page() {
  const [selectedContent, setSelectedContent] = useState<string>("Cards");

  const [selectedCard, setSelectedCard] = useState<any>(cards[0]);
  const [selectedBackground, setSelectedBackground] = useState<any>(
    backgrounds[0]
  );
  const [selectedAvatar, setSelectedAvatar] = useState<any>(avatars[0]);

  const handleContentSelect = (content: string) => {
    setSelectedContent(content);
  };

  const handleProductSelect = (product: any) => {
    switch (selectedContent) {
      case "Cards":
        setSelectedCard(product);
        break;
      case "Backgrounds":
        setSelectedBackground(product);
        break;
      case "Avatars":
        setSelectedAvatar(product);
        break;
      default:
        break;
    }
  };

  const renderSelectedContent = (product: any) => {
    return (
      product && (
        <div>
          {/* <h2>Contenido seleccionado: Carta</h2> */}
          <div className="bg-white rounded-lg shadow-md p-6 w-80">
            <h2 className="text-gray-900 font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 font-semibold">{product.price}</p>
          </div>
        </div>
      )
    );
  };

  return (
    <main className="w-full bg-martinique-950 h-screen flex">
      {/* INFORMACION DEL USUARIO */}
      <></>
      {/* TIENDA */}
      <>
        {/* Contenido seleccionado */}
        <div className="w-3/5 h-[80vh] sm:w-3/5 flex flex-wrap justify-center gap-3 p-4 sm:h-auto bg-martinique-950 border">
          {/* <h1>Contendio Seleccionado {selectedContent}</h1> */}
          <div>
            {renderSelectedContent(
              selectedContent === "Cards" ? selectedCard : selectedCard
            )}
          </div>
          <div>
            {renderSelectedContent(
              selectedContent === "Backgrounds"
                ? selectedBackground
                : selectedBackground
            )}
          </div>
          <div>
            {renderSelectedContent(
              selectedContent === "Avatars" ? selectedAvatar : selectedAvatar
            )}
          </div>
        </div>
        {/* Seleccionar contenido */}
        <div className="w-4/5 h-[80vh] sm:w-4/5 sm:h-auto border">
          {/* Pestañas de selección */}
          <div className="flex border-b">
            <button
              className={`px-4 py-2 hover:border-b-2 hover:border-indigo-500  focus:outline-none ${
                selectedContent === "Cards" ? "border-b-2 border-indigo-500" : "text-gray-500 "
              }`}
              onClick={() => handleContentSelect("Cards")}
            >
              Cards
            </button>
            <button
              className={`px-4 py-2 hover:border-b-2 hover:border-indigo-500 focus:outline-none ${
                selectedContent === "Backgrounds" ? "border-b-2 border-indigo-500" : "text-gray-500 "
              }`}
              onClick={() => handleContentSelect("Backgrounds")}
            >
              Backgrounds
            </button>
            <button
              className={`px-4 py-2 hover:border-b-2 hover:border-indigo-500 focus:outline-none ${
                selectedContent == "Avatars" ? "border-b-2 border-indigo-500" : "text-gray-500 "
              }`}   
              onClick={() => handleContentSelect("Avatars")}
            >
              Avatars
            </button>
          </div>
          {/* Contenido de las pestañas */}
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {productsByType[selectedContent as keyof ProductsByType].map(
              (product: any) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4 w-1/5"
                >
                  <h2 className="text-gray-900 font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {product.price}
                    </p>
                    <button
                      className="text-gray-800 font-semibold"
                      onClick={() => handleProductSelect(product)}
                    >
                      Seleccionar
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </>
    </main>
  );
}
