"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import CollectionItem from "./CollectionItem";
import CollectionSlider from "./CollectionSlider";

import Background from "@assets/featured-background.jpeg";
import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

export default function Collections() {
  return (
    <div className="relative flex flex-1 flex-col items-center w-full box-border overflow-hidden py-5 pb-10 lg:px-20">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Background}
      />
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
          className="col-span-2"
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

        {/* İkinci satır */}
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
          className="col-span-2"
        />

        {/* Üçüncü satır */}
        <CollectionItem
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
          className="col-span-2"
        />
        <CollectionItem
          image={Sample2}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
        <CollectionItem
          image={Sample3}
          secondImage={Sample2}
          title="Belinda Koltuk Takımı"
        />
      </motion.div>

      <span className="z-30 text-lg mt-5 cursor-pointer underline">
        Daha Fazlasını Keşfet
      </span>
    </div>
  );
}
