import BackgroundSection from "@/components/Background";
import CollectionHeader from "./components/CollectionHeader";
import ListWrapper from "./components/ListWrapper";
import { getTranslations } from "next-intl/server";
import CollectionBackground from "@/assets/koleksiyon.png";

export async function generateMetadata() {
  const t = await getTranslations("");
  const pageTitle = t("koleksiyon") + " | " + "Asortie";
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

export default async function Collection() {
  const t = await getTranslations("");

  return (
    <BackgroundSection
      bgOpacity
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white pb-5`}
      background={CollectionBackground.src}
    >
      <CollectionHeader t={t} />
      <ListWrapper />
    </BackgroundSection>
  );
}
