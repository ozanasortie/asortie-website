import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { fetchCategories } from "@/app/store/services/categoriesService";
import FooterBackground from "./FooterBackground";
import NavLink from "../NavLink";
import Logo from "@assets/logo.png";
import ISO from "@assets/icons/iso.png";
import {
  Facebook02Icon,
  FlickrIcon,
  InstagramIcon,
  YoutubeIcon,
} from "hugeicons-react";
import LocalSwitcher from "../Header/LocalSwitcher";
import CatalogueFormButton from "./CatalogueFormButton";

export default async function Footer({ locale }) {
  const categories = await fetchCategories(locale);
  const t = await getTranslations("");

  return (
    <FooterBackground>
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 z-30 backdrop-blur-sm" />
      <h1 className="max-w-[95%] text-3xl lg:text-4xl z-30 text-white text-center max-lg:mt-5">
        {t("footer_mimar_tanitim")}
      </h1>
      <Link
        href={"/architect-service"}
        className={
          "z-30 w-[220px] mt-8 bg-white text-black text-xl flex justify-center items-center p-2 rounded-lg hover:text-theme-color hover:scale-105 motion-safe:transition"
        }
      >
        {t("mimari_destek")}
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
              <CatalogueFormButton />
              <LocalSwitcher />
            </div>
          </div>
        </div>
        <div className="w-[95%] lg:pl-4 2xl:pl-0 lg:h-[360px] xl:w-[70%] flex flex-col lg:items-start justify-between text-white">
          <div className="w-full mb-8 flex justify-center items-center">
            <div className="z-30 max-w-[1600px] w-full p-4 text-white leading-6 grid grid-cols-3 lg:grid-cols-6">
              {categories.koleksiyon.map((item) => {
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
          <div className="mb-8 z-30 max-w-[1600px] w-full px-4 text-white leading-6 flex flex-wrap text-sm">
            <Link
              target="_blank"
              href="https://www.youtube.com/@asortiemobilya"
              className="m-2 font-normal"
            >
              {t("asortie_tv_k")}
            </Link>
            <NavLink href="/corporate/hakkimizda" className="m-2 font-normal">
              {t("asortie_hakkinda")}
            </NavLink>
            <NavLink href="/corporate/felsefemiz" className="m-2 font-normal">
              {t("felsefemiz")}
            </NavLink>
            <NavLink
              href="/corporate/musteri-haklari"
              className="m-2 font-normal"
            >
              {t("musteri_haklari")}
            </NavLink>
            <NavLink
              href="/corporate/insan-kaynaklari"
              className="m-2 font-normal"
            >
              {t("insan_kaynaklari")}
            </NavLink>
            <NavLink
              href="/corporate/sikayet-ve-oneri"
              className="m-2 font-normal"
            >
              {t("sikayet_ve_oneri")}
            </NavLink>
            <NavLink
              href="/corporate/biz-kimiz"
              className="m-2 font-normal"
            >
              {t("yasal_uyarilar")}
            </NavLink>
            <NavLink href="/blog" className="m-2 font-normal">
              {t("blog")}
            </NavLink>
            <NavLink href="/news" className="m-2 font-normal">
              {t("haberler")}
            </NavLink>
          </div>
          <div className="z-30 max-w-[1600px] w-full px-4 text-white leading-6 flex flex-wrap text-sm place-items-center">
            <Image
              className="w-[45px] h-[45px] mr-2"
              src={ISO}
              alt="iso certification"
            />
            <div className="m-4">
              <div>ISO 9001 : 2015</div>
              <div>NO : KY - 26269</div>
            </div>
            <div className="m-2">
              <div>ISO 14001 : 2015</div>
              <div>NO : CY - 32757</div>
            </div>
            <div className="m-2">
              <div>ISO 10002 : 2014</div>
              <div>NO : MM - 70430</div>
            </div>
            <div className="m-2">
              <div>ISO 18001 : 2007</div>
              <div>NO : OH - 52286</div>
            </div>
          </div>
        </div>
      </div>
      <p className="w-[80%] xl:w-[95%] xl:max-w-[1100px] text-center text-white text-sm leading-6 z-30 pt-8">
        {t("copyright")}
      </p>
    </FooterBackground>
  );
}
