"use client";
import { useSelector } from "react-redux";
import { ChevronRightIcon } from "@chakra-ui/icons";

import CollectionItem from "./CollectionItem";
import CollectionSlider from "./CollectionSlider";

import Link from "next/link";
import Transition from "@/components/Transition";
import { useTranslations } from "next-intl";

export default function Collections() {
  const categories = useSelector((state) => state.categories);
  const t = useTranslations("");

  return (
    <>
      <div
        className={`flex flex-1 flex-col items-center w-full max-w-page box-border overflow-hidden pt-7 lg:px-page`}
      >
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-between mt-10 mb-8 lg:mb-7 z-30"
        >
          <span className="text-3xl lg:text-4xl text-center w-full lg:w-auto lg:text-start font-light">
            {t("koleksiyon")}
          </span>

          <Link href="/collection" className="max-lg:hidden">
            <span className="z-30 text-xl mt-5 cursor-pointer">
              {t("tumunu_gor")} <ChevronRightIcon mb={1} />
            </span>
          </Link>
        </Transition>

        <CollectionSlider categories={categories} />

        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="max-md:hidden w-full grid grid-cols-2 lg:grid-cols-4 place-items-start justify-between z-30"
        >
          {categories.koleksiyon &&
            categories.koleksiyon.slice(0, 4).map((item, index) => {
              return (
                <CollectionItem
                  href={"/collection" + "/" + item.url}
                  image={categories.image_url + item.resim}
                  secondImage={categories.image_url + item.resim}
                  title={item.kategori}
                  index={index}
                />
              );
            })}
        </Transition>

        <Link href="/collection" className="lg:hidden mt-4">
          <span className="z-30 text-md lg:text-xl last:cursor-pointer underline">
            {t("tumunu_gor")}
          </span>
        </Link>
      </div>

      <div
        className={`flex flex-1 flex-col items-center w-full max-w-page box-border overflow-hidden mt-4 pb-10 lg:px-page`}
      >
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-between mt-10 mb-8 lg:mb-7 z-30"
        >
          <span className="text-3xl lg:text-4xl text-center w-full lg:w-auto lg:text-start font-light">
            {t("dekorasyon")}
          </span>

          <Link href="/decoration" className="max-lg:hidden">
            <span className="z-30 text-xl mt-5 cursor-pointer">
              {t("tumunu_gor")} <ChevronRightIcon mb={1} />
            </span>
          </Link>
        </Transition>

        <CollectionSlider categories={categories} />

        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="max-md:hidden w-full grid grid-cols-2 lg:grid-cols-4 place-items-start justify-between z-30"
        >
          {categories.dekorasyon &&
            categories.dekorasyon.slice(0, 4).map((item, index) => {
              return (
                <CollectionItem
                  href={"/decoration" + "/" + item.url}
                  image={categories.image_url + item.resim}
                  secondImage={categories.image_url + item.resim}
                  title={item.kategori}
                  index={index}
                />
              );
            })}
        </Transition>

        <Link href="/decoration" className="lg:hidden mt-4">
          <span className="z-30 text-md lg:text-xl last:cursor-pointer underline">
            {t("tumunu_gor")}
          </span>
        </Link>
      </div>
    </>
  );
}
