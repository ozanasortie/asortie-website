import Store from "@/assets/store.png";
import BackgroundSection from "@/components/Background";
import Transition from "@/components/Transition";

const StoreSection = ({ t }) => {
  return (
    <BackgroundSection
      background={Store.src}
      className="w-full bg-cover bg-center relative h-[50vh] p-10 flex flex-col items-center justify-center text-white"
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <Transition
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="z-30 text-2xl text-center text-white"
      >
        <h1 className="text-3xl text-center lg:text-start lg:text-5xl my-4 mb-5 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
          {t("anasayfa_magaza_baslik")}
        </h1>
      </Transition>
      <Transition
        transition={{ duration: 0.8, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="z-30 text-xl lg:text-2xl text-center text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]"
      >
        {t("anasayfa_magaza_icerik")}
      </Transition>
      <a
        href="https://cdn.mekan360.com/sanaltur_isletme/turkey/istanbul/basaksehir/basaksehir_istanbul_asortie_mobilya/basaksehir_istanbul_asortie_mobilya.html"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer mt-10 bg-[rgba(0,0,0,0.5)] text-white border-2 border-white rounded-md p-3 lg:p-4 z-30 text-sm lg:text-lg text-center hover:text-theme-color motion-safe:transition hover:scale-105 duration-500"
      >
        {t("anasayfa_magaza_buton")}
      </a>
    </BackgroundSection>
  );
};

export default StoreSection;
