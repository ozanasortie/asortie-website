"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Animator, batch, MoveIn, StickyIn } from "react-scroll-motion";

import Arma from "@assets/14arma.png";
import AsortieGif from "@assets/asortie.gif";

export default function StoreField() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="overflow-hidden relative flex items-center justify-center flex-col group w-[100vw] h-[100vh] max-lg:h-[100vh] text-white"
    >
      {/* <Image
        className="w-full h-full object-cover absolute left-0 top-0"
        src={AsortieGif}
        alt="Asortie"
        unoptimized
      /> */}
      <video
        src="asortie.mp4"
        className="w-full h-full object-cover absolute left-0 top-0"
        autoPlay
        muted
        loop
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-lg:mt-10 text-2xl lg:text-5xl w-full font-md z-30"
      >
        GELECEĞİN ANTİKALARINI ÜRETİYORUZ
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 lg:mt-8 lg:w-[70%] w-full text-center text-xs lg:text-base z-30"
      >
        Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini geleceğin
        mirasıyla buluşturuyoruz. Her parçamız, geleceğin antikası olmaya aday
        benzersiz bir sanat eseri.
      </motion.div>
      <Image
        className="absolute right-5 top-24 lg:top-28 lg:w-16 lg:28 z-40"
        src={Arma}
        width={60}
        alt="Arma"
      />
    </motion.div>
  );
}
