"use client";
import useIsSafari from "@/hooks/useIsSafari";

import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import BannerSection from "./components/BannerSection";

export default function Blog() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
    >
      <BannerSection />
      <BlogsHeader />
      <BlogList />
    </div>
  );
}
