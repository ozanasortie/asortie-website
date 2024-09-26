import HiddenHeader from "@/components/HiddenHeader";
import Transition from "@/components/Transition";
import ContactForm from "./ContactForm";

export async function generateMetadata({ params }) {
  const pageTitle = "Asortie | Mimar Desteği";

  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
    },
  };
}

export default async function Page({ params }) {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around pt-36 pb-10">
      <HiddenHeader />
      <h1 className="text-4xl lg:text-5xl">MİMARLIK HİZMETİ</h1>
      <div className="max-w-[1400px] flex flex-col lg:flex-row justify-center lg:mt-14 px-4">
        <Transition className="w-full px-4 mt-10 lg:mb-5 lg:mt-0 lg:w-[49%] lg:mr-5">
          <h1 className="text-3xl">
            Mimarlık Hizmetlerimizle Mekânlarınıza Estetik Katın!
          </h1>
          <p className="mt-4 text-lg">
            Hayalinizdeki iç mekânı yaratmak için buradayız! İç mimarlık
            hizmetlerimiz, her türlü mekânı estetik ve işlevsellik açısından en
            iyi şekilde tasarlamak üzere tasarlanmıştır. Uzman ekibimiz, müşteri
            ihtiyaçlarını dikkate alarak kişiye özel çözümler sunar.
          </p>

          <h2 className="text-2xl mt-4">Hizmetlerimiz</h2>
          <li className="mt-2 text-lg">
            Tasarım Danışmanlığı: Projelerinizin başlangıcından itibaren
            profesyonel danışmanlık.
          </li>
          <li className="mt-2 text-lg">
            Kapsamlı İç Mekân Tasarımı: Evinizden ofisinize kadar her mekân için
            özgün tasarım çözümleri.
          </li>
          <li className="mt-2 text-lg">
            Mobilya Seçimi ve Düzenleme: Mekânınıza en uygun mobilya ve
            dekorasyon önerileri.
          </li>
          <li className="mt-2 mb-8 text-lg">
            Uygulama ve Proje Yönetimi: Tasarımın hayata geçirilmesi sürecinde
            sürekli destek ve izleme.
          </li>
        </Transition>
        <ContactForm/>
      </div>
    </div>
  );
}
