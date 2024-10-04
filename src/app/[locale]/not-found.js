import BackgroundSection from "@/components/Background";
import Background from "@assets/background.webp";
import { AlertCircleIcon } from "hugeicons-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return {
    title: "404 - Sayfa Bulunamadı",
    description: "Aradığınız sayfa bulunamadı.",
    robots: "noindex",
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations("Header");

  return (
    <BackgroundSection
      background={Background.src}
      className="flex justify-center items-center h-screen text-white"
    >
      <h1 className="text-6xl lg:text-8xl font-bold">404</h1>
      <h2 className="flex justify-center items-center text-3xl lg:text-4xl font-normal mt-5">
        <AlertCircleIcon size={50} className="mr-4" /> Sayfa Bulunamadı
      </h2>
      <h3 className="text-2xl mt-5">
        Ulaşmak istediğiniz bağlantı geçersiz veya yayından kaldırılmış.
      </h3>
    </BackgroundSection>
  );
}
