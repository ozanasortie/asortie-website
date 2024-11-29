import SliderProvider from "@components/Slider";
import ListProduct from "@components/ListProduct";

import Transition from "@/components/Transition";
import { slugify } from "@/utils";

function RecommendedProducts({ t, data }) {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="max-w-[1500px] 2xl:max-w-[1700px] z-30 flex flex-col items-center lg:mt-4 w-[90%] px-4">
        <Transition
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 80 },
          }}
          className="text-black font-light text-3xl text-center lg:text-5xl xl:text-5xl mb-6"
        >
          <h1 className="text-3xl text-center lg:text-start lg:text-4xl my-4">
            {t("ilginizi_cekebilecek_modeller")}
          </h1>
        </Transition>
        <div className="w-full hidden md:grid gap-4 grid-cols-3 place-items-start">
          {data.data?.map((item) => {
            return (
              <ListProduct
                secondVariant
                key={item.id}
                image={item.resim}
                title={item.urun_adi}
                href={
                  "/collection/" +
                  item.slug +
                  "/" +
                  slugify(item.urun_adi, item.id)
                }
              />
            );
          })}
        </div>
      </div>

      <SliderProvider
        className="z-30 w-full md:hidden overflow-hidden"
        settings={settings}
      >
        {data.data?.map((item) => {
          return (
            <div className="w-full flex items-center justify-center">
              <ListProduct
                width="w-[95%]"
                secondVariant
                key={item.id}
                image={item.resim}
                title={item.urun_adi}
                href={
                  "/collection/" +
                  item.slug +
                  "/" +
                  slugify(item.urun_adi, item.id)
                }
              />
            </div>
          );
        })}
      </SliderProvider>
    </>
  );
}

export default RecommendedProducts;
