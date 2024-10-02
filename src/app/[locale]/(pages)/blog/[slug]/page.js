import {
  fetchBlogDetail,
  fetchMostReadedBlogs,
  fetchRecommendedBlogs,
} from "@services/blogService";
import BlogItem from "./components/BlogItem";
import HiddenHeader from "@components/HiddenHeader.js";
import RecommendedBlogs from "./components/RecommendedBlogs";
import Loading from "@components/Loading";
import Image from "next/image";
import Transition from "@components/Transition";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const blog = await fetchBlogDetail({ slug, lang: locale });

  const pageTitle = blog?.data[0]?.baslik || "Blog Page";
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
  const blog = await fetchBlogDetail({ slug, lang: locale });
  const mostReadeds = await fetchMostReadedBlogs(locale);
  const recommendedBlogs = await fetchRecommendedBlogs(locale);

  if (!blog || !mostReadeds || !recommendedBlogs) return <Loading />;

  return (
    <div className="w-full pt-36 pb-10 bg-cover min-h-full bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white">
      <HiddenHeader />
      <div className="w-full max-w-[1600px] flex justify-around px-4">
        <div className="w-[100%] flex flex-col items-center text-center">
          <Transition
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            className="w-[80%]"
          >
            <h1 className="z-10 text-4xl w-[100%] leading-normal text-black mb-4 uppercase">
              {blog.data[0].baslik}
            </h1>
          </Transition>

          <Transition
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="lg:w-[80%] mb-6"
          >
            <i className="z-10 text-lg w-[100%] leading-relaxed text-gray-600">
              {blog.data[0].ozet}
            </i>
          </Transition>

          <Transition
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="w-[80%] mb-6"
          >
            <Image
              width={300}
              height={300}
              className="w-[100%] aspect-[16/9] object-cover rounded-md"
              src={blog.image_url + blog.data[0].resim}
              alt={blog.data[0].baslik}
            />
          </Transition>

          <div className="w-[80%] flex justify-between">
            <div
              className="text-start w-[72%] text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.data[0].icerik }}
            />
            <div className="w-[25%] max-w-[400px] max-xl:hidden h-fit flex items-center flex-col bg-white text-black">
              {/* <h1 className="w-full text-center text-3xl py-4">ÇOK OKUNANLAR</h1> */}
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
      <RecommendedBlogs data={recommendedBlogs} />
    </div>
  );
}

export default Page;
