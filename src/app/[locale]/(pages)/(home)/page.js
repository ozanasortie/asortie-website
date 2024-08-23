"use client";
import { useTranslations } from "next-intl";
import { InstagramEmbed } from "react-social-media-embed";

import {
  useGetNewProductsQuery,
  useGetBlogsQuery,
  useGetNewsQuery,
} from "@slices/homeServices";

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
  const { data: newProducts, isLoading: isLoadingNewProducts } =
    useGetNewProductsQuery();
  const { data: news, isLoading: isLoadingNews } = useGetNewsQuery();

  if (isLoadingNewProducts || isLoadingNews) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-hidden">
      <BannerSection />
      <NewProducts products={newProducts} />
      <PromotionSection />
      <Collections />
      <AboutUs />
      <News news={news.data} />
      <StoreSection />
      <Blogs />
      <CatalogueFormSection />
      <div className="flex justify-center py-4 lg:hidden">
        <InstagramEmbed
          url="https://www.instagram.com/asortiemobilya/"
          width={"95%"}
        />
      </div>
    </div>
  );
}
