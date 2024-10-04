"use client";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RecommendedSlider({ featureds }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    autoplay: true,
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full border-2 border-white ${
          i === currentSlide ? "bg-white" : "bg-transparent"
        }`}
      ></div>
    ),
    dotsClass:
      "absolute bottom-12 left-[40%] lg:left-[47%] !flex space-x-2 z-30 list-none",
  };

  return (
    <Slider
      className="w-full z-30 lg:max-w-[1000px] xl:max-w-[1300px] mb-3"
      afterChange={(index) => setCurrentSlide(index)}
      {...settings}
    >
      {featureds.data.map((item) => {
        return (
          <div
            key={"Recommended Blog " + item.id}
            className="flex justify-center items-center h-[65vh] lg:h-[76vh]"
          >
            <div
              className={`bg-no-repeat bg-center bg-cover h-full w-full flex flex-col items-center justify-center text-white relative rounded-xl`}
              style={{
                backgroundImage: `url(${featureds.image_url + item.resim})`,
              }}
            >
              <div className="absolute left-7 bottom-12 z-30">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[22px] lg:text-[36px] w-full z-30"
                >
                  {item.seo}
                </motion.div>
                <Link
                  className={
                    "!bg-transparent flex items-center h-[50px] lg:h-[40px] w-[110px] lg:w-[150px] border border-white mt-6 rounded-md"
                  }
                  background="white"
                  color="white"
                  href={item.url}
                >
                  <div className="w-full font-normal lg:text-lg text-center">Yazıyı Oku</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
