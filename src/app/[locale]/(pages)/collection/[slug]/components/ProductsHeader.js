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
      className="w-[100%] flex items-center flex-col"
    >
      <h1 className="font-light mt-40 mb-10 text-4xl lg:text-6xl text-center uppercase">
        {data?.kategori}
      </h1>
      <i className="max-w-[1100px] md:max-w-[900px] w-[95%] leading-loose text-xs lg:text-[16px] mb-10 text-center">
        Bir ömüre zor sığacak çok sayıda şaheseri dünyaya armağan eden Mimar
        Sinan, önündeki kâğıda ilk çizgiyi çizmeden önce, bir şehrin geleceğini
        değiştirecek olmanın heyecanını yaşıyordu. Bu yüzden eserleri yüzyıllar
        boyu ayakta ve yüzyıllar boyu kılavuz…
      </i>
    </motion.div>
  );
}

export default ProductsHeader;
