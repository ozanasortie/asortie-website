"use client";
import { useTranslations } from "next-intl";

import BannerSection from "./components/BannerSection";
import AboutUs from "./components/AboutUs";
import NewProducts from "./components/NewProducts";
import Blogs from "./components/Blogs";
import StoreSection from "./components/StoreSection";
import Collections from "./components/Collections";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <div className="overflow-x-hidden">
      <BannerSection />
      <NewProducts />
      <Collections />
      <AboutUs />
      <Blogs />
      <StoreSection />
      {/* <ScrollPage>
          <Animator animation={FadeUp} className="w-full">
            <Animator animation={batch(DelayedFade(4))}>
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
                DelayedFade(3),
                Move(0, 200, 0, -200)
              )}
            >
              OLİMPOS YATAK ODASI
            </Animator>
            <Animator
              className="text-center text-lg"
              animation={batch(StickyIn(50, 25), DelayedFade(3), MoveIn())}
            >
              Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini
              geleceğin mirasıyla buluşturuyoruz. Her parçamız, geleceğin
              antikası olmaya aday benzersiz bir sanat eseri.
            </Animator>
            <Animator
              className="text-center underline text-lg"
              animation={batch(StickyIn(50, 90), DelayedFade(3), MoveIn())}
            >
              Daha Fazlasını Gör
            </Animator>
          </Animator>
        </ScrollPage> */}
    </div>
  );
}
