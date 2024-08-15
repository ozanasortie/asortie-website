"use client";
import useIsSafari from "@/hooks/useIsSafari";

import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";

export default function Blog() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
    >
      <BlogsHeader />
      <BlogList />
    </div>
  );
}
