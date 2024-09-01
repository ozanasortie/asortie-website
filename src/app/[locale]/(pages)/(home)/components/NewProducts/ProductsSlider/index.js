import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Sample3 from "@assets/sample-3.jpg";
import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";

import ProductItem from "../ProductItem";

const settings = {
  centerMode: true,
  centerPadding: "20px",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ProductSlider({ products }) {
  return (
    <motion.div
      transition={{ duration: 1, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 90 },
      }}
      className="md:hidden w-full flex flex-wrap items-center justify-center z-30"
    >
      <Slider className="z-30 w-full" {...settings}>
        {products?.data?.map((item, index) => {
          return (
            <ProductItem
              image={item.resim}
              href={"/collection"}
              title={item.urun_adi}
            />
          );
        })}
      </Slider>
    </motion.div>
  );
}

export default ProductSlider;
