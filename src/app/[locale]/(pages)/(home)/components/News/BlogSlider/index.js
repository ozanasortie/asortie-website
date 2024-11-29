import React from "react";
import BlogItem from "../BlogItem";
import Transition from "@/components/Transition";
import SliderProvider from "@components/Slider";
import { slugify } from "@/utils";

const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "35px",
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function BlogSlider({ news }) {
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
        {news?.data &&
          news?.data?.map((item) => {
            return (
              <BlogItem
                imageBaseUrl={news.image_url}
                image={item.resim}
                title={item.baslik}
                href={"/news/" + slugify(item.baslik, item.id)}
              />
            );
          })}
      </SliderProvider>
    </Transition>
  );
}

export default BlogSlider;
