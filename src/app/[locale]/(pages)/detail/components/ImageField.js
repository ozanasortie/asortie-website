import { motion } from "framer-motion";
import Image from "next/image";
import YouTube from "react-youtube";
import Slider from "react-slick";

import SampleBanner from "@assets/bosna.jpg";

function ImageField() {
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

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
      <div className="hidden lg:block w-[59%] h-full z-40">
        <div className="mb-5">
          <Image src={SampleBanner} />
        </div>
        <div className="mb-5">
          <Image src={SampleBanner} />
        </div>
        <div className="mb-5">
          <Image src={SampleBanner} />
        </div>
        <div className="mb-5">
          <Image src={SampleBanner} />
        </div>
        <div className="mb-5">
          <YouTube opts={opts} videoId="uuaGUPkfs_Y" />
        </div>
      </div>
      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="lg:hidden w-full flex items-center justify-center z-30"
      >
        <Slider className="z-30 w-full" {...settings}>
          <div className="box-border p-2 flex items-center justify-center overflow-hidden w-[97%] h-full relative">
            <Image className="w-full h-full object-cover" src={SampleBanner} />
          </div>
          <div className="box-border p-2 flex items-center justify-center overflow-hidden w-[97%] h-full relative">
            <Image className="w-full h-full object-cover" src={SampleBanner} />
          </div>
          <div className="box-border p-2 flex items-center justify-center overflow-hidden w-[97%] h-full relative">
            <Image className="w-full h-full object-cover" src={SampleBanner} />
          </div>
          <div className="box-border p-2 flex items-center justify-center overflow-hidden w-[97%] h-full relative">
            <Image className="w-full h-full object-cover" src={SampleBanner} />
          </div>
        </Slider>
      </motion.div>
    </>
  );
}

export default ImageField;
