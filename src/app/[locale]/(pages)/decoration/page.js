import BackgroundSection from "@/components/Background";
import CollectionHeader from "./components/CollectionHeader";
import ListWrapper from "./components/ListWrapper";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Dekorasyon";
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

export default function Decoration() {
  return (
    <BackgroundSection
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white pb-5`}
      background={
        "https://www.cappellettisrl.com/wp-content/uploads/2021/01/charme-sfondo-ok.jpg"
      }
    >
      <div className="absolute left-0 top-0 bg-black opacity-20 w-full h-full"/>
      <CollectionHeader />
      <ListWrapper />
    </BackgroundSection>
  );
}
