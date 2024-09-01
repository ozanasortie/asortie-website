import Slider from "react-slick";
import { motion } from "framer-motion";

import ListBlog from "./../../components/ListBlog";

import SampleBanner from "@assets/olimpos-min.jpg";
import SampleBanner2 from "@assets/bosna.jpg";
import SampleBanner3 from "@assets/defne.jpg";

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
      <div className="z-30 flex flex-col items-center mt-12">
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 80 },
          }}
          className="text-black font-light text-center lg:text-5xl xl:text-5xl mb-10"
        >
          <h1 className="text-4xl text-center lg:text-start lg:text-5xl my-4 lg:mb-5 uppercase">
            İLGİNİZİ ÇEKEBİLECEK YAZILARIMIZ
          </h1>
        </motion.div>
        <div className="w-full max-md:hidden lg:grid gap-4 grid-cols-3 px-4">
          {data?.data?.map((item) => {
            return (
              <ListBlog
                image={item.resim}
                imageBaseUrl={data?.image_url}
                title={item.baslik}
                description={item.ozet}
                href={"/blog/" + item.id}
              />
            );
          })}
        </div>
      </div>

      <Slider className="z-30 w-full md:hidden overflow-hidden" {...settings}>
        {data?.data?.map((item) => {
          return (
            <ListBlog
              width="w-[97%]"
              image={item.resim}
              imageBaseUrl={data?.image_url}
              title={item.baslik}
              description={item.ozet}
              href={"/blog/" + item.id}
            />
          );
        })}
      </Slider>
    </>
  );
}

export default RecommendedProducts;
