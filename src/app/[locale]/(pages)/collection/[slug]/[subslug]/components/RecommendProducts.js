import Slider from "@components/Slider";
import ListProduct from "@components/ListProduct";

import SampleBanner from "@assets/olimpos-min.jpg";
import SampleBanner2 from "@assets/bosna.jpg";
import SampleBanner3 from "@assets/defne.jpg";
import Transition from "@/components/Transition";

function RecommendedProducts() {
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
      <div className="z-30 flex flex-col items-center mt-24">
        <Transition
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 80 },
          }}
          className="text-white font-light text-3xl text-center lg:text-5xl xl:text-5xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)] mb-10"
        >
          <h1 className="text-3xl text-center lg:text-start lg:text-6xl my-4 mb-5 uppercase">
            İLGİNİZİ ÇEKEBİLECEK MODELLERİMİZ
          </h1>
        </Transition>
        <div className="hidden lg:grid gap-4 grid-cols-3 px-4">
          <ListProduct
            image={SampleBanner}
            title={"Olimpos Klasik Yatak Takımı"}
            href={"/detail"}
          />
          <ListProduct
            image={SampleBanner3}
            title={"Defne Klasik Koltuk Takımı"}
            href={"/detail"}
          />
          <ListProduct
            image={SampleBanner2}
            title={"Bosna Klasik Koltuk Takımı"}
            href={"/detail"}
          />
        </div>
      </div>

      <Slider className="z-30 w-full md:hidden overflow-hidden" {...settings}>
        <ListProduct
          image={SampleBanner}
          title={"Olimpos Klasik Yatak Takımı"}
          href={"/detail"}
        />
        <ListProduct
          image={SampleBanner3}
          title={"Defne Klasik Koltuk Takımı"}
          href={"/detail"}
        />
        <ListProduct
          image={SampleBanner2}
          title={"Bosna Klasik Koltuk Takımı"}
          href={"/detail"}
        />
      </Slider>
    </>
  );
}

export default RecommendedProducts;
