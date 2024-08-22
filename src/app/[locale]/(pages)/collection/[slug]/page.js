"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import useIsSafari from "@/hooks/useIsSafari";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";

export default function Products() {
  const t = useTranslations("Header");
  const isSafari = useIsSafari();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"})`,
      }}
    >
      <ProductsHeader />
      <ProductList />
    </div>
  );
}
