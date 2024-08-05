import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Sample3 from "@assets/sample-3.jpg";
import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";

import ProductItem from "../ProductItem";

const settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ProductSlider() {
  return (
    <motion.div
      transition={{ duration: 1, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 90 },
      }}
      className="lg:hidden w-full flex flex-wrap items-center justify-center z-30"
    >
      <Slider className="z-30 w-full" {...settings}>
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
          image={Sample2}
          secondImage={Sample3}
          title="Olimpos Yatak Odası"
        />
      </Slider>
    </motion.div>
  );
}

export default ProductSlider;
