"use client";
import { useTranslations } from "next-intl";
import { InstagramEmbed } from "react-social-media-embed";

import BannerSection from "./components/BannerSection";
import AboutUs from "./components/AboutUs";
import NewProducts from "./components/NewProducts";
import Blogs from "./components/Blogs";
import News from "./components/News";
import StoreSection from "./components/StoreSection";
import Collections from "./components/Collections";
import PromotionSection from "./components/PromotionSection";
import CatalogueFormSection from "./components/CatalogueFormSection";

export default function Index({ props }) {
  const t = useTranslations("Index");

  return (
    <div className="overflow-x-hidden">
      <BannerSection />
      <NewProducts />
      <PromotionSection />
      <Collections />
      <AboutUs />
      <News />
      <StoreSection />
      <Blogs />
      <CatalogueFormSection />
      <div className="flex justify-center py-4 lg:hidden">
        <InstagramEmbed
          url="https://www.instagram.com/asortiemobilya/"
          width={"80%"}
        />
      </div>
    </div>
  );
}
