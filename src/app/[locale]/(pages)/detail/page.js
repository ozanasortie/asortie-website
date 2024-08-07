"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsSafari from "@/hooks/useIsSafari";

import Input from "@components/Input";
import Button from "@components/Button";

import SampleBanner from "@assets/olimpos-min.jpg";
import { Textarea } from "@chakra-ui/react";

export default function Detail() {
  const isSafari = useIsSafari();

  const settings = {
    customPaging: function (i) {
      return <Image width={150} src={SampleBanner} />;
    },
    dots: true,
    dotsClass: "slider-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <motion.div
      transition={{ duration: 1, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={`w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center text-white pb-16 lg:pb-32 xl:pb-48 ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${SampleBanner.src})`,
      }}
    >
      <div className="backdrop-blur-md absolute left-0 top-0 w-full h-full bg-black bg-opacity-10 z-30" />
      <motion.div
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="w-full flex items-center flex-col z-40 mt-[150px] mb-[80px]"
      >
        <h1 className="text-white font-light lg:text-6xl xl:text-7xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
          OLİMPOS YATAK ODASI
        </h1>
        <p className="text-white text-center text-lg mt-10 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)] max-w-[90%]">
          Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini geleceğin
          mirasıyla buluşturuyoruz. Her parçamız, geleceğin antikası olmaya aday
          benzersiz bir sanat eseri.
        </p>
      </motion.div>
      <div
        className={`w-full bg-cover bg-center bg-no-repeat flex justify-between text-white p-5 ${
          isSafari ? "" : "bg-fixed"
        }`}
        style={{
          backgroundImage: `url(${SampleBanner.src})`,
        }}
      >
        <div className="w-[59%] h-full z-40">
          <div className="mb-5">
            <Image src={SampleBanner} />
          </div>
          <div className="mb-5">
            <Image src={SampleBanner} />
          </div>
          <div className="mb-5">
            <Image src={SampleBanner} />
          </div>
          <div className="mb-5">
            <Image src={SampleBanner} />
          </div>
        </div>
        <motion.div
          transition={{ duration: 1 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-2/5 p-5 flex flex-col items-center h-full sticky top-24 z-40"
        >
          <h1 className="text-3xl font-light text-center mb-5">
            ÜRÜN BİLGİSİ TALEP EDİN
          </h1>
          <Input placeholder="Ad Soyad" className="!w-[90%] mb-5" />
          <Input placeholder="E-Mail" className="!w-[90%] mb-5" />
          <Input placeholder="Telefon" className="!w-[90%] mb-5" />
          <Textarea
            _placeholder={{ color: "white" }}
            placeholder="Mesaj"
            className="!w-[90%] mb-5"
          ></Textarea>
          <Button
            background="black"
            className="w-[90%]  flex items-center justify-center py-4"
            text={"TALEP ET"}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
