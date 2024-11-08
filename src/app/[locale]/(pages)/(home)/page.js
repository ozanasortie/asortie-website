import {
  fetchBlogs,
  fetchNewProducts,
  fetchNews,
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
import FeaturesSection from "./components/FeaturesSection";
import Loading from "@components/Loading";
import InstagramSection from "@components/InstagramSection";
import { getTranslations } from "next-intl/server";

export default async function Index({ params }) {
  const { locale } = params;
  const t = await getTranslations("");
  
  const newProducts = await fetchNewProducts(locale);
  const news = await fetchNews(locale);
  const blogs = await fetchBlogs(locale);

  if (!newProducts || !news) return <Loading />;

  return (
    <div className="overflow-hidden">
      <BannerSection />
      <NewProducts t={t} products={newProducts} />
      <PromotionSection t={t} />
      <Collections />
      <AboutUs t={t} />
      <News t={t} news={news} />
      <StoreSection t={t} />
      <Blogs t={t} blogs={blogs} />
      <CatalogueFormSection />
      <FeaturesSection />
      <InstagramSection />
    </div>
  );
}
