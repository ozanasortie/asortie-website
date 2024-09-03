import InformationField from "./components/InformationField";
import DetailHeader from "./components/DetailHeader";
import RecommendedProducts from "./components/RecommendProducts";

import { fetchProductDetail } from "@services/categoriesService";

import Transition from "@/components/Transition";
import Loading from "@/components/Loading";
import ImageProvider from "./components/ImageProvider";

export default async function ProductDetail({ params }) {
  const { locale, subslug } = params;
  const data = await fetchProductDetail({ slug: subslug, lang: locale });

  if (!data) return <Loading />;

  return (
    <Transition className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center text-black pb-16 lg:pb-32 overflow-x-hidden">
      <DetailHeader title={data.Urunler[0].urun_adi} />
      <Transition className="w-full bg-cover bg-center bg-no-repeat flex flex-col mt-7 lg:mt-0 lg:flex-row lg:justify-between text-black lg:p-5">
        <ImageProvider images={data.Resimler} />
        <div className="w-full">
          <div
            className="text-start w-[100%] px-6 text-gray-800 my-4"
            dangerouslySetInnerHTML={{ __html: data.Urunler[0].urun_detayi }}
          />
          <InformationField />
        </div>
      </Transition>
      <RecommendedProducts />
    </Transition>
  );
}
