"use client";
import Image from "next/image";

const BlogItem = ({ image, title }) => {
  return (
    <div className="box-border w-[98%] h-72 lg:h-96 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group">
      <div className="overflow-hidden w-[97%] h-full relative">
        <Image
          src={image}
          alt="Slider Furniture Product"
          className="z-20 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="w-[98%] mt-2 text-0 text-center text-xl lg:text-[22px] relative">
        <h2 className="motion-safe:transition font-light">{title}</h2>
        <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-background-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};

export default BlogItem;
