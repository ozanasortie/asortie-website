import { fetchFeaturedNews } from "@/app/store/services/newsService";
import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import HiddenHeader from "@/components/HiddenHeader";
import BannerSection from "./components/BannerSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("");

  const pageTitle = "Asortie | " + t("haberler");
  const pageDescription = "";
  const pageImage = "";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
  };
}

export default async function Blog({ params }) {
  const { locale } = params;

  const featureds = await fetchFeaturedNews(locale);
  const t = await getTranslations("");

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white`}
    >
      <HiddenHeader />
      <BlogsHeader t={t} />
      <BannerSection featureds={featureds} />
      <BlogList />
    </div>
  );
}
