"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";

import BannerSection from "./components/BannerSection";
import AboutUs from "./components/AboutUs";
import NewProducts from "./components/NewProducts";
import Blogs from "./components/Blogs";
import News from "./components/News";
import StoreSection from "./components/StoreSection";
import Collections from "./components/Collections";
import PromotionSection from "./components/PromotionSection";
import CatalogueFormSection from "./components/CatalogueFormSection";

export default function Index() {
  const t = useTranslations("Index");
  const newProductsRef = useRef(null);

  const scrollToNewProducts = () => {
    console.log("new p", newProductsRef.current);
    if (newProductsRef.current) {
      newProductsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <BannerSection onClick={scrollToNewProducts} />
      <NewProducts ref={newProductsRef} />
      <Collections />
      <AboutUs />
      <Blogs />
      <PromotionSection />
      <StoreSection />
      <News />
      <CatalogueFormSection />
      {/* <ScrollPage>
        <Animator animation={FadeIn()} className="w-full">
          <Animator animation={batch(FadeIn())}>
            <Image
              src={SampleBanner}
              alt="Furniture Product"
              className="w-[100vw] h-[100vh] object-cover"
            />
          </Animator>
          <Animator
            className="text-center w-full max-lg:text-3xl text-[4rem] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]"
            animation={batch(
              StickyIn(50, 80),
              FadeIn(),
              Move(0, 200, 0, -200)
            )}
          >
            OLİMPOS YATAK ODASI
          </Animator>
          <Animator
            className="text-center text-lg"
            animation={batch(StickyIn(50, 25), FadeIn(), MoveIn())}
          >
            Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini
            geleceğin mirasıyla buluşturuyoruz. Her parçamız, geleceğin
            antikası olmaya aday benzersiz bir sanat eseri.
          </Animator>
          <Animator
            className="text-center underline text-lg"
            animation={batch(StickyIn(50, 90), FadeIn(), MoveIn())}
          >
            Daha Fazlasını Gör
          </Animator>
        </Animator>
      </ScrollPage> */}
    </div>
  );
}
