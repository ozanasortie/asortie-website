import React from "react";
import Transition from "@/components/Transition";

import BlogItem from "../BlogItem";
import SliderProvider from "@components/Slider";
import { slugify } from "@/utils";

const settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function BlogSlider({ blogs }) {
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
      <SliderProvider className="z-30 w-full" settings={settings}>
        {blogs?.data &&
          blogs?.data?.map((item) => {
            return (
              <BlogItem
                imageBaseUrl={blogs.image_url}
                image={item.resim}
                title={item.baslik}
                href={"/blog/" + slugify(item.baslik, item.id)}
              />
            );
          })}
      </SliderProvider>
    </Transition>
  );
}

export default BlogSlider;
