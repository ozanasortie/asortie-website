"use client";
import { useLocale, useTranslations } from "next-intl";
import { useGetProductsQuery } from "@services/categoriesService";

import useIsSafari from "@/hooks/useIsSafari";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import Loading from "@/components/Loading";

export default function Products({ params }) {
  const t = useTranslations("Header");
  const locale = useLocale();
  const isSafari = useIsSafari();

  const { data, isLoading } = useGetProductsQuery({
    slug: params.slug,
    lang: locale,
  });

  if (isLoading) return <Loading />;

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white pb-5 ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"})`,
      }}
    >
      <ProductsHeader data={data?.data[0]} />
      <ProductList slug={params.slug} products={data?.data} />
    </div>
  );
}
