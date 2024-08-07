"use client";
import Button from "@/components/Button";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function CollectionItem({ image, secondImage, title }) {
  return (
    <Link
      className="w-[95%] lg:w-[90%] mb-20 cursor-pointer relative overflow-hidden group text-black"
      href={"/products"}
    >
      <motion.div
        transition={{ duration: 1.5, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="box-border w-full lg:h-[400px] flex flex-col-reverse lg:flex-row items-center justify-between text-2xl"
      >
        <div className="flex flex-col text-0 text-center lg:text-start text-xl relative w-full h-full mr-5">
          <h2 className="motion-safe:transition py-5 lg:text-5xl font-light text-theme-color">
            {title}
          </h2>
          <i className="lg:text-lg">
            Bir ömüre zor sığacak çok sayıda şaheseri dünyaya armağan eden Mimar
            Sinan, önündeki kâğıda ilk çizgiyi çizmeden önce, bir şehrin
            geleceğini değiştirecek olmanın heyecanını yaşıyordu.
          </i>
          <Button
            text={"Koleksiyonu Keşfet"}
            color="white"
            background="black"
            className={"!w-fit p-4 h-[42px] mt-5 !rounded-none"}
          />
        </div>
        <div className="overflow-hidden w-full h-full relative">
          <Image
            src={image}
            alt="Slider Furniture Product"
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 rounded-sm"
          />
        </div>
      </motion.div>
    </Link>
  );
}
