import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { WhatsappIcon } from "hugeicons-react";

import InformationField from "./components/InformationField";
import DetailHeader from "./components/DetailHeader";
import RecommendedProducts from "./components/RecommendProducts";
import Transition from "@/components/Transition";
import Loading from "@/components/Loading";
import ImageProvider from "./components/ImageProvider";
import HiddenHeader from "@/components/HiddenHeader";
import ServiceField from "./components/ServiceField";

import eng from "@assets/icons/flags/eng.png";
import turkey from "@assets/icons/flags/turkey.png";
import arab from "@assets/icons/flags/arab.png";
import france from "@assets/icons/flags/france.png";
import russia from "@assets/icons/flags/russia.png";
import nigeria from "@assets/icons/flags/nigeria.png";

import {
  fetchFeaturedProducts,
  fetchProductDetail,
} from "@services/categoriesService";
import { fetchCustomerService } from "@/app/store/services/generalService";

export async function generateMetadata({ params }) {
  const { locale, slug, subslug } = params;
  const data = await fetchProductDetail({ slug: subslug, lang: locale });

  const pageTitle = data.Urunler[0]?.seo_baslik || "Asortie Mobilya";
  const pageDescription =
    data.Urunler[0]?.seo_aciklama || "Asortie Mobilya Ürün Detay";
  const pageKeywords = data.Urunler[0]?.seo_anaktar;
  const pageImage = data.Resimler[0]?.resim;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
  };
}

const transformWhatsappData = (data) => {
  const languages = {
    tr: { name: "Türkçe", flag: turkey },
    en: { name: "İngilizce", flag: eng },
    fr: { name: "Fransızca", flag: france },
    arp: { name: "Arapça", flag: arab },
    ru: { name: "Rusça", flag: russia },
    ha: { name: "Hausa", flag: nigeria },
  };

  const transformed = {};

  for (const key in data) {
    const match = key.match(/^(w_)([a-z]{2,3})(_\d+)?$/);
    if (match) {
      const langCode = match[2];
      const number = data[key].trim();
      if (!transformed[langCode]) {
        transformed[langCode] = {
          language: languages[langCode].name,
          flag: languages[langCode].flag,
          numbers: [],
        };
      }
      if (number) {
        transformed[langCode].numbers.push(number);
      }
    }
  }

  return Object.values(transformed);
};

const WhatsappCard = ({ item }) => (
  <Transition
    transition={{ duration: 1, delay: item.delay }}
    initial="hidden"
    whileInView="visible"
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 90 },
    }}
    className="mr-6 flex flex-col mt-10 shadow-md p-4 rounded-lg"
  >
    <div className="flex items-center mb-3 border-b pb-3 pt-1">
      <Image className="mr-2" width={22} src={item.flag} alt={item.language} />
      <span className="text-base text-wrap">{item.language}</span>
    </div>
    <div className="flex flex-col mt-2">
      {item.numbers.map((number, numIndex) => (
        <Link
          href={
            "https://api.whatsapp.com/send?phone=" +
            number.replace(/\+|\s/g, "")
          }
          key={numIndex}
          className="flex items-center mb-3 hover:text-theme-color motion-safe:transition"
        >
          <WhatsappIcon size={20} className="mr-2" />
          <span>{number}</span>
        </Link>
      ))}
    </div>
  </Transition>
);

const WhatsappNumbers = ({ t, whatsappNumbers }) => {
  return (
    <div className="max-w-[1400px] w-[90%] p-4 flex-col mt-10">
      <div className="w-full text-lg">
        {t("iletisim_sayfa_numaralar_baslik")}
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3">
        {whatsappNumbers.map((item, index) => (
          <WhatsappCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default async function ProductDetail({ params }) {
  const { locale, subslug } = params;
  const data = await fetchProductDetail({ slug: subslug, lang: locale });
  const featuredProducts = await fetchFeaturedProducts(locale);
  const whatsappNumbers = await fetchCustomerService(locale);
  const numbers = transformWhatsappData(whatsappNumbers);
  const t = await getTranslations("");

  if (!data) return <Loading />;

  const imagesWithVideo =
    data.Urunler[0].video && data.Urunler[0].video.trim() !== ""
      ? [{ resim: data.Urunler[0].video }, ...data.Resimler]
      : [...data.Resimler];

  return (
    <div className="w-full relative flex flex-col items-center pb-16 overflow-x-hidden pt-24">
      <HiddenHeader />
      <DetailHeader
        title={data.Urunler[0].urun_adi}
        description={data.Urunler[0].motto}
      />
      <Transition className="w-[90%] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row mt-7 lg:mt-0 lg:justify-center text-black p-4">
        <ImageProvider images={imagesWithVideo} />
        <div className="w-full lg:w-[24%] mt-10 lg:mt-0 lg:ml-5 flex-col-reverse lg:flex-col">
          <div
            className="lg:hidden text-start w-[100%] text-gray-800 my-4"
            dangerouslySetInnerHTML={{ __html: data.Urunler[0].urun_detayi }}
          />
          <InformationField title={data.Urunler[0].urun_adi} />
        </div>
      </Transition>
      <div
        className="hidden lg:block text-start w-[90%] px-6 text-gray-800 mt-24"
        dangerouslySetInnerHTML={{ __html: data.Urunler[0].urun_detayi }}
      />
      <WhatsappNumbers t={t} whatsappNumbers={numbers} />

      <ServiceField t={t} data={data && data.Sabit && data.Sabit[0]} />
      <RecommendedProducts t={t} data={featuredProducts} />
    </div>
  );
}
