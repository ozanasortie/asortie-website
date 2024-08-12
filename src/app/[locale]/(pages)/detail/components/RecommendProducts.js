import ListProduct from "@components/ListProduct";
import Slider from "react-slick";

import SampleBanner from "@assets/olimpos-min.jpg";
import SampleBanner2 from "@assets/bosna.jpg";
import SampleBanner3 from "@assets/defne.jpg";

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
        <h1 className="text-white font-light text-3xl text-center lg:text-5xl xl:text-5xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)] mb-10">
          İLGİNİZİ ÇEKEBİLECEK MODELLERİMİZ
        </h1>
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
