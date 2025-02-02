import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import kebabCase from "lodash/kebabCase";

import CollectionItem from "../CollectionItem";

const settings = {
  centerMode: true,
  centerPadding: "28px",
  infinite: true,
  speed: 500,
};

function CollectionSlider({ categories }) {
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
        {categories &&
          categories.koleksiyon &&
          categories.koleksiyon.slice(0, 4).map((item, index) => {
            const categoryName = kebabCase(item.kategori);
            return (
              <CollectionItem
                key={"category-" + item.kategori}
                href={"/collection/" + item.url}
                image={categories.image_url + item.resim}
                secondImage={categories.image_url + item.resim}
                title={item.kategori}
                index={index}
              />
            );
          })}
      </Slider>
    </motion.div>
  );
}

export default CollectionSlider;
