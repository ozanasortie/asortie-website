import Slider from "@components/Slider";
import ListProduct from "@components/ListProduct";

import SampleBanner from "@assets/olimpos-min.jpg";
import SampleBanner2 from "@assets/bosna.jpg";
import SampleBanner3 from "@assets/defne.jpg";
import Transition from "@/components/Transition";

function RecommendedProducts({ data }) {
  const settings = {
    centerMode: true,
    centerPadding: "20px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="z-30 flex flex-col items-center mt-8 w-[85%]">
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
          <h1 className="text-3xl text-center lg:text-start lg:text-5xl my-4 uppercase">
            İLGİNİZİ ÇEKEBİLECEK MODELLER
          </h1>
        </Transition>
        <div className="w-full hidden lg:grid gap-4 grid-cols-3 px-4">
          {data.data?.map((item) => {
            return (
              <ListProduct
                key={item.id}
                image={item.resim}
                title={item.urun_adi}
                href={"/collection/" + item.slug + "/" + item.id}
              />
            );
          })}
        </div>
      </div>

      <Slider className="z-30 w-full md:hidden overflow-hidden" {...settings}>
        {data.data?.map((item) => {
          return (
            <ListProduct
              key={item.id}
              image={item.resim}
              title={item.urun_adi}
              href={"/collection/" + item.slug + "/" + item.id}
            />
          );
        })}
      </Slider>
    </>
  );
}

export default RecommendedProducts;
