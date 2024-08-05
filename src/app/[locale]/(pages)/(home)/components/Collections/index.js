"use client";
import { motion } from "framer-motion";

import CollectionItem from "./CollectionItem";
import CollectionSlider from "./CollectionSlider";

import useIsSafari from "@hooks/useIsSafari";

import Background from "@assets/featured-background.jpeg";
import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";
import Link from "next/link";

export default function Collections() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center relative flex flex-1 flex-col items-center w-full box-border overflow-hidden py-10 pb-10 lg:px-20 ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="w-full flex items-center justify-center my-8 z-30"
      >
        <span className="text-4xl lg:text-5xl text-center lg:text-start font-light">
          KOLEKSİYONLAR
        </span>
      </motion.div>

      <CollectionSlider />

      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="max-lg:hidden w-full grid grid-cols-4 gap-4 items-center justify-center z-30"
      >
        {/* İlk satır */}
        <CollectionItem
          image={Sample3}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          image={Sample}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
      </motion.div>

      <Link href="/collection">
        <span className="z-30 text-lg mt-5 cursor-pointer underline">
          Daha Fazlasını Keşfet
        </span>
      </Link>
    </div>
  );
}
