"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import useIsSafari from "@/hooks/useIsSafari";
import ListProduct from "@/components/ListProduct";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

export default function Collection() {
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
        backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2021/01/luxury-sfondo-ok.jpg"})`,
      }}
    >
      <motion.div
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="w-[100%] flex items-center flex-col"
      >
        <h1 className="font-light mt-40 mb-10 text-4xl lg:text-6xl text-center">
          KOLEKSİYON
        </h1>
        <i className="max-w-[1100px] md:max-w-[900px] w-[95%] leading-loose text-xs lg:text-[16px] mb-10 text-center">
          "Mükemmele odaklan, gerisi kendiliğinden gelir..."
        </i>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-[1000px] xl:max-w-[1200px] lg:mt-7">
        <ListProduct
          href={"/products"}
          image={Sample3}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample}
          secondImage={Sample2}
          title={"Klasik Yatak Odası Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample2}
          secondImage={Sample2}
          title={"Klasik Yemek Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample3}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample}
          secondImage={Sample2}
          title={"Klasik Yatak Odası Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample2}
          secondImage={Sample2}
          title={"Klasik Yemek Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample3}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample3}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />{" "}
        <ListProduct
          href={"/products"}
          image={Sample}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample3}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />{" "}
        <ListProduct
          href={"/products"}
          image={Sample}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/products"}
          image={Sample3}
          secondImage={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
      </div>
    </div>
  );
}
