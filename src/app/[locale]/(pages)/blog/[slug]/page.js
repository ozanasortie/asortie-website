"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import useIsSafari from "@/hooks/useIsSafari";
import Image from "next/image";

import Sample from "@assets/Naorabi.jpg";
import Sample2 from "@assets/blog-sample.jpg";
import Sample3 from "@assets/blog-sample-2.png";

import BlogItem from "./components/BlogItem";
import RecommendedBlogs from "./components/RecommendedBlogs";
import Loading from "@/components/Loading";

import { useGetBlogDetailQuery } from "@services/blogService";

export default function Page({ params }) {
  console.log("PARAMS", params);
  const locale = useLocale();
  const isSafari = useIsSafari();
  const { data: blog, isLoading: isLoadingBlog } = useGetBlogDetailQuery({
    slug: params.slug,
    lang: locale,
  });
  console.log("blog", blog);

  if (isLoadingBlog) return <Loading />;

  return (
    <div
      className={`pt-52 pb-10 bg-cover min-h-full bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"})`,
      }}
    >
      <div className="max-w-[1400px] flex justify-around">
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -80 },
          }}
          className="w-[29%] h-fit flex items-center flex-col bg-white text-black"
        >
          <h1 className="w-full text-center text-2xl py-4 border-b">
            ÇOK OKUNANLAR
          </h1>
          <BlogItem image={Sample} />
          <BlogItem image={Sample2} />
          <BlogItem image={Sample3} />
          <BlogItem image={Sample} />
          <BlogItem image={Sample2} />
          <BlogItem image={Sample3} />
        </motion.div>
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -80 },
          }}
          className="w-[69%] flex items-center flex-col"
        >
          <h1 className="z-10 text-6xl w-full font-light leading-normal text-black bg-white p-6">
            {blog.data[0].baslik}
          </h1>

          <Image
            width={300}
            height={300}
            className="w-full object-cover"
            src={blog.image_url + blog.data[0].resim}
          />
        </motion.div>
      </div>
      {/* <RecommendedBlogs /> */}
    </div>
  );
}
