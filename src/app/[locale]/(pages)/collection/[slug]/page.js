import { fetchProducts } from "@services/categoriesService";

import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import Loading from "@/components/Loading";
import BackgroundSection from "@/components/Background";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Ürün Listesi";
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
      <ProductsHeader data={data?.data[0]} />
      <ProductList slug={params.slug} products={data?.data} />
      <div
        className="max-w-[1400px] text-start w-full mt-10 text-white z-30"
        dangerouslySetInnerHTML={{ __html: data?.data[0].urun_detayi }}
      />
    </BackgroundSection>
  );
}
