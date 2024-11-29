import Transition from "@/components/Transition";
import ListBlog from "../../components/ListBlog";
import SliderProvider from "@/components/Slider";
import { slugify } from "@/utils";

function RecommendedNews({ t, data }) {
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
      <div className="z-30 flex flex-col items-center mt-12 lg:w-[85%] max-w-[1400px]">
        <Transition
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 80 },
          }}
          className="max-w-[95%] text-black font-light text-center lg:text-5xl xl:text-5xl mb-5 lg:mb-10"
        >
          <h1 className="text-3xl text-center lg:text-start lg:text-4xl my-4 lg:mb-2">
            {t("ilginizi_cekebilecek_haberlerimiz")}
          </h1>
        </Transition>
        <div className="w-full max-md:hidden grid gap-4 grid-cols-3">
          {data?.data?.map((item) => {
            return (
              <ListBlog
                image={item.resim}
                imageBaseUrl={data?.image_url}
                title={item.baslik}
                description={item.ozet}
                href={"/news/" + slugify(item.baslik, item.id)}
              />
            );
          })}
        </div>
      </div>

      <SliderProvider
        className="z-30 w-full md:hidden overflow-hidden"
        settings={settings}
      >
        {data?.data?.map((item) => {
          return (
            <div className="w-full flex items-center justify-center">
              <ListBlog
                width="w-[95%]"
                image={item.resim}
                imageBaseUrl={data?.image_url}
                title={item.baslik}
                description={item.ozet}
                href={"/news/" + item.id}
              />
            </div>
          );
        })}
      </SliderProvider>
    </>
  );
}

export default RecommendedNews;
