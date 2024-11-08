import Link from "next/link";
import Transition from "@/components/Transition";

import BlogSlider from "./BlogSlider";
import BlogItem from "./BlogItem";
import { ArrowRight01Icon } from "hugeicons-react";

export default function News({ t, news }) {
  return (
    <div className="w-full relative flex flex-1 justify-start items-start max-lg:flex-col mt-4 mb-10 lg:px-page">
      <div className="absolute left-0 top-0 w-full bg-black bg-opacity-35" />
      <div className="w-full flex flex-col items-center justify-center z-20">
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full flex items-center justify-center lg:justify-between mt-10 mb-7 z-30"
        >
          <span className="text-3xl lg:text-4xl text-center lg:text-start font-light">
            {t("haberler")}
          </span>

          <Link href="/news" className="max-lg:hidden">
            <span className="flex justify-center items-center z-30 text-md lg:text-xl mt-5 cursor-pointer">
              {t("tumunu_gor")} <ArrowRight01Icon className="ml-1" />
            </span>
          </Link>
        </Transition>
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-center"
        >
          <BlogSlider news={news} />
          <div className="max-md:hidden w-full flex gap-2 place-content-center place-items-start">
            {news?.data &&
              news?.data?.map((item) => {
                return (
                  <BlogItem
                    imageBaseUrl={news.image_url}
                    image={item.resim}
                    title={item.baslik}
                    href={"/news/" + item.id}
                  />
                );
              })}
          </div>
        </Transition>

        <Link href="/news" className="lg:hidden mt-6">
          <span className="z-30 text-md lg:text-xl last:cursor-pointer underline">
            {t("tumunu_gor")}
          </span>
        </Link>
      </div>
    </div>
  );
}
