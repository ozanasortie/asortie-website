"use client";
import { motion } from "framer-motion";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

import ProductItem from "./ProductItem";
import ProductsSlider from "./ProductsSlider";
import { forwardRef } from "react";

const NewProducts = forwardRef(({ props, ref }) => {
  return (
    <div
      ref={ref}
      className="w-full relative flex flex-1 justify-start items-start max-lg:flex-col lg:px-page z-40 pt-6 pb-12"
    >
      <div className="absolute left-0 top-0 w-full bg-black bg-opacity-35" />
      <div className="w-full flex flex-col items-center justify-center z-20">
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-center lg:mt-10"
        >
          <span className="text-4xl lg:text-5xl mb-1 text-center lg:text-start font-light">
            YENİ MODELLER
          </span>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full flex items-center justify-center mt-5"
        >
          <ProductsSlider />
          <div className="max-lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
            <ProductItem
              image={Sample2}
              secondImage={Sample3}
              title="Olimpos Yatak Odası"
            />
            <ProductItem
              image={Sample3}
              secondImage={Sample2}
              title="Belinda Koltuk Takımı"
            />
            <ProductItem
              image={Sample}
              secondImage={Sample3}
              title="Rodos Yemek Takımı"
            />
            {/* <ProductItem
              image={Sample2}
              secondImage={Sample3}
              title="Olimpos Yatak Odası"
            />
            <ProductItem
              image={Sample3}
              secondImage={Sample2}
              title="Belinda Koltuk Takımı"
            />
            <ProductItem
              image={Sample}
              secondImage={Sample3}
              title="Rodos Yemek Takımı"
            />
            <ProductItem
              image={Sample2}
              secondImage={Sample3}
              title="Olimpos Yatak Odası"
            />
            <ProductItem
              image={Sample3}
              secondImage={Sample2}
              title="Belinda Koltuk Takımı"
            /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default NewProducts;
