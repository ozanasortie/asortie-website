"use client";
import { motion } from "framer-motion";

import Link from "next/link";

export default function CollectionItem({ href, image, title }) {
  return (
    <Link
      className="box-border w-[97%] lg:w-full sm:h-[520px] md:h-[450px] cursor-pointer relative overflow-hidden flex items-center justify-center text-2xl group rounded-md"
      href={href}
    >
      <motion.div
        transition={{ duration: 1.5, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="box-border w-full sm:h-[520px] md:h-full flex flex-col items-center justify-center text-2xl"
      >
        <div className="overflow-hidden w-full h-full relative">
          <img
            width={300}
            height={300}
            src={image}
            alt="Slider Furniture Product"
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="text-0 text-center text-xl lg:text-[20px] relative bg-black bg-opacity-20 w-full">
          <h2 className="motion-safe:transition font-light text-white py-3">
            {title}
          </h2>
          <div className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </motion.div>
    </Link>
  );
}
