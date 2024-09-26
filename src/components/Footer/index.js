import { fetchCategories } from "@/app/store/services/categoriesService";
import FooterBackground from "./FooterBackground";
import NavLink from "../NavLink";
import Image from "next/image";
import Logo from "@assets/logo.png";
import {
  Facebook02Icon,
  FlickrIcon,
  InstagramIcon,
  YoutubeIcon,
} from "hugeicons-react";
import LocalSwitcher from "../Header/LocalSwitcher";
import CatalogueFormButton from "./CatalogueFormButton";
import Button from "../Button";
import Link from "next/link";

export default async function Footer({ locale }) {
  const categories = await fetchCategories(locale);

  return (
    <FooterBackground>
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 z-30 backdrop-blur-sm" />
      <h1 className="max-w-[95%] text-3xl lg:text-4xl z-30 text-white text-center max-lg:mt-5">
        Projelerinizde uzman mimari desteğe mi ihtiyacınız var?
      </h1>
      <Link
        href={"/architect-service"}
        className={
          "z-30 w-[250px] mt-8 bg-white text-black text-xl flex justify-center items-center p-4 rounded-lg hover:text-theme-color hover:scale-105 motion-safe:transition"
        }
      >
        MİMARİ DESTEK
      </Link>
      <div className="w-full mt-20 max-w-[1600px] flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start z-30 border border-gray-500 p-10 rounded-xl">
        <div className="flex w-[50%] xl:w-[25%] flex-col justify-center items-center xl:items-start xl:justify-between xl:min-h-[355px]">
          <Image src={Logo} width={300} />
          <div className="flex justify-center xl:justify-between items-center text-white pl-2 mt-10 xl:mt-0 mb-10 xl:mb-0">
            <div className="flex justify-center items-center">
              <Link
                href={"https://www.flickr.com/photos/asortie/"}
                target="_blank"
                className="flex justify-center items-center mr-3"
              >
                <FlickrIcon />
              </Link>
              <Link
                href={"https://www.instagram.com/asortiemobilya/"}
                target="_blank"
                className="flex justify-center items-center mr-3"
              >
                <InstagramIcon className="mr-1" />
              </Link>
              <Link
                href={"https://www.youtube.com/@asortiemobilya"}
                target="_blank"
                className="flex justify-center items-center mr-3"
              >
                <YoutubeIcon className="mr-1" />
              </Link>
              <Link
                href={"https://www.facebook.com/asortiemobilya/"}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Facebook02Icon className="mr-1" />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <CatalogueFormButton/>
              <LocalSwitcher />
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[360px] xl:w-[70%] flex flex-col items-start justify-between text-white">
          <div className="mb-8">
            <div className="z-30 max-w-[1600px] w-full p-4 text-white leading-6 grid grid-cols-3 lg:grid-cols-6">
              {categories.data.map((item) => {
                return (
                  <NavLink
                    key={"collection-" + item.id}
                    href={"/collection" + "/" + item.url}
                    className="m-2 font-normal"
                  >
                    {item.kategori}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div>
            <div className="z-30 max-w-[1600px] w-full px-4 text-white leading-6 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap text-sm">
              <NavLink href="/corporate/hakkimizda" className="m-2 font-normal">
                Asortie Hakkında
              </NavLink>
              <NavLink href="/corporate/felsefemiz" className="m-2 font-normal">
                Felsefemiz
              </NavLink>
              <NavLink
                href="/corporate/musteri-haklari"
                className="m-2 font-normal"
              >
                Müşteri Hakları
              </NavLink>
              <NavLink
                href="/corporate/insan-kaynaklari"
                className="m-2 font-normal"
              >
                İnsan Kaynakları
              </NavLink>
              <NavLink
                href="/corporate/sikayet-ve-oneri"
                className="m-2 font-normal"
              >
                Şikayet ve Öneri
              </NavLink>
              <NavLink
                href="/corporate/yasal-uyarilar"
                className="m-2 font-normal"
              >
                Yasal Uyarılar
              </NavLink>
              <NavLink
                href="/blog"
                className="m-2 font-normal"
              >
                Blog
              </NavLink>
              <NavLink
                href="/news"
                className="m-2 font-normal"
              >
                Haberler
              </NavLink>
            </div>
          </div>
        </div>
        {/* <Image src={Logo} width={100} className="z-30 mt-4 mb-2" /> */}
      </div>
      <p className="w-[80%] xl:w-[95%] xl:max-w-[1100px] text-center text-white text-sm leading-6 z-30 pt-8">
        Copyright © 2010-2024 asortie.com, Site içeriğinin her hakkı mahfuzdur
        ve Fikir ve Sanat Eserleri Kanunu ve diğer mevzuat uyarınca
        korunmaktadır. Sitede bulunan resimlerin ve diğer tüm içeriklerin
        Asortie Mobilya ve Dekorasyon A.Ş'nin yazılı izni olmadan kopyalanması,
        farklı mecralarda yayınlanması yasaktır.
      </p>
    </FooterBackground>
  );
}
