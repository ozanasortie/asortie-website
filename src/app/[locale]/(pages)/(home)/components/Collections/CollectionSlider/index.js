import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

import CollectionItem from "../CollectionItem";

const settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
};

function CollectionSlider() {
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
        <CollectionItem
          href={"/detail"}
          image={Sample3}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample3}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          href={"/detail"}
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
      </Slider>
    </motion.div>
  );
}

export default CollectionSlider;
