"use client";
import { motion } from "framer-motion";

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
        className="text-center text-[28px] lg:text-4xl xl:text-5xl w-full z-30 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_50%)] mb-8"
      >
        GELECEĞİN ANTİKALARINI ÜRETİYORUZ
      </motion.div>
      <Button
        className={
          "!bg-transparent flex items-center w-[200px] py-2 border-2 border-white"
        }
        background="white"
        color="white"
      >
        {/* <Image width={25} className="mr-3" src={CatalogueGold} /> */}
        <span className="font-normal text-lg">KATALOG İNDİR</span>
      </Button>
    </motion.div>
  );
}
