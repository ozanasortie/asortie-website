import React from "react";
import Slider from "react-slick";

import { motion } from "framer-motion";
import BlogSample from "@assets/blog-sample.jpg";
import BlogSample2 from "@assets/blog-sample-2.png";

import BlogItem from "../BlogItem";

const settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function BlogSlider({ blogs }) {
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
        {blogs?.data &&
          blogs?.data?.map((item) => {
            return (
              <BlogItem
                imageBaseUrl={blogs.image_url}
                image={item.resim}
                title={item.baslik}
              />
            );
          })}
      </Slider>
    </motion.div>
  );
}

export default BlogSlider;
