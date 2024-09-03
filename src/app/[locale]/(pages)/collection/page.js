import BackgroundSection from "@/components/Background";
import CollectionHeader from "./components/CollectionHeader";
import ListWrapper from "./components/ListWrapper";

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

export default function Collection() {
  return (
    <BackgroundSection
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white pb-5`}
      background={
        "https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"
      }
    >
      <CollectionHeader />
      <ListWrapper />
    </BackgroundSection>
  );
}
