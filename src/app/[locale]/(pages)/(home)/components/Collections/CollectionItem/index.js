"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const CollectionItem = ({ image, secondImage, title, index, href }) => {
  const customClass = index === 0 || index === 2 ? "mt-20" : "";

  return (
    <motion.div
      transition={{ duration: 1, delay: 0.4 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: index === 1 || index === 3 ? -90 : 90 },
      }}
      className={`box-border w-[100%] mb-5 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group ${customClass}`}
    >
      <Link
        href={href}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className="overflow-hidden w-[98%] h-full relative">
          <Image
            src={image}
            width={300}
            height={300}
            alt="Slider Furniture Product"
            className="w-full md:min-h-[550px] object-cover transform transition-transform duration-1000 group-hover:translate-x-full"
          />
          <Image
            src={secondImage}
            width={300}
            height={300}
            alt="Second Image"
            className="absolute top-0 left-0 w-full md:min-h-[550px] object-cover transform translate-x-full transition-transform duration-1000 group-hover:translate-x-0"
          />
        </div>
        <div className="mt-2 text-0 text-center text-[20px] relative">
          <h2 className="text-start motion-safe:transition font-light">
            {title}
          </h2>
          <div className="absolute left-0 right-0 bottom-0 h-[0.5px] bg-[gray] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionItem;
