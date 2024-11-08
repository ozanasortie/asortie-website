"use client";
import { motion } from "framer-motion";

function ProductsHeader({ data }) {
  return (
    <motion.div
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="w-[100%] flex items-center flex-col z-20 mb-10"
    >
      <h1 className="font-light mt-[120px] text-4xl lg:text-5xl text-center">
        {data?.kategori}
      </h1>
      {data?.motto && (
        <i className="max-w-[1100px] md:max-w-[900px] w-[95%] leading-loose text-xs lg:text-[15px] mt-8 text-center">
         {data?.motto}
        </i>
      )}
    </motion.div>
  );
}

export default ProductsHeader;
