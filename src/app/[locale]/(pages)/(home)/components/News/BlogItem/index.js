"use client";
import Image from "next/image";

const BlogItem = ({ imageBaseUrl, image, title }) => {
  return (
    <div className="box-border w-[100%] cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group">
      <div className="overflow-hidden w-[97%] h-full relative">
        <Image
          src={image}
          width={300}
          height={300}
          alt="Slider Furniture Product"
          className="z-20 w-full h-full min-h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="w-[98%] mt-2 text-0 text-center text-lg lg:text-[20px] relative">
        <h2 className="motion-safe:transition font-light">{title}</h2>
      </div>
    </div>
  );
};

export default BlogItem;
