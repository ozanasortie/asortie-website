"use client";
import { motion } from "framer-motion";

import useIsSafari from "@/hooks/useIsSafari";
import InformationField from "./components/InformationField";
import DetailHeader from "./components/DetailHeader";
import ImageField from "./components/ImageField";
import RecommendedProducts from "./components/RecommendProducts";

import SampleBanner from "@assets/bosna.jpg";

export default function Detail() {
  const isSafari = useIsSafari();

  return (
    <motion.div
      transition={{ duration: 1, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={`w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center text-white pb-16 lg:pb-32 ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${SampleBanner.src})`,
      }}
    >
      <div className="backdrop-blur-lg absolute left-0 top-0 w-full h-full bg-black bg-opacity-10 z-30" />
      <DetailHeader />
      <div
        className={`w-full bg-cover bg-center bg-no-repeat flex flex-col mt-7 lg:mt-0 lg:flex-row lg:justify-between text-white lg:p-5 ${
          isSafari ? "" : "bg-fixed"
        }`}
        style={{
          backgroundImage: `url(${SampleBanner.src})`,
        }}
      >
        <ImageField />
        <InformationField />
      </div>
      <RecommendedProducts />
    </motion.div>
  );
}
