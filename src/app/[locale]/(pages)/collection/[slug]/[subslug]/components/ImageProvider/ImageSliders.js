import { useState, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import SliderProvider from "@/components/Slider";
import VerticalPagination from "./VerticalPagination";
import "./images.css";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Search01Icon,
} from "hugeicons-react";

function ImageSliders({ images, handleImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
    nextArrow: images.length > 1 ? <FsNextArrow /> : false,
    prevArrow: images.length > 1 ? <FsPrevArrow /> : false,
  };

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        className="w-full lg:w-[75%] relative"
        height="100%"
      >
        <Box width={"100%"} height={"100%"}>
          <SliderProvider
            ref={sliderRef}
            className="w-[100%] z-40 h-full overflow-hidden"
            settings={sliderSettings}
          >
            {images.map((item, index) => (
              <Box key={index}>
                <Image
                  width={1920}
                  height={1080}
                  className="w-full aspect-[16/9] object-cover"
                  src={item.resim}
                  alt={`Sample ${index}`}
                />
                <Box
                  className="absolute right-2 top-2 bg-white p-3 group cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <Search01Icon className="group-hover:scale-110 motion-safe:transition" />
                </Box>
              </Box>
            ))}
          </SliderProvider>
        </Box>

        {images.length > 1 ? (
          <VerticalPagination
            images={images}
            activeIndex={activeIndex}
            onThumbnailClick={handleThumbnailClick}
          />
        ) : null}
      </Flex>
    </>
  );
}

function FsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 h-full flex justify-center items-center opacity-50 right-0 transform -translate-y-1/2 p-2 z-50 cursor-pointer hover:scale-110 motion-safe:transition gradient-arrow-left`}
      onClick={onClick}
    >
      <ArrowRight01Icon
        className="hgi-stroke hgi-arrow-right-01"
        color="white"
        size={45}
      />
    </div>
  );
}

function FsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 left-0 h-full flex justify-center items-center hover:bg-black opacity-50 transform -translate-y-1/2 bg-green-500 p-2 z-50 cursor-pointer hover:scale-110 motion-safe:transition gradient-arrow-left"
      }
      onClick={onClick}
    >
      <ArrowLeft01Icon color="white" size={45} />
    </div>
  );
}

export default ImageSliders;
