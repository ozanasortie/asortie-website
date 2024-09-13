import InformationField from "./components/InformationField";
import DetailHeader from "./components/DetailHeader";
import RecommendedProducts from "./components/RecommendProducts";

import {
  fetchFeaturedProducts,
  fetchProductDetail,
} from "@services/categoriesService";

import Transition from "@/components/Transition";
import Loading from "@/components/Loading";
import ImageProvider from "./components/ImageProvider";
import HiddenHeader from "@/components/HiddenHeader";
import ServiceField from "./components/ServiceField";

export async function generateMetadata({ params }) {
  const { locale, slug, subslug } = params;
  const data = await fetchProductDetail({ slug: subslug, lang: locale });

  const pageTitle = data.Urunler[0].seo_baslik;
  const pageDescription = data.Urunler[0].seo_aciklama;
  const pageKeywords = data.Urunler[0].seo_anaktar;
  const pageImage = data.Resimler[0].resim;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
  };
}

export default async function ProductDetail({ params }) {
  const { locale, subslug } = params;
  const data = await fetchProductDetail({ slug: subslug, lang: locale });

  const featuredProducts = await fetchFeaturedProducts(locale);

  if (!data) return <Loading />;

  return (
    <div className="w-full relative flex flex-col items-center pb-16 overflow-x-hidden pt-32">
      <HiddenHeader />
      <DetailHeader
        title={data.Urunler[0].urun_adi}
        description={
          "Zarafetin ve işlevselliğin mükemmel uyumunu yansıtan bu tasarım, her detayında estetiği ve konforu bir araya getiriyor."
        }
      />
      <Transition className="w-full bg-cover bg-center bg-no-repeat flex flex-col mt-7 lg:mt-0 lg:flex-row lg:justify-center text-black p-4">
        <ImageProvider images={data.Resimler} />
        <div className="w-full lg:w-[35%] flex flex-col-reverse lg:flex-col">
          <div
            className="lg:hidden text-start w-[100%] px-6 text-gray-800 my-4"
            dangerouslySetInnerHTML={{ __html: data.Urunler[0].urun_detayi }}
          />
          <InformationField title={data.Urunler[0].urun_adi} />
        </div>
      </Transition>

      <div
        className="hidden lg:block text-start w-[87%] px-6 text-gray-800 my-4"
        dangerouslySetInnerHTML={{ __html: data.Urunler[0].urun_detayi }}
      />
      <ServiceField data={data && data.Sabit && data.Sabit[0]} />
      <RecommendedProducts data={featuredProducts} />
    </div>
  );
}
