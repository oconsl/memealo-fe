/* eslint-disable @next/next/no-img-element */
const Deck = () => {
  const image: string = "https://i.pinimg.com/736x/17/0a/81/170a815040a32fcc2f596c59c9284c15.jpg";

  const imageStyle = {
    transform: "perspective(500px) rotateX(60deg) scaleY(1.3)",
    width: "9vw",
    height: "19vh",
  };

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      <img
        src={image}
        alt="Imagen"
        style={imageStyle}
        className="rounded-xl border-solid border-2 border-slate-200 border-b-8 cursor-pointer"
      />
    </div>
  );
};

export default Deck;