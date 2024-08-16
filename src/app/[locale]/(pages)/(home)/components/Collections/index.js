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
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Collections() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`flex flex-1 flex-col items-center w-full max-w-page box-border overflow-hidden py-7 pb-10 lg:px-page`}
    >
      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="w-full flex items-center justify-between mt-10 mb-14 z-30"
      >
        <span className="text-4xl lg:text-5xl text-center lg:text-start font-light">
          KOLEKSİYON
        </span>

        <Link href="/collection">
          <span className="z-30 text-2xl mt-5 cursor-pointer">
            TÜMÜNÜ GÖR <ChevronRightIcon mb={1} />
          </span>
        </Link>
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
        className="max-lg:hidden w-full flex items-center justify-between z-30 gap-6"
      >
        <CollectionItem
          image={Sample3}
          secondImage={Sample2}
          title="Klasik Koltuk Takımları"
        />
        <CollectionItem
          image={Sample}
          secondImage={Sample2}
          title="Klasik Yatak Takımları"
        />
        <CollectionItem
          image={Sample2}
          secondImage={Sample2}
          title="Klasik Mutfak Takımları"
        />
        <CollectionItem
          image={Sample2}
          secondImage={Sample2}
          title="Klasik Ofis Takımları"
        />
      </motion.div>
    </div>
  );
}
