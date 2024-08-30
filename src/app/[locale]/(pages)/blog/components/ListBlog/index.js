"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function ListBlog({
  href,
  image,
  title,
  description,
  imageBaseUrl,
}) {
  return (
    <Link
      className="box-border w-[98%] min-h-72 md:min-h-96 lg:h-[430px] mb-2 cursor-pointer relative overflow-hidden flex text-2xl group rounded-md"
      href={href}
    >
      <motion.div
        transition={{ duration: 1.5, delay: 0.2 }}
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="box-border w-full h-full flex flex-col text-2xl" // Full height
      >
        <div className="overflow-hidden w-full h-full max-h-[280px] relative">
          <Image
            width={300}
            height={300}
            src={imageBaseUrl + image}
            alt="Blog List Image"
            className="rounded-md absolute left-0 top-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <h2 className="motion-safe:transition text-black font-light pt-4 pb-2">
          {title}
        </h2>
        <p
          className="motion-safe:transition
        + text-[#8c8c8c] text-[14px] line-clamp-2"
        >
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
