import React from "react";
import Slider from "@components/Slider";

import ProductItem from "../ProductItem";
import Transition from "@/components/Transition";

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
    <Transition
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
    </Transition>
  );
}

export default ProductSlider;
