import React from "react";
import { motion } from "framer-motion";
import useIsSafari from "@/hooks/useIsSafari";
import FormBackground from "@/assets/featured-background.jpeg";

const FeaturesSection = () => {
  const isSafari = useIsSafari();

  return (
    <section className="bg-gray-100 py-16 max-lg:hidden">
      <div className="container mx-auto px-6">
        <motion.div
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
        </motion.div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className={`min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray ${
                isSafari ? "" : "bg-fixed"
              }`}
              style={{
                backgroundImage: `url(${FormBackground.src})`,
              }}
            >
              <h3 className="text-2xl text-black mb-4 uppercase">
                EN TREND MODELLER
              </h3>
              <p className="text-black">
                Günün şartlarına göre yenilenen mobilya ve dekorasyon
                modellerimiz ile en prestijli ve konforlu koleksiyonları
                taşarlıyoruz.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className={`min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray ${
                isSafari ? "" : "bg-fixed"
              }`}
              style={{
                backgroundImage: `url(${FormBackground.src})`,
              }}
            >
              <h3 className="text-2xl text-black mb-4 uppercase">
                Geleneksel Tecrübe
              </h3>
              <p className="text-black">
                Tasarım, üretim ve satış süreçlerini 1965’li yıllardan itibaren
                oluşan tecrübemiz ve işinin ehli bir ekip ile profesyonel
                şekilde yapıyoruz.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className={`min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray ${
                isSafari ? "" : "bg-fixed"
              }`}
              style={{
                backgroundImage: `url(${FormBackground.src})`,
              }}
            >
              <h3 className="text-2xl text-black mb-4 uppercase">
                Mimari Destek
              </h3>
              <p className="text-black">
                Tüm mobilya seçim ve sipariş sürecinde mimarlarımızdan destek
                alabilir siparişten önce mobilyanızı 3 boyutlu olarak
                projelendirebilirsiniz.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className={`min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray ${
                isSafari ? "" : "bg-fixed"
              }`}
              style={{
                backgroundImage: `url(${FormBackground.src})`,
              }}
            >
              <h3 className="text-2xl text-black mb-4 uppercase">
                Satış Sonrası Destek
              </h3>
              <p className="text-black">
                Satışı son halka olarak görmüyor, satış sonrasında da aynı
                özveri ve hizmet politikasıyla çalışıyor, karşılaşabileceğiniz
                problemlerde her zaman yanınızda oluyoruz.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className={`min-h-[200px] bg-white bg-no-repeat bg-center bg-cover  p-6 rounded-lg shadow-lg border border-gray ${
                isSafari ? "" : "bg-fixed"
              }`}
              style={{
                backgroundImage: `url(${FormBackground.src})`,
              }}
            >
              <h3 className="text-2xl text-black mb-4 uppercase">
                El İşçiliği ve Doğal Ahşap
              </h3>
              <p className="text-black">
                Tüm mobilya tasarım ve üretim sürecinde, doğal ahşaplar ile el
                işçiliği kullanarak, oyma, boyama, nakış ve döşeme sanatının
                incelikleri ile her zaman değerli kalabilen, geleceğin
                antikalarını üretiyoruz.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className={`min-h-[200px] bg-white bg-no-repeat bg-center bg-cover p-6 rounded-lg shadow-lg border border-gray ${
                isSafari ? "" : "bg-fixed"
              }`}
              style={{
                backgroundImage: `url(${FormBackground.src})`,
              }}
            >
              {" "}
              <h3 className="text-2xl text-black mb-4 uppercase">
                Tüm Dünyaya Teslimat
              </h3>
              <p className="text-black">
                Mobilyalarımızı dünyanın birçok yerine sorunsuz bir şekilde
                gönderebiliyoruz. Özellikle Avrupa, Orta Asya, Afrika ve
                Ortadoğu ülkelerinin birçoğunda montaj hizmeti de verebiliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
