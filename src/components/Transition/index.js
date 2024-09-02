"use client";
import { motion } from "framer-motion";

export default function Transition({
  children,
  transition = { duration: 0.8, delay: 0 },
  initial = "hidden",
  whileInView = "visible",
  variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  },
  className = "",
}) {
  return (
    <motion.div
      transition={transition}
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
