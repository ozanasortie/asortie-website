"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";

import Sample from "@assets/Naorabi.jpg";
import Sample2 from "@assets/blog-sample.jpg";
import Sample3 from "@assets/blog-sample-2.png";

import BlogItem from "./components/BlogItem";
import RecommendedBlogs from "./components/RecommendedBlogs";
import Loading from "@/components/Loading";

import {
  useGetBlogDetailQuery,
  useGetMostReadedBlogsQuery,
  useGetRecommendedBlogsQuery,
} from "@services/blogService";

export default function Page({ params }) {
  const locale = useLocale();
  const { data: blog, isLoading: isLoadingBlog } = useGetBlogDetailQuery({
    slug: params.slug,
    lang: locale,
  });
  const { data: mostReadeds, isLoading: isMostReadedLoading } =
    useGetMostReadedBlogsQuery(locale);
  const { data: recommendedBlogs, isLoading: isRecommendedsLoading } =
    useGetRecommendedBlogsQuery(locale);

  if (isLoadingBlog || isMostReadedLoading || isRecommendedsLoading)
    return <Loading />;

  return (
    <div className="pt-40 pb-10 bg-cover min-h-full bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white">
      <div className="max-w-[1600px] flex justify-around">
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -80 },
          }}
          className="w-[30%] max-xl:hidden h-fit flex items-center flex-col bg-white text-black"
        >
          <h1 className="w-full text-center text-3xl py-4">ÇOK OKUNANLAR</h1>
          {mostReadeds?.data?.map((item) => {
            return (
              <BlogItem
                imageBaseUrl={mostReadeds?.image_url}
                image={item.resim}
                item={item}
                href={"/blog/" + item.id}
              />
            );
          })}
        </motion.div>
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -80 },
          }}
          className="w-[100%] flex flex-col items-center text-center"
        >
          <h1 className="z-10 text-5xl w-[95%] leading-normal text-black p-6 uppercase">
            {blog.data[0].baslik}
          </h1>
          <i className="z-10 text-lg w-[80%] leading-relaxed text-gray-600 mb-6">
            {blog.data[0].ozet}
          </i>
          <Image
            width={300}
            height={300}
            className="w-[70%] object-cover mb-6"
            src={blog.image_url + blog.data[0].resim}
          />
          <div
            className="text-start w-[80%] text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.data[0].icerik }}
          />
        </motion.div>
      </div>
      <RecommendedBlogs data={recommendedBlogs} />
    </div>
  );
}
