import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import BannerSection from "./components/BannerSection";

import { fetchFeaturedBlogs } from "@services/blogService";
import HiddenHeader from "@/components/HiddenHeader";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("");

  const pageTitle = "Asortie | " + t("blog");
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
  const t = await getTranslations("");
  const { locale } = params;

  const featureds = await fetchFeaturedBlogs(locale);

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
