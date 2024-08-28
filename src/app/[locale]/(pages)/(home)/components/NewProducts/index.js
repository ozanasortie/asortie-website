"use client";
import { motion } from "framer-motion";

import Sample2 from "@assets/Samplebanner.jpg";

import ProductItem from "./ProductItem";
import ProductsSlider from "./ProductsSlider";

const NewProducts = ({ products }) => {
  return (
    <div className="w-full relative flex flex-1 justify-start items-start max-lg:flex-col lg:px-10 2xl:px-page z-40 pt-12 lg:pt-8 pb-14">
      <div className="absolute left-0 top-0 w-full bg-black bg-opacity-35" />
      <div className="w-full flex flex-col items-center justify-center z-20">
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full flex items-center justify-center lg:mt-10"
        >
          <span className="text-4xl lg:text-5xl mb-2 text-center lg:text-start font-light">
            YENİ MODELLER
          </span>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-center mt-5"
        >
          <ProductsSlider products={products} />
          <div className="max-lg:hidden w-full flex gap-4 place-content-center place-items-center">
            {products?.data?.map((item, index) => {
              console.log("iıııııem", item);
              return (
                <ProductItem
                  image={item.resim}
                  href={"/collection"}
                  title={item.urun_adi}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewProducts;
