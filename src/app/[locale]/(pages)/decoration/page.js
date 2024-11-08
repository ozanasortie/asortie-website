import BackgroundSection from "@/components/Background";
import CollectionHeader from "./components/CollectionHeader";
import ListWrapper from "./components/ListWrapper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Koleksiyon";
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
      background={
        "https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"
      }
    >
      <CollectionHeader t={t} />
      <ListWrapper />
    </BackgroundSection>
  );
}
