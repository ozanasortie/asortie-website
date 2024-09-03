import React from "react";
import FormBackground from "@/assets/featured-background.jpeg";
import Transition from "@/components/Transition";
import {
  AiBeautifyIcon,
  CustomerService01Icon,
  EarthIcon,
  House01Icon,
  StartUp01Icon,
  Time01Icon,
} from "hugeicons-react";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 max-lg:hidden">
      <div className="container mx-auto px-6">
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full flex items-center justify-center my-10 z-30"
        >
          <span className="text-4xl lg:text-5xl text-center font-light">
            ASORTIE AYRICALIĞI
          </span>
        </Transition>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Transition
              background={FormBackground}
              className="flex min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray"
            >
              <div>
                <div className="flex items-center text-xl text-black mb-4 uppercase">
                  <StartUp01Icon boxSize={4} mr={2} mb={2} />
                  <h3 className="ml-2">En Trend Modeller</h3>
                </div>
                <p className="text-black">
                  Günün şartlarına göre yenilenen mobilya ve dekorasyon
                  modellerimiz ile en prestijli ve konforlu koleksiyonları
                  taşarlıyoruz.
                </p>
              </div>
            </Transition>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Transition
              background={FormBackground}
              className="min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray"
            >
              <div className="flex items-center text-xl text-black mb-4 uppercase">
                <Time01Icon boxSize={4} mr={2} mb={2} />
                <h3 className="ml-2">Geleneksel Tecrübe</h3>
              </div>
              <p className="text-black">
                Tasarım, üretim ve satış süreçlerini 1965’li yıllardan itibaren
                oluşan tecrübemiz ve işinin ehli bir ekip ile profesyonel
                şekilde yapıyoruz.
              </p>
            </Transition>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Transition
              background={FormBackground}
              className="min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray"
            >
              <div className="flex items-center text-xl text-black mb-4 uppercase">
                <House01Icon boxSize={4} mr={2} mb={2} />
                <h3 className="ml-2">Mimari Destek</h3>
              </div>
              <p className="text-black">
                Tüm mobilya seçim ve sipariş sürecinde mimarlarımızdan destek
                alabilir siparişten önce mobilyanızı 3 boyutlu olarak
                projelendirebilirsiniz.
              </p>
            </Transition>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Transition
              background={FormBackground}
              className="min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray"
            >
              <div className="flex items-center text-xl text-black mb-4 uppercase">
                <CustomerService01Icon size={24} />
                <h3 className="ml-2">Satış Sonrası Destek</h3>
              </div>
              <p className="text-black">
                Satışı son halka olarak görmüyor, satış sonrasında da aynı
                özveri ve hizmet politikasıyla çalışıyor, karşılaşabileceğiniz
                problemlerde her zaman yanınızda oluyoruz.
              </p>
            </Transition>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Transition
              background={FormBackground}
              className="min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray"
            >
              <div className="flex items-center text-xl text-black mb-4 uppercase">
                <AiBeautifyIcon size={24} />
                <h3 className="ml-2">El İşçiliği Ve Doğal Ahşap</h3>
              </div>
              <p className="text-black">
                Tüm mobilya tasarım ve üretim sürecinde, doğal ahşaplar ile el
                işçiliği kullanarak, oyma, boyama, nakış ve döşeme sanatının
                incelikleri ile her zaman değerli kalabilen, geleceğin
                antikalarını üretiyoruz.
              </p>
            </Transition>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Transition className="min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray">
              <div className="flex items-center text-xl text-black mb-4 uppercase">
                <EarthIcon size={24} />
                <h3 className="ml-2">Tüm Dünyaya Teslimat</h3>
              </div>
              <p className="text-black">
                Mobilyalarımızı dünyanın birçok yerine sorunsuz bir şekilde
                gönderebiliyoruz. Özellikle Avrupa, Orta Asya, Afrika ve
                Ortadoğu ülkelerinin birçoğunda montaj hizmeti de verebiliyoruz.
              </p>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
