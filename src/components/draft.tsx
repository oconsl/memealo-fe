"use client"
import { useState } from "react";

const Draft = () => {
  const images: string[] = [
    "https://www.nacionrex.com/export/sites/debate/img/2023/08/05/memes-gatos-2.jpg_687446817.jpg",
    "https://images.hola.com/imagenes/mascotas/20191218155663/gatos-memes-divertidos-2019-gt/0-755-567/gato-tosiendo-z.jpg",
    "https://www.elpais.com.co/resizer/mBPF0ANIhK9C8OBjoh-0-3RA_5c=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/ES4YNNALTVAY3I5RENIXL5WIQI.jpg",
    "https://i.pinimg.com/236x/01/05/f0/0105f0af33c4296aff03661340c236c6.jpg",
    "https://imagenes.diariodenavarra.es/files/image_477_265/uploads/2021/02/18/60ae5c9db9f42.jpeg",
    "https://holatelcel.com/wp-content/uploads/2017/02/memes-gatos-1.jpg",
    "https://ih1.redbubble.net/image.2281149602.0789/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://lanoticia.com/wp-content/uploads/2020/08/gato_png_crop1567201738546-jpg_673822677-1.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative flex flex-row items-end justify-center min-w-full min-h-full bg-transparent overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Card ${index + 1}`}
          className={`w-[9vw] h-[24vh] object-cover rounded-xl border-solid border-2 border-slate-200 transition-transform ease-in-out duration-300 cursor-pointer ${
            selectedImage === index ? "elevated" : ""
          }`}
          style={{
            marginLeft: `${index > 0 ? "-14.5" : "0.5"}vw`,
            transform: `translateY(${selectedImage === index ? "-8" : "12"}px)`, // Valor inicial diferente
            zIndex: images.length - index,
          }}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
};

export default Draft;