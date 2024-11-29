import { AlertCircleIcon } from "hugeicons-react";
import { getTranslations } from "next-intl/server";
import "@/app/[locale]/globals.css";

export async function generateMetadata() {
  const t = await getTranslations("");

  return {
    title: "404 - " + t("sayfa_bulunamadi"),
    description: t("aradiginiz_sayfa_bulunamadi"),
    robots: "noindex",
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations("");

  return (
    <div className="w-[100vw] h-[75vh] lg:h-[100vh] relative flex justify-center items-center flex-col text-white">
      {/* <video
        src="/intro.mp4"
        muted
        loop
        autoPlay
        className="w-full h-full object-cover absolute left-0 top-0"
      /> */}

      <h1 title="404" className="text-6xl lg:text-8xl font-medium z-20">404</h1>
      <h2 className="flex justify-center items-center text-3xl font-normal mt-5 z-20">
        <AlertCircleIcon size={40} className="mr-4 z-20" />{" "}
        {t("sayfa_bulunamadi")}
      </h2>
      <h3 className="w-[90%] text-xl lg:text-xl mt-5 z-20 text-center">
        {t("baglanti_gecersiz")}
      </h3>
    </div>
  );
}
