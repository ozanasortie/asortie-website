import {
  Clock01Icon,
  CustomerSupportIcon,
  LanguageCircleIcon,
  WhatsappIcon,
} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import FormBackground from "@/assets/form-background.png";
import BackgroundSection from "@/components/Background";
import Transition from "@/components/Transition";
import ContactForm from "./ContactForm";
import { getTranslations } from "next-intl/server";

const ContactInfo = ({ t }) => (
  <div className="flex flex-col lg:flex-row lg:justify-around w-full max-w-[1400px]">
    <div className="w-full flex flex-col text-white z-30 mr-5">
      <h1 className="text-3xl xl:text-4xl z-30 flex items-center">
        <CustomerSupportIcon color="white" className="mr-4" size={35} />
        {t("iletisim_sayfa_baslik")}
      </h1>
      <div className="flex justify-between text-black mt-6">
        <SupportCard
          icon={<Clock01Icon size={25} className="mr-2" />}
          title={t("iletisim_sayfa_bilgi_1_baslik")}
          description={t("iletisim_sayfa_bilgi_1_icerik")}
          delay={0.2}
        />
        <SupportCard
          icon={<LanguageCircleIcon size={25} className="mr-2" />}
          title={t("iletisim_sayfa_bilgi_2_baslik")}
          description={t("iletisim_sayfa_bilgi_2_icerik")}
          delay={0.8}
        />
      </div>
    </div>
  </div>
);

const SupportCard = ({ icon, title, description, delay }) => (
  <Transition
    transition={{ duration: 1.2, delay }}
    initial="hidden"
    whileInView="visible"
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 90 },
    }}
    className="flex flex-col text-white rounded-lg p-5 border border-white w-[49.2%]"
  >
    <div className="flex font-medium items-center">
      {icon}
      {title}
    </div>
    <div className="mt-4 text-sm">{description}</div>
  </Transition>
);

const WhatsappNumbers = ({ t, whatsappNumbers }) => {
  return (
    <div className="flex-col mt-10">
      <div className="w-full text-xl mb-6">
        {t("iletisim_sayfa_numaralar_baslik")}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {whatsappNumbers.map((item, index) => (
          <WhatsappCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
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
    className="mr-6 flex flex-col mb-10 backdrop-blur-sm p-2 rounded-lg"
  >
    <div className="flex items-center mb-3 border-b pb-3 pt-1">
      <Image className="mr-2" width={22} height={22} src={item.flag} alt={item.language} />
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

const transformWhatsappData = (data) => {
  const languages = {
    tr: { name: "Türkçe", flag: "/icons/flags/turkey.png" },
    en: { name: "İngilizce", flag: "/icons/flags/eng.png" },
    fr: { name: "Fransızca", flag: "/icons/flags/france.png" },
    arp: { name: "Arapça", flag: "/icons/flags/arab.png" },
    ru: { name: "Rusça", flag: "/icons/flags/russia.png" },
    ha: { name: "Hausa", flag: "/icons/flags/nigeria.png" },
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

export default async function FormField({ whatsappNumbers }) {
  const numbers = transformWhatsappData(whatsappNumbers);
  const t = await getTranslations("");

  return (
    <BackgroundSection
      background={FormBackground.src}
      className={`w-full p-4 lg:p-10 py-20 lg:pb-24 flex flex-col items-center lg:justify-center text-white pt-32 lg:!pt-44`}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 z-20" />
      <div className="max-w-[1400px] w-full flex flex-col items-center lg:justify-center">
        <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-around pb-10 z-30">
          <div className="flex flex-col justify-center lg:w-[50%]">
            <ContactInfo t={t} />
            <WhatsappNumbers t={t} whatsappNumbers={numbers} />
          </div>
          <ContactForm />
        </div>
      </div>
    </BackgroundSection>
  );
}
