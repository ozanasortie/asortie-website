"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const CollectionItem = ({ image, title, href }) => {
  return (
    <motion.div
      transition={{ duration: 1, delay: 0.4 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 90 },
      }}
      className={`box-border w-[100%] mb-5 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group `}
    >
      <Link
        href={href}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className="overflow-hidden w-[96%] h-[400px] relative md:h-[450px]">
          <img
            src={image}
            width={300}
            height={300}
            alt="Slider Furniture Product"
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="mt-2 font-light text-[21px] relative">
          <h2 className="text-start motion-safe:transition">{title}</h2>
          <div className="absolute left-0 right-0 bottom-0 h-[0.5px] bg-[gray] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionItem;
