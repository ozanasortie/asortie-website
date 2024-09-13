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

export default async function Index({ params }) {
  const { locale } = params;

  const newProducts = await fetchNewProducts(locale);
  const news = await fetchNews(locale);
  const blogs = await fetchBlogs(locale);

  if (!newProducts || !news) return <Loading />;

  return (
    <div className="overflow-hidden">
      <BannerSection />
      <NewProducts products={newProducts} />
      <PromotionSection />
      <Collections />
      <AboutUs />
      <News news={news} />
      <StoreSection />
      <Blogs blogs={blogs} />
      <CatalogueFormSection />
      <FeaturesSection />
      {/* <InstagramSection /> */}
    </div>
  );
}
