"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import useIsSafari from "@/hooks/useIsSafari";
import CollectionItem from "./CollectionItem";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";
import FormBackground from "@/assets/form-background.png";

export default function Collection() {
  const t = useTranslations("Header");
  const isSafari = useIsSafari();

  useEffect(() => {
    const handleResize = () => {
      // Herhangi bir özel işlemi burada yapabilirsiniz
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    pauseOnHover: true,
  };

  return (
    <div className={`relative flex flex-col items-center text-white`}>
      <div
        className={`w-full bg-cover bg-black bg-center bg-no-repeat relative flex flex-col items-center text-white pt-32 pb-16 lg:pt-44 lg:pb-36 mb-10 lg:mb-20 ${
          isSafari ? "" : "bg-fixed"
        }`}
        style={{
          backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2021/01/pasha-sfondo-ok.jpg"})`,
        }}
      >
        <motion.div
          transition={{ duration: 1.5, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 80 },
          }}
        >
          <h1 className="font-light mb-10 text-4xl lg:text-7xl text-center">
            KOLEKSİYON
          </h1>
          <i className="font-light mb-10 text-xl text-center">
            "Mükemmele odaklan, gerisi kendiliğinden gelir..."
          </i>
        </motion.div>
      </div>
      <CollectionItem image={Sample2} title={"KLASİK KOLTUK TAKIMLARI"} />
      <CollectionItem image={Sample3} title={"KLASİK YATAK ODASI TAKIMLARI"} />
      <CollectionItem image={Sample} title={"KLASİK YEMEK ODASI TAKIMLARI"} />
      <CollectionItem image={Sample3} title={"KÖŞE TAKIMLARI"} />
    </div>
  );
}
