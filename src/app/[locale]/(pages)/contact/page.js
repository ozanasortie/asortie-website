import { fetchCustomerService } from "@/app/store/services/generalService";
import FormField from "./FormField";
import MapField from "./MapField";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Bize Ulaşın";

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

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around pb-10">
      <FormField whatsappNumbers={customerService} />
      <MapField />
    </div>
  );
}
