import React from "react";
import Map from "./Map";
import Link from "next/link";
import Transition from "@/components/Transition";
import { Car03Icon } from "hugeicons-react";

export default function MapField({ t }) {
  return (
    <Transition className="w-full max-w-[1400px] flex flex-col justify-center items-center lg:items-start lg:flex-row mt-10 px-4 lg:px-0">
      <div className="w-full max-w-[1400px] bg-cover bg-center bg-no-repeat relative flex flex-col lg:flex-row items-start lg:justify-around">
        <Map />
        <div className="w-full lg:w-[80%] mt-8 lg:mt-0 lg:ml-10 flex flex-col">
          <h1 className="text-2xl">{t("asortie_baslik")}</h1>
          <span className="mt-4">{t("iletisim_sayfa_saatler_icerik")}</span>

          <span className="mt-10 font-medium">{t("adres")}</span>
          <span>
            MASKO Mobilya Kenti 4-B Blok, No 11-13 İkitelli Başakşehir, İstanbul
          </span>
          <span className=" mt-4 font-medium">{t("tel")}</span>
          <Link href={"tel:+90 (212) 675 04 46"} className=" max-w-[50%]">
            +90 (212) 675 04 46
          </Link>
          <span className=" mt-4 font-medium">WhatsApp</span>
          <Link
            href={"https://api.whatsapp.com/send?phone=905494603007"}
            className=" max-w-[50%]"
          >
            +90 549 460 30 07
          </Link>
          <span className="mt-4 font-medium">Email</span>
          <span className="max-w-[50%]">info@asortie.com</span>

          <Link
            className="mt-4 underline flex justify-normal items-center hover:text-theme-color motion-safe:transition"
            href={"/blog"}
          >
            <Car03Icon className="mr-2" />{t('iletisim_sayfa_nasil_gidilir')}
          </Link>
        </div>
      </div>
    </Transition>
  );
}
