import { Box } from "@chakra-ui/react";
import Image from "next/image";
import YouTube from "react-youtube";

import SliderProvider from "@/components/Slider";
import Transition from "@/components/Transition";

function ImageSliders({ images, handleImageClick }) {
  const sliderSettings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "20px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <>
      <SliderProvider className="hidden lg:block w-[50%] z-40">
        {images.map((item, index) => (
          <Box key={index} mb={5} className="cursor-zoom-in">
            <Image
              width={300}
              height={300}
              className="w-full"
              src={item.resim}
              alt={`Sample ${index}`}
              onClick={() => handleImageClick(index)}
            />
          </Box>
        ))}
        <Box mb={5}>
          <YouTube opts={opts} videoId="uuaGUPkfs_Y" />
        </Box>
      </SliderProvider>

      <Transition
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="lg:hidden w-full flex items-center justify-center z-30"
      >
        <SliderProvider
          className="z-30 overflow-hidden"
          settings={sliderSettings}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="box-border px-2 flex items-center justify-center overflow-hidden w-[97%] relative"
            >
              <Image
                width={100}
                height={50}
                className="w-[100%] object-cover"
                src={item.resim}
                onClick={() => handleImageClick(index)}
                alt={`Sample ${index}`}
              />
            </div>
          ))}
        </SliderProvider>
      </Transition>
    </>
  );
}

export default ImageSliders;
