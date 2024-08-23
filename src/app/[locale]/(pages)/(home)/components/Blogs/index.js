"use client";
import { motion } from "framer-motion";
import BlogSample from "@assets/blog-sample.jpg";
import BlogSample2 from "@assets/blog-sample-2.png";

import BlogSlider from "./BlogSlider";
import BlogItem from "./BlogItem";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Blogs() {
  return (
    <div className="w-full relative flex flex-1 justify-start items-start max-lg:flex-col mt-4 z-40 mb-14 lg:px-page">
      <div className="absolute left-0 top-0 w-full bg-black bg-opacity-35" />
      <div className="w-full flex flex-col items-center justify-center z-20">
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-center lg:justify-between mt-10 mb-10 lg:mb-14 z-30"
        >
          <span className="text-4xl lg:text-5xl text-center lg:text-start font-light">
            BLOG
          </span>

          <Link href="/collection" className="max-lg:hidden">
            <span className="z-30 text-md lg:text-xl mt-5 cursor-pointer">
              TÜMÜNÜ GÖR <ChevronRightIcon mb={1} />
            </span>
          </Link>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full flex items-center justify-center"
        >
          <BlogSlider />
          <div className="max-lg:hidden w-full flex gap-4 place-content-center place-items-center">
            <BlogItem
              image={BlogSample}
              title="Mobilya Sektörünün Duayen İsmi Gaffur Yılmaz İle Söyleşi"
            />
            <BlogItem
              image={BlogSample}
              title="Mobilya Sektörünün Duayen İsmi Gaffur Yılmaz İle Söyleşi"
            />
            <BlogItem
              image={BlogSample}
              title="Mobilya Sektörünün Duayen İsmi Gaffur Yılmaz İle Söyleşi"
            />
          </div>
        </motion.div>

        <Link href="/collection" className="lg:hidden mt-8">
          <span className="z-30 text-md lg:text-xl last:cursor-pointer underline">
            TÜMÜNÜ GÖR
          </span>
        </Link>
      </div>
    </div>
  );
}
