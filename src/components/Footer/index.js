import Image from "next/image";

import Background from "@assets/montaj.jpg";
import Logo from "@assets/logo-left.png";

import useIsSafari from "@/hooks/useIsSafari";

export default function Footer() {
  return (
    <footer
      className={`bg-cover bg-center relative flex flex-col items-center w-full box-border overflow-hidden py-10 pb-10 lg:px-20 font-light ${
        true ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 z-30" />

      <div className="z-30 max-w-[1200px] flex flex-col lg:flex-row w-full items-center justify-between px-4"></div>

      {/* Kategori İsimleri */}
      <div className="z-30 max-w-[1200px] w-full p-4 border-t border-b border-gray-500 text-white text-center text-sm leading-6 mt-5 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap lg:justify-center">
        <p className="m-2">Salon Takımları</p>
        <p className="m-2">Yemek Odası Takımları</p>
        <p className="m-2">Yatak Odası Takımları</p>
        <p className="m-2">Koltuk Takımları</p>
        <p className="m-2">Klasik Mobilya</p>
        <p className="m-2">Avangard Mobilya</p>
        <p className="m-2">Oturma Odası</p>
        <p className="m-2">Aksesuarlar</p>
        <p className="m-2">Yemek Odası Takımları</p>
        <p className="m-2">Oturma Odası</p>
        <p className="m-2">Yatak Odası Takımları</p>
        <p className="m-2">Koltuk Takımları</p>
        <p className="m-2">Klasik Mobilya</p>
        <p className="m-2">Avangard Mobilya</p>
        <p className="m-2">Salon Takımları</p>
        <p className="m-2">Aksesuarlar</p>
      </div>

      <div className="z-30 max-w-[1200px] w-full px-4 py-6 border-b border-gray-500 text-white text-center text-sm leading-6 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap lg:justify-center">
        <p className="m-2">Online Randevu</p>
        <p className="m-2">Asortie Hakkında</p>
        <p className="m-2">Felsefemiz</p>
        <p className="m-2">Referanslar</p>
        <p className="m-2">Müşteri Hakları</p>
        <p className="m-2">İnsan Kaynakları</p>
        <p className="m-2">Şikayet ve Öneri</p>
        <p className="m-2">Yasal Uyarılar</p>
      </div>

      <p className="w-[95%] lg:max-w-[1100px] text-center text-white text-sm leading-6 mt-5 z-30">
        Copyright © 2010-2024 asortie.com, Site içeriğinin her hakkı mahfuzdur
        ve Fikir ve Sanat Eserleri Kanunu ve diğer mevzuat uyarınca
        korunmaktadır. Sitede bulunan resimlerin ve diğer tüm içeriklerin
        Asortie Mobilya ve Dekorasyon A.Ş'nin yazılı izni olmadan kopyalanması,
        farklı mecralarda yayınlanması yasaktır.
      </p>

      {/* <Image src={Logo} width={100} className="z-30 mt-4 mb-2" /> */}
    </footer>
  );
}
