"use client";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import useIsSafari from "@/hooks/useIsSafari";
import BlogSliderSample2 from "@assets/elephant.jpg";
import BlogSliderSample from "@assets/nature.jpg";
import Button from "@/components/Button";

export default function RecommendedSlider() {
  const isSafari = useIsSafari();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full border-2 border-white ${
          i === currentSlide ? "bg-white" : "bg-transparent"
        }`}
      ></div>
    ),
    dotsClass:
      "absolute bottom-6 left-[40%] lg:left-[47%] !flex space-x-2 z-30 list-none",
  };

  return (
    <Slider
      className="z-30 w-full"
      afterChange={(index) => setCurrentSlide(index)}
      {...settings}
    >
      <div className="flex justify-center items-center h-[65vh] lg:h-[76vh] p-[10px]">
        <div
          className={`bg-no-repeat bg-center bg-cover h-full w-full flex flex-col items-center justify-center text-white relative rounded-xl`}
          style={{ backgroundImage: `url(${BlogSliderSample2.src})` }}
        >
          <div className="absolute left-7 bottom-12 z-30">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[22px] lg:text-[52px] w-full font-light z-30"
            >
              ASORTIE OLARAK DOĞAYA DESTEK ÇIKIYORUZ
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[95%] max-w-[800px] my-1 text-sm lg:text-lg z-30"
            >
              Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini
              geleceğin mirasıyla buluşturuyoruz. Her modelimiz, geleceğin
              antikası olmaya aday benzersiz bir sanat eseri.
            </motion.div>
            <Button
              className={
                "!bg-transparent flex items-center h-[50px] lg:h-[55px] w-[120px] lg:w-[180px] border-2 border-white mt-4"
              }
              background="white"
              color="white"
              onClick={() => onOpen()}
            >
              {/* <Image width={25} className="mr-3" src={CatalogueGold} /> */}
              <span className="font-normal lg:text-lg">Bloğa Git</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[65vh] lg:h-[76vh] p-[10px]">
        <div
          className={`bg-no-repeat bg-center bg-cover h-full w-full flex flex-col items-center justify-center text-white relative rounded-xl`}
          style={{ backgroundImage: `url(${BlogSliderSample2.src})` }}
        >
          <div className="absolute left-7 bottom-12 z-30">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[22px] lg:text-[52px] w-full font-light z-30"
            >
              ASORTIE OLARAK DOĞAYA DESTEK ÇIKIYORUZ
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[95%] max-w-[800px] my-1 text-sm lg:text-lg z-30"
            >
              Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini
              geleceğin mirasıyla buluşturuyoruz. Her modelimiz, geleceğin
              antikası olmaya aday benzersiz bir sanat eseri.
            </motion.div>
            <Button
              className={
                "!bg-transparent flex items-center h-[50px] lg:h-[55px] w-[120px] lg:w-[180px] border-2 border-white mt-4"
              }
              background="white"
              color="white"
              onClick={() => onOpen()}
            >
              {/* <Image width={25} className="mr-3" src={CatalogueGold} /> */}
              <span className="font-normal lg:text-lg">Bloğa Git</span>
            </Button>
          </div>
        </div>
      </div>{" "}
    </Slider>
  );
}
