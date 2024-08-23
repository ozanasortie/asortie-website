"use client";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import kebabCase from "lodash/kebabCase";
import { ChevronRightIcon } from "@chakra-ui/icons";

import CollectionItem from "./CollectionItem";
import CollectionSlider from "./CollectionSlider";

import useIsSafari from "@hooks/useIsSafari";

import Link from "next/link";

export default function Collections() {
  const isSafari = useIsSafari();
  const categories = useSelector((state) => state.categories);
  console.log("categories", categories);

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
        className="w-full flex items-center justify-between mt-10 mb-10 lg:mb-14 z-30"
      >
        <span className="text-4xl lg:text-5xl text-center w-full lg:w-auto lg:text-start font-light">
          KOLEKSİYON
        </span>

        <Link href="/collection" className="max-lg:hidden">
          <span className="z-30 text-xl mt-5 cursor-pointer">
            TÜMÜNÜ GÖR <ChevronRightIcon mb={1} />
          </span>
        </Link>
      </motion.div>

      <CollectionSlider categories={categories} />

      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="max-lg:hidden w-full flex items-center justify-between z-30 gap-6 -mt-16"
      >
        {categories.data &&
          categories.data.slice(0, 4).map((item, index) => {
            const categoryName = kebabCase(item.kategori);
            return (
              <CollectionItem
                href={"/collection" + "/" + categoryName}
                image={categories.image_url + item.resimanasayfa}
                secondImage={categories.image_url + item.resim}
                title={item.kategori}
                index={index}
              />
            );
          })}
      </motion.div>

      <Link href="/collection" className="lg:hidden mt-4">
        <span className="z-30 text-md lg:text-xl last:cursor-pointer underline">
          TÜMÜNÜ GÖR
        </span>
      </Link>
    </div>
  );
}
