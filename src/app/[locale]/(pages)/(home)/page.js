"use client";
import { useTranslations, useLocale } from "next-intl";
import { InstagramEmbed } from "react-social-media-embed";
import { useDisclosure } from "@chakra-ui/react";

import {
  useGetNewProductsQuery,
  useGetBlogsQuery,
  useGetNewsQuery,
} from "@services/homeServices";

import BannerSection from "./components/BannerSection";
import AboutUs from "./components/AboutUs";
import NewProducts from "./components/NewProducts";
import Blogs from "./components/Blogs";
import News from "./components/News";
import StoreSection from "./components/StoreSection";
import Collections from "./components/Collections";
import PromotionSection from "./components/PromotionSection";
import CatalogueFormSection from "./components/CatalogueFormSection";
import DigitalCatalogueForm from "./components/DigitalCatalogueForm";
import FeaturesSection from "./components/FeaturesSection";
import Loading from "@/components/Loading";

export default function Index() {
  const locale = useLocale();
  const { data: newProducts, isLoading: isLoadingNewProducts } =
    useGetNewProductsQuery(locale);
  const { data: news, isLoading: isLoadingNews } = useGetNewsQuery(locale);
  const { data: blogs, isLoading: isLoadingBlogs } = useGetBlogsQuery(locale);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoadingNewProducts || isLoadingNews) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-hidden">
      <BannerSection onOpen={onOpen} />
      <NewProducts products={newProducts} />
      <PromotionSection />
      <Collections />
      <AboutUs />
      <News news={news} />
      <StoreSection />
      <Blogs blogs={blogs} />
      <CatalogueFormSection onDigitalOpen={onOpen} />
      <DigitalCatalogueForm isOpen={isOpen} onClose={onClose} />
      <FeaturesSection />
      <div className="flex justify-center py-4 lg:hidden">
        <InstagramEmbed
          url="https://www.instagram.com/asortiemobilya/"
          width={"95%"}
        />
      </div>
    </div>
  );
}
