"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import {
  MapsGlobal01Icon,
  SmartPhone01Icon,
  TelephoneIcon,
  WhatsappIcon,
} from "hugeicons-react";
import { useTranslations } from "next-intl";

export default function BottomBar() {
  const whatsappNumber = useSelector((state) => state.general.whatsappNumbers);
  const contact = useSelector((state) => state.general.contact);
  const t = useTranslations("");

  const handleWhatsappClick = () => {
    let number = whatsappNumber?.data[0].whatsap;

    number = number.replace(/\D/g, "");

    if (!number.startsWith("90")) {
      number = "90" + number;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/60 backdrop-blur-sm shadow-lg border-t flex justify-around py-3 lg:hidden z-50">
      <button
        onClick={handleWhatsappClick}
        className="flex flex-col items-center"
      >
        <WhatsappIcon color="#128c7e" className="h-6 w-6 mb-1" />
        <span className="text-sm">WhatsApp</span>
      </button>

      <Link
        href={"tel:" + contact?.data[0].tel1}
        className="flex flex-col items-center"
      >
        <TelephoneIcon className="h-6 w-6 mb-1" />
        <span className="text-sm">{t("hemen_ara")}</span>
      </Link>

      <Link
        href={
          "https://www.google.com/maps/place/Asortie+Mobilya+-+Klasik+%26+Luxury+Mobilya+ve+Dekorasyon/@41.0654143,28.7882992,17z/data=!3m1!4b1!4m6!3m5!1s0x14caa59547719c0b:0x86b9eb27a8cff0df!8m2!3d41.0654143!4d28.7908741!16s%2Fg%2F11h1hymfc?hl=tr&entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
        }
        className="flex flex-col items-center"
      >
        <MapsGlobal01Icon color="#4A89F3" className="h-6 w-6 mb-1" />
        <span className="text-sm">{t("konum")}</span>
      </Link>
    </div>
  );
}
