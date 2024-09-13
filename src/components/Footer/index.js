import { fetchCategories } from "@/app/store/services/categoriesService";
import FooterBackground from "./FooterBackground";
import NavLink from "../NavLink";
import Image from "next/image";
import Logo from "@assets/logo.png";
import {
  CatalogueIcon,
  Facebook02Icon,
  InstagramIcon,
  YoutubeIcon,
} from "hugeicons-react";
import LocalSwitcher from "../Header/LocalSwitcher";
import Button from "../Button";

export default async function Footer({ locale }) {
  const categories = await fetchCategories(locale);
  return (
    <FooterBackground>
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 z-30 backdrop-blur-sm" />
      <div className="w-full max-w-[1600px] flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start z-30">
        <div className="flex w-[50%] xl:w-[25%] flex-col justify-center items-center xl:items-start xl:justify-between xl:min-h-[355px]">
          <Image src={Logo} width={300} />
          <div className="flex justify-center xl:justify-between items-center text-white pl-2 mt-10 xl:mt-0 mb-10 xl:mb-0">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center mr-3">
                <InstagramIcon className="mr-1" />
              </div>
              <div className="flex justify-center items-center mr-3">
                <YoutubeIcon className="mr-1" />
              </div>
              <div className="flex justify-center items-center">
                <Facebook02Icon className="mr-1" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button
                className="mr-3 !h-fit !bg-transparent rounded-lg px-4 py-1 !border !border-white mx-3"
                text={"E-Katalog"}
                color="white"
                fontWeight={"font-normal"}
                textSize={"text-sm"}
              >
                <CatalogueIcon className="mr-2 !hover:text-theme-color" />
              </Button>
              <LocalSwitcher />
            </div>
          </div>
        </div>
        <div className="w-[95%] xl:w-[70%] flex flex-col items-start text-white">
          <div className="mb-8">
            <h2 className="text-white font-medium z-30 text-xl w-full px-6">
              KOLEKSİYON
            </h2>
            <div className="z-30 max-w-[1600px] w-full p-4 text-white leading-6 grid grid-cols-3 lg:grid-cols-6">
              {categories.data.map((item) => {
                return (
                  <NavLink
                    key={"collection-" + item.id}
                    href={"/collection" + "/" + item.url}
                    className="m-2"
                  >
                    {item.kategori}
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-white font-medium z-30 text-xl w-full max-w-[1600px] px-6 mb-4">
              KURUMSAL
            </h2>
            <div className="z-30 max-w-[1600px] w-full px-4 text-white leading-6 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap text-sm">
              <NavLink href="/corporate/hakkimizda" className="m-2">
                Asortie Hakkında
              </NavLink>
              <NavLink href="/corporate/felsefemiz" className="m-2">
                Felsefemiz
              </NavLink>
              <NavLink href="/corporate/musteri-haklari" className="m-2">
                Müşteri Hakları
              </NavLink>
              <NavLink href="/corporate/insan-kaynaklari" className="m-2">
                İnsan Kaynakları
              </NavLink>
              <NavLink href="/corporate/sikayet-ve-oneri" className="m-2">
                Şikayet ve Öneri
              </NavLink>
              <NavLink href="/corporate/yasal-uyarilar" className="m-2">
                Yasal Uyarılar
              </NavLink>
            </div>
          </div>
        </div>
        {/* <Image src={Logo} width={100} className="z-30 mt-4 mb-2" /> */}
      </div>
      <p className="w-[80%] xl:w-[95%] xl:max-w-[1100px] text-center text-white text-sm leading-6 mt-5 z-30 pt-8">
        Copyright © 2010-2024 asortie.com, Site içeriğinin her hakkı mahfuzdur
        ve Fikir ve Sanat Eserleri Kanunu ve diğer mevzuat uyarınca
        korunmaktadır. Sitede bulunan resimlerin ve diğer tüm içeriklerin
        Asortie Mobilya ve Dekorasyon A.Ş'nin yazılı izni olmadan kopyalanması,
        farklı mecralarda yayınlanması yasaktır.
      </p>
    </FooterBackground>
  );
}
