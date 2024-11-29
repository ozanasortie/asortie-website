import React from "react";
import Transition from "@/components/Transition";
import {
  AiBeautifyIcon,
  CustomerService01Icon,
  EarthIcon,
  House01Icon,
  StarsIcon,
  Time01Icon,
} from "hugeicons-react";
import SliderProvider from "@/components/Slider";
import { useTranslations } from "next-intl";

const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 1,
  speed: 1500,
  rows: 3,
  slidesPerRow: 1,
  autoplay: true,
};

const FeaturesSection = () => {
  const t = useTranslations("");

  const featureData = [
    {
      icon: <StarsIcon size={38} color="#DCA50C" />,
      title: t("asortie_ayricaligi_1_baslik"),
      description: t("asortie_ayricaligi_1_icerik"),
      delay: 0.2,
    },
    {
      icon: <Time01Icon size={38} color="#DCA50C" />,
      title: t("asortie_ayricaligi_2_baslik"),
      description: t("asortie_ayricaligi_2_icerik"),
      delay: 0.4,
    },
    {
      icon: <House01Icon size={38} color="#DCA50C" />,
      title: t("asortie_ayricaligi_3_baslik"),
      description: t("asortie_ayricaligi_3_icerik"),
      delay: 0.6,
    },
    {
      icon: <CustomerService01Icon size={38} color="#DCA50C" />,
      title: t("asortie_ayricaligi_4_baslik"),
      description: t("asortie_ayricaligi_4_icerik"),
      delay: 0.7,
    },
    {
      icon: <AiBeautifyIcon size={38} color="#DCA50C" />,
      title: t("asortie_ayricaligi_5_baslik"),
      description: t("asortie_ayricaligi_5_icerik"),
      delay: 0.8,
    },
    {
      icon: <EarthIcon size={38} color="#DCA50C" />,
      title: t("asortie_ayricaligi_6_baslik"),
      description: t("asortie_ayricaligi_6_icerik"),
      delay: 1,
    },
  ];

  return (
    <section className="bg-gray-100 py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -90 },
          }}
          className="w-full flex items-center justify-center mt-8 mb-14 z-30"
        >
          <span className="text-3xl lg:text-4xl text-center font-light">
            {t("asortie_ayricaligi")}
          </span>
        </Transition>
        <div className="hidden lg:flex flex-wrap">
          {featureData.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <Transition
                transition={{ duration: 0.8, delay: feature.delay }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -90 },
                }}
                className="flex min-h-[165px] bg-no-repeat bg-center bg-cover"
              >
                {feature.icon}
                <div className="w-[80%] ml-4">
                  <div className="flex items-center font-medium text-xl text-black">
                    <h3>{feature.title}</h3>
                  </div>
                  <p className="text-black">{feature.description}</p>
                </div>
              </Transition>
            </div>
          ))}
        </div>

        <SliderProvider settings={settings} className="w-full px-4 lg:hidden">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="!flex flex-row w-full mb-10 bg-no-repeat bg-center bg-cover"
            >
              {feature.icon}
              <div className="w-[80%] ml-4">
                <div className="flex items-center font-medium text-xl text-black">
                  <h3>{feature.title}</h3>
                </div>
                <p className="text-black">{feature.description}</p>
              </div>
            </div>
          ))}
        </SliderProvider>
      </div>
    </section>
  );
};

export default FeaturesSection;
