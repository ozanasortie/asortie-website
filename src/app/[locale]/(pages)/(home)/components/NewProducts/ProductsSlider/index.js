import React from "react";
import ProductItem from "../ProductItem";
import Transition from "@/components/Transition";
import SliderProvider from "@components/Slider";

const settings = {
  centerMode: true,
  centerPadding: "35px",
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
      className="md:hidden w-full flex items-center justify-center z-30"
    >
      <SliderProvider className="z-30 w-full" settings={settings}>
        {products?.data?.map((item, index) => {
          return (
            <ProductItem
              image={item.resim}
              href={"/collection"}
              title={item.urun_adi}
            />
          );
        })}
      </SliderProvider>
    </Transition>
  );
}

export default ProductSlider;
