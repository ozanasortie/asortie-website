"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Store from "@/assets/store.png";

const StoreSection = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center flex-col">
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <motion.div
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="absolute left-0 top-0 w-full h-full"
      >
        <Image src={Store} alt="Asortie" className="object-cover h-full" />
      </motion.div>
      <motion.div
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="z-30 text-2xl text-center text-white"
      >
        <h1 className="text-2xl text-center lg:text-start lg:text-6xl my-4 mb-5 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
          MÜKEMMELİN MEKÂNA YANSIMASI:
        </h1>
      </motion.div>
      <motion.div
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="z-30 text-2xl text-center text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]"
      >
        Masko mağazamızı sanal tur ile keşfedebilirsiniz.
      </motion.div>
      <div className="cursor-pointer mt-10 bg-white text-background-color rounded-md p-5 z-30 text-xl text-center hover:text-theme-color motion-safe:transition hover:scale-105 duration-500">
        360 DERECE DENEYİMLE KEŞFET
      </div>
    </div>
  );
};

export default StoreSection;
