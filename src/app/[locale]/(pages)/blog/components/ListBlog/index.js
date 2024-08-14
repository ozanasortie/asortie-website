"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function ListBlog({ href, image, title, description }) {
  return (
    <Link
      className="box-border w-[98%] h-72 md:h-96 lg:h-[500px] cursor-pointer relative overflow-hidden flex items-center justify-center text-2xl group"
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
        className="box-border w-full h-72 md:h-96 lg:h-[500px] flex flex-col items-center justify-center text-2xl"
      >
        <div className="overflow-hidden w-full h-full relative">
          <Image
            src={image}
            alt="Blog List Image"
            className="absolute left-0 top-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute bottom-0 text-0 text-center text-xl px-4 bg-[rgba(0,0,0,0.8)] w-full">
            <h2 className="motion-safe:transition font-light text-white py-5">
              {title}
            </h2>
            <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-background-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </div>
        <p className="motion-safe:transition text-black py-5">{description}</p>
      </motion.div>
    </Link>
  );
}
