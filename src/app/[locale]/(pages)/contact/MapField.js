"use client";
import React from "react";
import Map from "./Map";
import Link from "next/link";
import Transition from "@/components/Transition";

export default function MapField() {
  return (
    <Transition className="w-full max-w-[1400px] flex flex-col justify-center items-center lg:items-start lg:flex-row mt-10 px-4 lg:px-0">
      <Map />
      <div className="w-[50%] mt-8 lg:mt-0 ml-10 flex flex-col">
        <h1 className="text-lg">Konumumuz</h1>
        <h1 className="text-2xl">Asortie Mobilya & Dekorasyon</h1>
        <span className="mt-6">
          Mağazamız, sizlere en iyi hizmeti sunmak için her gün açık! Haftanın 7
          günü kapılarımızı sizlere açıyoruz. İhtiyaç duyduğunuz her an
          yanınızdayız. Bizi ziyaret etmeyi unutmayın, sizleri mağazamızda
          görmekten mutluluk duyarız!
        </span>

        <span className="mt-10 font-medium">Adres</span>
        <span>
          İkitelli OSB, Başakşehir Mahallesi Masko Mobilya Kenti 4-B Blok
          D:11-13, 34600 Başakşehir
        </span>
        <span className=" mt-4 font-medium">Telefon</span>
        <Link href={"tel:(0212) 675 04 46"} className=" max-w-[50%]">
          (0212) 675 04 46
        </Link>
        <span className=" mt-4 font-medium">Whatsapp</span>
        <Link
          href={"https://api.whatsapp.com/send?phone=905494603007"}
          className=" max-w-[50%]"
        >
          +90 549 460 30 07
        </Link>
        <span className=" mt-4 font-medium">Email</span>
        <span className=" max-w-[50%]">info@asortie.com</span>
      </div>
    </Transition>
  );
}
