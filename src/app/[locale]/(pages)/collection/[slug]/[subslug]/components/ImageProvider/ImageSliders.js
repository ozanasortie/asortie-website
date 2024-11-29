import { useState, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";

import SliderProvider from "@/components/Slider";
import VerticalPagination from "./VerticalPagination";
import "./images.css";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Search01Icon,
} from "hugeicons-react";

function ImageSliders({ images, video, handleImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  const formattedImages = images.map((image) =>
    typeof image === "string" ? { resim: image } : image
  );

  const sliderImages = video
    ? [{ resim: video }, ...formattedImages]
    : formattedImages;

  const sliderSettings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setActiveIndex(current);
    },
    nextArrow: sliderImages.length > 1 ? <FsNextArrow /> : false,
    prevArrow: sliderImages.length > 1 ? <FsPrevArrow /> : false,
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
        <Box className="relative" width={"100%"} height={"100%"}>
          <SliderProvider
            ref={sliderRef}
            className="w-[100%] z-40 h-full relative overflow-hidden"
            settings={sliderSettings}
          >
            {sliderImages.map((item, index) => (
              <Box key={index}>
                {item.resim && item.resim.includes(".mp4") ? (
                  <video
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    controls
                    muted
                    autoPlay
                    loop
                  >
                    <source src={item.resim} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    width={1920}
                    height={1080}
                    className="w-full aspect-[16/9] object-cover"
                    src={item.resim}
                    alt={`Sample ${index}`}
                  />
                )}
              </Box>
            ))}
          </SliderProvider>
          <Box
            onClick={() => {
              videoRef.current.pause();
              handleImageClick(activeIndex);
            }}
            className="absolute right-2 top-2 bg-white p-2 lg:p-3 group cursor-pointer z-40"
          >
            <Search01Icon size={22} className="group-hover:scale-110 motion-safe:transition" />
          </Box>
        </Box>

        {sliderImages.length > 1 ? (
          <VerticalPagination
            images={sliderImages}
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
      className={`absolute top-1/2 h-full flex justify-center items-center right-0 transform -translate-y-1/2 p-2 z-50 cursor-pointer motion-safe:transition group`}
      onClick={onClick}
    >
      <div className="bg-black opacity-0 group-hover:opacity-10 absolute left-0 top-0 w-full h-[99%] motion-safe:transition" />
      <ArrowRight01Icon
        className="z-30 group-hover:scale-110"
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
        "absolute top-1/2 left-0 h-full flex justify-center items-center transform -translate-y-1/2 p-2 z-50 cursor-pointer motion-safe:transition group"
      }
      onClick={onClick}
    >
      <div className="bg-black opacity-0 group-hover:opacity-10 absolute left-0 top-0 w-full h-[99%] motion-safe:transition" />
      <ArrowLeft01Icon
        color="white"
        className="z-30 group-hover:scale-110"
        size={45}
      />
    </div>
  );
}

export default ImageSliders;
