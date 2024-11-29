import { notFound } from "next/navigation";
import {
  fetchBlogDetail,
  fetchMostReadedBlogs,
  fetchRecommendedBlogs,
} from "@services/blogService";
import BlogItem from "./components/BlogItem";
import HiddenHeader from "@components/HiddenHeader.js";
import RecommendedBlogs from "./components/RecommendedBlogs";
import Loading from "@components/Loading";
import Transition from "@components/Transition";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const id = slug.split("-").pop();
  const blog = await fetchBlogDetail({ slug: id, lang: locale });
  const t = await getTranslations("");

  if (!blog || blog.data.length === 0) {
    return {
      title: "404 - " + t("sayfa_bulunamadi"),
    };
  }

  const pageTitle = blog?.data[0]?.baslik || "";
  const pageDescription = blog?.data[0]?.ozet || "";
  const pageImage = blog?.image_url + blog?.data[0]?.resim;

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

async function Page({ params }) {
  const { locale, slug } = params;
  const id = slug.split("-").pop();
  const blog = await fetchBlogDetail({ slug: id, lang: locale });

  if (!blog || blog.data.length === 0) {
    return notFound();
  }

  const mostReadeds = await fetchMostReadedBlogs(locale);
  const recommendedBlogs = await fetchRecommendedBlogs(locale);
  const t = await getTranslations("");

  const baseUrl = "https://www.asortie.com";

  const updateImageSrc = (htmlContent) => {
    return htmlContent.replace(/<img\s+[^>]*src="([^"]+)"/g, (match, src) => {
      if (!src.startsWith("http") && !src.startsWith("https")) {
        return match.replace(src, baseUrl + src);
      }
      return match;
    });
  };

  const updatedContent = updateImageSrc(blog.data[0].icerik || "");

  if (!mostReadeds || !recommendedBlogs) return <Loading />;

  return (
    <div className="w-full pt-36 lg:pt-44 pb-10 bg-cover min-h-full bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white">
      <HiddenHeader />
      <div className="w-full max-w-[1500px] 2xl:max-w-[1700px] flex justify-around px-page">
        <div className="w-[100%] flex flex-col items-center text-center">
          <Transition
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            className="w-[80%]"
          >
            <h1 className="z-10 text-2xl lg:text-3xl w-[100%] leading-normal text-black mb-4 uppercase">
              {blog.data[0].baslik}
            </h1>
          </Transition>

          <Transition
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="lg:w-[90%] mb-6"
          >
            <i className="z-10 w-[100%] leading-relaxed text-gray-600">
              {blog.data[0].ozet}
            </i>
          </Transition>

          <Transition
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="w-[95%] lg:w-[90%] mb-6"
          >
            <img
              width={300}
              height={300}
              className="w-[100%] aspect-[16/9] object-cover rounded-md"
              src={blog.image_url + blog.data[0].resim}
              alt={blog.data[0].baslik}
            />
          </Transition>

          <div className="w-[95%] lg:w-[90%] flex justify-between">
            <div
              className="text-start w-full lg:w-[72%] text-gray-800"
              dangerouslySetInnerHTML={{ __html: updatedContent }}
            />
            <div className="w-[25%] max-w-[400px] max-xl:hidden h-fit flex items-center flex-col bg-white text-black">
              {mostReadeds.data.map((item) => (
                <BlogItem
                  key={item.id}
                  imageBaseUrl={mostReadeds.image_url}
                  image={item.resim}
                  item={item}
                  href={`/blog/${item.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <RecommendedBlogs t={t} data={recommendedBlogs} />
    </div>
  );
}

export default Page;
