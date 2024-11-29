import BackgroundSection from "@/components/Background";
import CollectionHeader from "./components/CollectionHeader";
import ListWrapper from "./components/ListWrapper";
import { getTranslations } from "next-intl/server";
import DecorationBackground from "@assets/dekorasyon.png";

export async function generateMetadata() {
  const t = await getTranslations("");
  const pageTitle = t("dekorasyon") + " | " + "Asortie";
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

export default async function Decoration() {
  const t = await getTranslations("");

  return (
    <BackgroundSection
      bgOpacity
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white pb-5`}
      background={DecorationBackground.src}
    >
      <CollectionHeader t={t} />
      <ListWrapper />
    </BackgroundSection>
  );
}
