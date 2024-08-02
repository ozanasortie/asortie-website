"use client";
import { motion } from "framer-motion";
import BlogSample from "@assets/blog-sample.jpg";
import BlogSample2 from "@assets/blog-sample-2.png";

import BlogSlider from "./BlogSlider";
import BlogItem from "./BlogItem";

export default function News() {
  return (
    <div className="w-full relative flex flex-1 justify-start items-start max-lg:flex-col p-2 z-40 py-10">
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
          className="w-full flex items-center justify-between mt-5 px-10"
        >
          <span className="w-full text-4xl lg:text-5xl text-center font-light">
            HABERLER
          </span>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-[100vw] flex items-center justify-center mt-10"
        >
          <BlogSlider />
          <div className="max-lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 place-content-center place-items-center">
            <BlogItem
              image={BlogSample}
              title="Mobilya Sektörünün Duayen İsmi Gaffur Yılmaz İle Söyleşi"
            />
            <BlogItem
              image={BlogSample}
              title="Mobilya Sektörünün Duayen İsmi Gaffur Yılmaz İle Söyleşi"
            />
            <BlogItem
              image={BlogSample2}
              title="Mobilya Sektörünün Duayen İsmi Gaffur Yılmaz İle Söyleşi"
            />
          </div>
        </motion.div>
        <span className="mt-10 text-xl lg:text-2xl text-center lg:text-start font-light">
          Tümünü Gör
        </span>
      </div>
    </div>
  );
}
