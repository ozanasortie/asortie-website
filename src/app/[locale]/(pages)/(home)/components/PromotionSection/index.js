import BackgroundSample from "@assets/background.webp";
import Transition from "@/components/Transition";
import BackgroundSection from "@components/Background";

export default function PromotionSection({ t }) {
  return (
    <BackgroundSection
      background={BackgroundSample.src}
      className="bg-cover bg-center relative py-4 lg:py-8 flex flex-col items-center justify-center text-white"
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <div className="flex flex-col w-full z-30 max-w-[1000px] xl:max-w-[1500px] 2xl:max-w-[1700px] px-4 lg:px-page">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-center">
          <Transition
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-col items-start text-center lg:text-start lg:ml-10"
          >
            <img alt="Arma" src={"/assets/16arma.png"} className="w-[140px] lg:w-[220px]" />
          </Transition>
          <Transition
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="w-full lg:w-fit flex flex-col items-start lg:ml-24"
          >
            <h1 className="w-full text-2xl mt-5 mb-5 text-center lg:hidden max-lg:block">
              {t("tanitim_baslik")}
            </h1>

            <h1 className="w-full text-4xl xl:text-4xl mt-3 mb-5 text-start max-lg:hidden">
              {t("tanitim_baslik")}
            </h1>
            <p className="mb-5 lg:text-lg text-center lg:text-start !w-full lg:w-[45vw]">
             {t('tanitim_icerik')}
            </p>
          </Transition>
        </div>
      </div>
    </BackgroundSection>
  );
}
