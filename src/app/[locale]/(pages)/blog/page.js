import BlogList from "./components/BlogList";
import BlogsHeader from "./components/BlogsHeader";
import BannerSection from "./components/BannerSection";
import Loading from "@/components/Loading";

import { fetchBlogs } from "@services/blogService";

export default async function Blog({ params }) {
  // const isSafari = useIsSafari();
  const { locale, slug } = params;

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
