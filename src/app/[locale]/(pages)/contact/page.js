import { fetchCustomerService } from "@/app/store/services/generalService";
import FormField from "./FormField";
import MapField from "./MapField";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("");
  const pageTitle = t("bize_ulasin") + " | " + "Asortie";

  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
    },
  };
}

export default async function Page({ params }) {
  const { locale } = params;

  const customerService = await fetchCustomerService(locale);
  const t = await getTranslations("");

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around pb-10">
      <FormField whatsappNumbers={customerService} />
      <MapField t={t} />
    </div>
  );
}
