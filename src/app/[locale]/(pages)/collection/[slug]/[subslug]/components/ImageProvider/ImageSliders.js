import { useState, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import YouTube from "react-youtube";

import SliderProvider from "@/components/Slider";
import Transition from "@/components/Transition";
import VerticalPagination from "./VerticalPagination";
import Button from "@/components/Button";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  ArrowRight03Icon,
  ArrowRight04Icon,
  ArrowRight05Icon,
  Search01Icon,
} from "hugeicons-react";

function ImageSliders({ images, handleImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  console.log("images", images.length);

  const sliderSettings = {
    infinite: true,
    fade: true,
    centerPadding: "20px",
    speed: 500,
    slidesToShow: 1,
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
        direction={"column"}
        justifyContent={"space-between"}
        className="w-full lg:w-[52%]"
        height="100%"
      >
        <Box width={"100%"}>
          <SliderProvider
            ref={sliderRef}
            className="w-full z-40"
            settings={sliderSettings}
          >
            {images.map((item, index) => (
              <Box key={index}>
                <Image
                  width={300}
                  height={100}
                  className="w-full aspect-[16/9]"
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
      className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 z-50 cursor-pointer hover:scale-110 motion-safe:transition`}
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
        "absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-500 p-2 z-50 cursor-pointer hover:scale-110 motion-safe:transition"
      }
      onClick={onClick}
    >
      <ArrowLeft01Icon color="white" size={45} />
    </div>
  );
}

export default ImageSliders;
