"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Animator, batch, MoveIn, StickyIn } from "react-scroll-motion";

import CatalogueGold from "@assets/catalogue.png";
import Button from "@/components/Button";

export default function StoreField() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="overflow-hidden relative flex items-center justify-center flex-col group w-[100vw] h-[75vh] lg:h-[100vh] text-white"
    >
      {/* <Image
        className="w-full h-full object-cover absolute left-0 top-0"
        src={AsortieGif}
        alt="Asortie"
        unoptimized
      /> */}
      <video
        id="video"
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
        className="text-center text-[28px] lg:text-5xl xl:text-6xl w-full z-30 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]"
      >
        GELECEĞİN ANTİKALARINI ÜRETİYORUZ
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-[95%] mt-6 lg:mt-8 lg:w-[70%] text-center lg:text-base xl:text-xl z-30 mb-8"
      >
        Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini geleceğin
        mirasıyla buluşturuyoruz. Her modelimiz, geleceğin antikası olmaya aday
        benzersiz bir sanat eseri.
      </motion.div>
      <Button
        className={"bg-white flex items-center w-[250px] py-2 !h-60"}
        background="white"
        color="black"
      >
        <Image width={30} className="mr-3" src={CatalogueGold} />
        <span className="font-light text-xl">KATALOG İNDİR</span>
      </Button>
    </motion.div>
  );
}
