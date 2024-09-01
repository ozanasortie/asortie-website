"use client";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ image, href, title }) => {
  return (
    <Link
      href={href}
      className="box-border w-full max-md:w-[97%] h-auto cursor-pointer relative overflow-hidden flex flex-col items-center justify-between text-2xl group"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transition-transform duration-1000 transform group-hover:scale-110"
        />
      </div>
      <div className="w-full p-4 bg-white text-center text-xl lg:text-[20px]">
        <h2 className="font-light">{title}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
