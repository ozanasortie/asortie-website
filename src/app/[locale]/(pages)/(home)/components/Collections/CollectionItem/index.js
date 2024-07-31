"use client";
import Image from "next/image";

const CollectionItem = ({ image, secondImage, title, className }) => {
  return (
    <div
      className={`box-border h-56 w-full lg:h-96 mb-5 mx-2 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group ${className}`}
    >
      <div className="overflow-hidden w-[97%] h-full relative">
        {/* İlk resim */}
        <Image
          src={image}
          alt="Slider Furniture Product"
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:translate-x-full"
        />
        {/* İkinci resim - varsayılan olarak gizli ve sağdan gelecek */}
        <Image
          src={secondImage}
          alt="Second Image"
          className="absolute top-0 left-0 w-full h-full object-cover transform translate-x-full transition-transform duration-1000 group-hover:translate-x-0"
        />
      </div>
      <div className="mt-2 text-0 text-center text-2xl relative">
        <h2 className="motion-safe:transition font-light">{title}</h2>
        <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-background-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};

export default CollectionItem;
