import { fetchProducts } from "@services/categoriesService";

import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import Loading from "@/components/Loading";
import BackgroundSection from "@/components/Background";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;

  const t = await getTranslations("");
  const data = await fetchProducts({
    slug,
    lang: locale,
  });

  if (!data || data.data.length === 0) {
    return {
      title: "404 - " + t("sayfa_bulunamadi"),
    };
  }

  const pageTitle = data?.kategori + " | Asortie";
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

export default async function Products({ params }) {
  const { locale, slug } = params;

  const data = await fetchProducts({
    slug,
    lang: locale,
  });

  if (!data || data.data.length === 0) {
    return notFound();
  }
  console.log("DEKO")

  if (!data) return <Loading />;

  return (
    <BackgroundSection
      bgOpacity
      className="bg-cover bg-[#1d1d1b] bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white pb-5"
      background={`${
        data?.data[0]?.kategori_resim_arkaplan
          ? data?.data[0]?.image_url + data?.data[0]?.kategori_resim_arkaplan
          : "https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"
      }`}
    >
      <ProductsHeader data={data} />
      <ProductList slug={params.slug} products={data?.data} />
      <div
        className="max-w-[1500px] 2xl:max-w-[1700px] text-start w-full mt-10 text-white z-30 px-4"
        dangerouslySetInnerHTML={{ __html: data?.data[0].urun_detayi }}
      />
    </BackgroundSection>
  );
}
