"use client";
import Image from "next/image";

const ProductItem = ({ image, secondImage, title }) => {
  return (
    <div className="box-border w-[98%] h-auto max-h-[300px] lg:max-h-[360px] cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group aspect-w-16 aspect-h-9">
      <div className="overflow-hidden w-[97%] h-full relative">
        {/* İlk resim */}
        <Image
          src={image}
          width={300}
          height={300}
          alt="Slider Furniture Product"
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:translate-x-full"
        />
        {/* İkinci resim - varsayılan olarak gizli ve sağdan gelecek */}
        <Image
          src={secondImage}
          width={300}
          height={300}
          alt="Second Image"
          className="absolute top-0 left-0 w-full h-full object-cover transform translate-x-full transition-transform duration-1000 group-hover:translate-x-0"
        />
      </div>
      <div className="mt-2 text-0 text-center text-xl lg:text-[20px] relative">
        <h2 className="motion-safe:transition font-light">{title}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
