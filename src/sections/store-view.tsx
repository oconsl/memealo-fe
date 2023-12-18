"use client";
import { useState } from "react";
// import Link from 'next/link';
// IF de que elementos ya posee el usuario, y filtrar esto si lo desea, implementar diseño tcg en vista previa, traer la informacion del usuario
const cards: Product[] = [
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

const backgrounds: Product[] = [
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

const avatars: Product[] = [
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

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
};

  type ProductsByType = {
    Cards: Product[];
    Backgrounds: Product[];
    Avatars: Product[];
  };

const productsByType: ProductsByType = {
  Cards: cards,
  Backgrounds: backgrounds,
  Avatars: avatars,
};

export default function Page() {
  const [selectedContent, setSelectedContent] = useState<string>("Cards");
  const [selectedCard, setSelectedCard] = useState<Product>(cards[0]);
  const [selectedBackground, setSelectedBackground] = useState<Product>(
    backgrounds[0]
  );
  const [selectedAvatar, setSelectedAvatar] = useState<Product>(avatars[0]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userCoins, setUserCoins] = useState<number>(100);


  const handleContentSelect = (content: string) => {
    setSelectedContent(content);
  };

  const handleProductSelect = (product: Product) => {
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

  const handleBuyClick = () => {
    const totalPrice = calculateTotal();
    const canBuy = totalPrice <= userCoins; 
    if (canBuy) {
      setUserCoins(userCoins - totalPrice);
      alert("Felicidades sos una maquina compra objetos!!.");
      setShowModal(false)
    } else {
      alert("No tienes suficientes monedas para comprar estos productos.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const calculateTotal = () => {
    let total = 0;
    total += parseInt(selectedCard.price.slice(1));
    total += parseInt(selectedBackground.price.slice(1));
    total += parseInt(selectedAvatar.price.slice(1));
    return total;
  };

  const renderSelectedContent = (product: Product | undefined) => {
    return (
      product && (
        <div>
          {/* <h2>Contenido seleccionado: Carta</h2> */}
          <div className="bg-white rounded-lg shadow-md p-6 w-44">
            <h2 className="text-gray-900 font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 font-semibold">{product.price}</p>
          </div>
        </div>
      )
    );
  };

  const username = "SxG_4Ever<3";

  return (
    <main className="w-full bg-martinique-950 h-screen flex flex-col  ">
      {/* ENCABEZADO */}
      <div className="flex justify-between items-center p-2 pl-4 pr-4 m-2 bg-album_view-3 text-white rounded-xl">
        <h1 className="text-4xl font-bold text-center">BIENVENIDOS A LA TIENDA DE MEMEALOOOOOOOOO !!!!!!! </h1>
        {/* <h1>
           <Link href="/">Home</Link>
           <Link href="/login">Login</Link>
           <Link href="/rooms">Rooms</Link>
        </h1> */}
        <div className="flex items-center">
          <p className="mr-2 text-2xl text-green-400">{userCoins} monedas</p>
          <p className="mr-4 text-2xl text-violet-400">{username}</p>
          <div className="h-10 w-10 rounded-full bg-gray-300">
            {/* Agregar la foto de perfil del usuario aca */}
          </div>
        </div>
      </div>
      {/* TIENDA */}
      <div className="w-full h-screen flex">
        {/* Contenido Vista previa */}
        <div className="w-3/5 h-[80vh] sm:w-3/5 flex flex-wrap justify-center gap-3 p-4 sm:h-auto bg-martinique-950 border">
          {/* Card */}
          <div className="absolute top-36">
            {renderSelectedContent(
              selectedContent === "Cards" ? selectedCard : selectedCard
            )}
          </div>
          { /* Background */}
          <div className="absolute top-80 ml-52">
            {renderSelectedContent(
              selectedContent === "Backgrounds"
                ? selectedBackground
                : selectedBackground
            )}
          </div>
          {/* Avatar */}
          <div className=" absolute top-80 mr-52">
            {renderSelectedContent(
              selectedContent === "Avatars" ? selectedAvatar : selectedAvatar
            )}
          </div>
          {/* BUTTON BUY */}
          <div className="absolute bottom-6 left-[36vw]">
            <button
              className="p-2 pl-4 pr-4 border rounded-lg bg-green-500 shadow-md shadow-zinc-900 hover:bg-sky-500"
              onClick={() => setShowModal(true)}
            >
              <h1 className="text-xl">BUY</h1>
            </button>
          </div>
        </div>
        {/* Seleccionar contenido */}
        <div className="w-4/5 h-[80vh] sm:w-4/5 sm:h-auto border bg-teal-700">
          {/* Pestañas de selección */}
          <div className="flex border-b bg-martinique-950">
            <button
              className={`px-4 py-2 hover:border-b-2 hover:border-indigo-500  focus:outline-none ${
                selectedContent === "Cards"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-500 "
              }`}
              onClick={() => handleContentSelect("Cards")}
            >
              Cards
            </button>
            <button
              className={`px-4 py-2 hover:border-b-2 hover:border-indigo-500 focus:outline-none ${
                selectedContent === "Backgrounds"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-500 "
              }`}
              onClick={() => handleContentSelect("Backgrounds")}
            >
              Backgrounds
            </button>
            <button
              className={`px-4 py-2 hover:border-b-2 hover:border-indigo-500 focus:outline-none ${
                selectedContent == "Avatars"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-500 "
              }`}
              onClick={() => handleContentSelect("Avatars")}
            >
              Avatars
            </button>
          </div>
          {/* Contenido de las pestañas */}
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {productsByType[selectedContent as keyof ProductsByType].map(
              (product: Product) => (
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
      </div>
      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-martinique-500 rounded-lg p-8 border shadow-md shadow-zinc-900 ">
            {/* Información de los productos seleccionados */}
            <h2 className="text-2xl text-slate-900 font-bold mb-2">Resumen de compra</h2>
            <p className="text-slate-900">
              {selectedCard.name} <br />
              {selectedBackground.name} <br />
              {selectedAvatar.name}
            </p>
            <p className="text-slate-900 mb-4" >Precio Total: ${calculateTotal()}</p>

            {/* Botón para cerrar el modal */}
            <button
              className="p-2 pl-4 pr-4 border mr-6 rounded-lg bg-red-700 shadow-md shadow-zinc-900 hover:bg-amber-950"
              onClick={closeModal}
            >
              Cerrar
            </button>
            <button
              className="p-2 pl-4 pr-4 border rounded-lg  bg-green-500 shadow-md shadow-zinc-900 hover:bg-sky-400"
              onClick={handleBuyClick}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
