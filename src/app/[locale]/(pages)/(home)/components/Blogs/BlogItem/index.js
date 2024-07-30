"use client";
import Image from "next/image";

const BlogItem = ({ image, title }) => {
  return (
    <div className="box-border w-[98%] lg:w-[400px] lg:h-80 mb-5 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group">
      <div className="overflow-hidden w-[255px] h-[255px] relative flex justify-center rounded-full">
        <Image
          src={image}
          alt="Slider Furniture Product"
          className="z-20 w-[255px] h-[255px] object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-full"
        />
      </div>
      <div className="mt-3 text-0 text-center w-[85%] text-xl group-hover:text-theme-color relative">
        <h2 className="motion-safe:transition">{title}</h2>
      </div>
    </div>
  );
};

export default BlogItem;
