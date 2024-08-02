"use client";
import Image from "next/image";

import Background from "@assets/background.webp";
import Logo from "@assets/logo-left.png";

import useIsSafari from "@/hooks/useIsSafari";

export default function Footer() {
  const isSafari = useIsSafari();

  return (
    <footer
      className={`bg-cover bg-center relative flex flex-col items-center w-full box-border overflow-hidden py-10 pb-10 lg:px-20 ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 z-30" />

      <div className="z-30 max-w-[1200px] flex flex-col lg:flex-row w-full items-center justify-between px-4">
        {/* Sol Kısım: Adres */}
        <div className="text-center text-sm lg:text-left lg:w-1/3 mb-4 lg:mb-0 text-white">
          <p className="uppercase text-lg mb-4">
            Asortie Furniture & DecoratIon
          </p>
          <p className="lg:max-w-40 mb-4">
            İkitelli OSB, Başakşehir Mahallesi Masko Mobilya Kenti 4-B Blok
            D:11-13, 34600 Başakşehir
          </p>
          <p className="mb-4">Telefon: (0212) 675 04 46</p>
          <p>INFO@ASORTIE.COM</p>
        </div>

        <div className="flex justify-center lg:w-1/3 mb-4 lg:mb-0">
          <Image src={Logo} alt="Logo" width={120} />
        </div>

        <div className="flex justify-center lg:w-1/3 mb-4 lg:mb-0">
          <a href="https://facebook.com" className="mx-2 text-white">
            Facebook
          </a>
          <a href="https://twitter.com" className="mx-2 text-white">
            Twitter
          </a>
          <a href="https://instagram.com" className="mx-2 text-white">
            Instagram
          </a>
        </div>
      </div>
      <p className="w-[95%] lg:max-w-[1100px] text-center text-white text-sm leading-6 mt-5 z-30">
        Copyright © 2010-2024 asortie.com, Site içeriğinin her hakkı mahfuzdur
        ve Fikir ve Sanat Eserleri Kanunu ve diğer mevzuat uyarınca
        korunmaktadır. Sitede bulunan resimlerin ve diğer tüm içeriklerin
        Asortie Mobilya ve Dekorasyon A.Ş'nin yazılı izni olmadan kopyalanması,
        farklı mecralarda yayınlanması yasaktır.
      </p>
    </footer>
  );
}
