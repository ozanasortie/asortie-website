"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import useIsSafari from "@/hooks/useIsSafari";
import ListProduct from "@/components/ListProduct";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

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
          KLASİK YATAK TAKIMLARI
        </h1>
        <i className="max-w-[1100px] md:max-w-[900px] w-[95%] leading-loose text-xs lg:text-[16px] mb-10 text-center">
          Bir ömüre zor sığacak çok sayıda şaheseri dünyaya armağan eden Mimar
          Sinan, önündeki kâğıda ilk çizgiyi çizmeden önce, bir şehrin
          geleceğini değiştirecek olmanın heyecanını yaşıyordu. Gelecek
          nesillerin nasıl bir dünyada nefes alacaklarını, yürürken ne
          görürlerse mutlu olacaklarını, hangi binalara girmekten huzur ve gurur
          duyacaklarını hayal ediyordu. Bu yüzden eserleri yüzyıllar boyu ayakta
          ve yüzyıllar boyu kılavuz…
        </i>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:max-w-[1000px] xl:max-w-[1600px] lg:mt-7 justify-around">
        <ListProduct
          href={"/detail"}
          image={Sample2}
          title={"Olimpos Yatak Odası"}
        />
        <ListProduct
          href={"detail"}
          image={Sample}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample3}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/detail"}
          image={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample3}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"/detail"}
          image={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample3}
          title={"Klasik Koltuk Takımları"}
        />
        <ListProduct
          href={"detail"}
          image={Sample2}
          title={"Klasik Koltuk Takımları"}
        />
      </div>
    </div>
  );
}
