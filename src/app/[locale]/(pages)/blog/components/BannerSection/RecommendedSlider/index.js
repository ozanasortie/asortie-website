"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";

import useIsSafari from "@/hooks/useIsSafari";
import BlogSliderSample from "@assets/blog-slider-sample.jpg";
import Image from "next/image";

export default function RecommendedSlider() {
  const isSafari = useIsSafari();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="z-30 w-full " {...settings}>
      <div>
        <div
          className={`bg-no-repeat bg-center bg-cover h-[75vh] w-full flex flex-col items-center justify-center text-white`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-[28px] lg:text-5xl w-full font-light z-30"
          >
            GELECEĞİN ANTİKALARINI ÜRETİYORUZ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[95%] mt-6 lg:mt-8 lg:w-[70%] text-center lg:text-base z-30"
          >
            Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini
            geleceğin mirasıyla buluşturuyoruz. Her parçamız, geleceğin antikası
            olmaya aday benzersiz bir sanat eseri.
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`bg-cover bg-center relative p-4 lg:p-10 flex h-[75vh] w-full flex-col items-center justify-center text-white ${
          isSafari ? "" : "bg-fixed"
        }`}
        style={{ backgroundImage: `url(${BlogSliderSample.src})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-[28px] lg:text-5xl w-full font-light z-30"
        >
          GELECEĞİN ANTİKALARINI ÜRETİYORUZ
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[95%] mt-6 lg:mt-8 lg:w-[70%] text-center lg:text-base z-30"
        >
          Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini geleceğin
          mirasıyla buluşturuyoruz. Her parçamız, geleceğin antikası olmaya aday
          benzersiz bir sanat eseri.
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`bg-cover bg-center relative p-4 lg:p-10 flex h-[75vh] w-full flex-col items-center justify-center text-white ${
          isSafari ? "" : "bg-fixed"
        }`}
        style={{ backgroundImage: `url(${BlogSliderSample.src})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-[28px] lg:text-5xl w-full font-light z-30"
        >
          GELECEĞİN ANTİKALARINI ÜRETİYORUZ
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[95%] mt-6 lg:mt-8 lg:w-[70%] text-center lg:text-base z-30"
        >
          Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini geleceğin
          mirasıyla buluşturuyoruz. Her parçamız, geleceğin antikası olmaya aday
          benzersiz bir sanat eseri.
        </motion.div>
      </motion.div>
    </Slider>
  );
}
