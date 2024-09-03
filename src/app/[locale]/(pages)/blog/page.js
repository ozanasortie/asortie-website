import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import BannerSection from "./components/BannerSection";
import Loading from "@/components/Loading";

import { fetchBlogs } from "@services/blogService";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Blog";
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

  const blogs = await fetchBlogs(locale);

  if (!blogs) return <Loading />;

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white`}
    >
      <BannerSection />
      <BlogsHeader />
      <BlogList blogs={blogs} />
    </div>
  );
}
