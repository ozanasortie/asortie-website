import HiddenHeader from "@/components/HiddenHeader";
import Transition from "@/components/Transition";
import ContactForm from "./ContactForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("");
  const pageTitle = t("mimarlik_hizmeti") + " | " + "Asortie";

  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
    },
  };
}

export default async function Page() {
  const t = await getTranslations("");

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around pt-44 pb-10">
      <HiddenHeader />
      <h1 className="text-4xl lg:text-4xl">{t("mimarlik_hizmeti")}</h1>
      <div className="max-w-[1400px] flex flex-col lg:flex-row justify-center lg:mt-14 px-4">
        <Transition className="w-full px-4 mt-10 lg:mb-5 lg:mt-0 lg:w-[49%] lg:mr-5">
          <h1 className="text-3xl">{t("mimarlik_alt_baslik")}</h1>
          <p className="mt-4 text-lg">{t("mimarlik_tanitim")}</p>

          <h2 className="text-2xl mt-4">{t("hizmetlerimiz")}</h2>
          <li className="mt-2 text-lg">{t("mimarlik_hizmet_1")}</li>
          <li className="mt-2 text-lg">{t("mimarlik_hizmet_2")}</li>
          <li className="mt-2 text-lg">{t("mimarlik_hizmet_3")}</li>
          <li className="mt-2 text-lg">{t("mimarlik_hizmet_4")}</li>
        </Transition>
        <ContactForm />
      </div>
    </div>
  );
}
