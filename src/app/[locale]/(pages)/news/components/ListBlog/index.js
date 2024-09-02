import Transition from "@/components/Transition";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ListBlog({
  href,
  image,
  title,
  description,
  imageBaseUrl,
  width = "w-full",
}) {
  console.log("width", width);
  return (
    <Link
      href={href}
      className={`box-border ${width} max-w-lg mb-4 lg:mb-8 cursor-pointer relative overflow-hidden flex flex-col rounded-md group`}
    >
      <Transition
        transition={{ duration: 1.5, delay: 0.2 }}
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="flex flex-col w-full h-full"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={imageBaseUrl + image}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="rounded-md transform transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="p-4 bg-white">
          <h2 className="text-xl lg:text-2xl text-black mb-2">{title}</h2>
          <p className="text-sm lg:text-base text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
      </Transition>
    </Link>
  );
}
