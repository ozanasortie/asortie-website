import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import BannerSection from "./components/BannerSection";
import Loading from "@/components/Loading";

import { fetchNews } from "@services/newsService";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Haberler";
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

  const news = await fetchNews(locale);

  if (!news) return <Loading />;

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white`}
    >
      <BannerSection />
      <BlogsHeader />
      <BlogList blogs={news} />
    </div>
  );
}
