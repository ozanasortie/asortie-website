"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Logo from "@assets/logo-left.png";
import Background from "@assets/form-background.png";

export default function Loading() {
  return (
    <div
      className="fixed left-0 top-0 box-border w-[100vw] h-[100vh] flex justify-center items-center z-50"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70" />
      <motion.div
        transition={{
          opacity: {
            duration: 1.3,
            repeat: Infinity,
            repeatType: "loop",
          },
          y: {
            duration: 1.5,
            delay: 0.2,
          },
        }}
        initial="hidden"
        whileInView="visible"
        animate={{ opacity: [1, 0] }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
      >
        <Image
          width={100}
          src={Logo}
          alt="Slider Furniture Product"
          className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
      </motion.div>
    </div>
  );
}
