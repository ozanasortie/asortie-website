"use client";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ image, href, title }) => {
  return (
    <Link
      href={href}
      className="box-border w-full max-w-[calc(100%-2rem)] h-auto aspect-w-16 aspect-h-9 cursor-pointer relative overflow-hidden flex flex-col items-center justify-between text-2xl group"
    >
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src={image}
          width={300}
          height={300}
          alt="Slider Furniture Product"
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="w-full p-2 bg-white text-center text-xl lg:text-[20px]">
        <h2 className="motion-safe:transition font-light">{title}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
