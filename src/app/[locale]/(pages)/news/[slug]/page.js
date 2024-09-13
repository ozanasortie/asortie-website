import {
  fetchMostReadedNews,
  fetchNewDetail,
  fetchRecommendedNews,
} from "@services/newsService";

import NewsItem from "./components/NewsItem";
import RecommendedNews from "./components/RecommendedNews";
import Loading from "@components/Loading";
import HiddenHeader from "@/components/HiddenHeader";
import Transition from "@components/Transition";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const newDetail = await fetchNewDetail({ slug, lang: locale });

  const pageTitle = newDetail?.data[0]?.baslik || "Blog Page";
  const pageDescription = newDetail?.data[0]?.ozet || "Default description";
  const pageImage = newDetail?.image_url + newDetail?.data[0]?.resim;

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
  const newDetail = await fetchNewDetail({ slug, lang: locale });
  const mostReadeds = await fetchMostReadedNews(locale);
  const recommendedNews = await fetchRecommendedNews(locale);

  if (!newDetail) return <Loading />;

  return (
    <div className="w-full pt-48 pb-10 bg-cover min-h-full bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white">
      <HiddenHeader />
      <div className="w-full max-w-[1600px] flex justify-around px-4">
        <div className="w-2/6 max-xl:hidden h-fit flex items-center flex-col bg-white text-black">
          {mostReadeds.data.map((item) => (
            <NewsItem
              key={item.id}
              imageBaseUrl={mostReadeds.image_url}
              image={item.resim}
              item={item}
              href={`/news/${item.id}`}
            />
          ))}
        </div>
        <div className="w-[100%] flex flex-col items-center text-center">
          <Transition
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            className="w-[95%]"
          >
            <h1 className="z-10 text-5xl w-[100%] leading-normal text-black mb-4 uppercase">
              {newDetail.data[0].baslik}
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
              {newDetail.data[0].ozet}
            </i>
          </Transition>
          {/* 
          <Transition
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="w-[70%] mb-6"
          >
            <Image
              width={300}
              height={300}
              className="w-[70%] aspect-[4/3] object-cover"
              src={newDetail.image_url + newDetail.data[0]?.resim}
              alt={newDetail.data[0].baslik}
            />
          </Transition> */}

          <div
            className="text-start w-[80%] text-gray-800"
            dangerouslySetInnerHTML={{ __html: newDetail.data[0]?.icerik }}
          />
        </div>
      </div>
      <RecommendedNews data={recommendedNews} />
    </div>
  );
}

export default Page;
