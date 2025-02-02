"use client";
import { motion } from "framer-motion";
import Background from "@assets/form-background.png";

export default function Loading() {
  return (
    <div
      className="fixed left-0 top-0 box-border w-screen h-screen flex justify-center items-center z-50"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-85" />
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
        <img
          width={100}
          src={"/assets/logo.png"}
          alt="Slider Furniture Product"
          className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
      </motion.div>
    </div>
  );
}
