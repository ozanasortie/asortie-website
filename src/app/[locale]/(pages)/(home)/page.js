import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { fetchBlogs, fetchNewProducts, fetchNews } from "@services/homeServices";
import Loading from "@components/Loading";

const BannerSection = dynamic(() => import("./components/BannerSection"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const NewProducts = dynamic(() => import("./components/NewProducts"));
const Blogs = dynamic(() => import("./components/Blogs"));
const News = dynamic(() => import("./components/News"));
const StoreSection = dynamic(() => import("./components/StoreSection"));
const Collections = dynamic(() => import("./components/Collections"));
const PromotionSection = dynamic(() => import("./components/PromotionSection"));
const CatalogueFormSection = dynamic(() => import("./components/CatalogueFormSection"));
const FeaturesSection = dynamic(() => import("./components/FeaturesSection"));
const InstagramSection = dynamic(() => import("@components/InstagramSection"));

export default async function Index({ params }) {
  const { locale } = params;
  const t = await getTranslations("");
  
  const [newProducts, news, blogs] = await Promise.all([
    fetchNewProducts(locale),
    fetchNews(locale),
    fetchBlogs(locale),
  ]);
  
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
