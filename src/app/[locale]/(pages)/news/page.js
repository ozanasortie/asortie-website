"use client";
import { useLocale } from "next-intl";

import useIsSafari from "@/hooks/useIsSafari";

import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import BannerSection from "./components/BannerSection";
import Loading from "@/components/Loading";

import { useGetBlogsQuery } from "@/app/store/services/blogService";

export default function Blog() {
  const isSafari = useIsSafari();
  const locale = useLocale();

  const { data: blogs, isLoading: isLoadingBlogs } = useGetBlogsQuery(locale);

  if (isLoadingBlogs) return <Loading />;

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
    >
      <BannerSection />
      <BlogsHeader />
      <BlogList blogs={blogs} />
    </div>
  );
}
