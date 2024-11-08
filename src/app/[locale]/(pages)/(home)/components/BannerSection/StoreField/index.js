"use client";
import { motion } from "framer-motion";

import Button from "@/components/Button";
import { useTranslations } from "next-intl";

export default function StoreField({ onOpen }) {
  const t = useTranslations("");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="overflow-hidden relative flex items-center justify-center flex-col group w-[100vw] h-[75vh] lg:h-[100vh] text-white"
    >
      <video
        id="video"
        src="/asortie.mp4"
        className="w-full h-full object-cover absolute left-0 top-0"
        autoPlay
        muted
        loop
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="uppercase text-center font-light text-[32px] lg:text-4xl xl:text-5xl w-full z-30 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_50%)] mb-8"
      >
        {t("gelecegin_antikalari")}
      </motion.div>
      <Button
        className={
          "!bg-[rgba(0,0,0,0.5)] flex items-center w-[200px] py-2 border-2 border-white h-[44px]"
        }
        background="white"
        color="white"
        onClick={() => onOpen()}
      >
        {/* <Image width={25} className="mr-3" src={CatalogueGold} /> */}
        <span className="font-normal text-lg">{t("katalog_indir")}</span>
      </Button>
    </motion.div>
  );
}
