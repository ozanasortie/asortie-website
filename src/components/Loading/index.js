"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Logo from "@assets/logo-left.png";

export default function Loading() {
  return (
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
      className="box-border w-[100vw] h-[90vh] flex justify-center items-center"
    >
      <Image
        width={100}
        src={Logo}
        alt="Slider Furniture Product"
        className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
      />
    </motion.div>
  );
}
