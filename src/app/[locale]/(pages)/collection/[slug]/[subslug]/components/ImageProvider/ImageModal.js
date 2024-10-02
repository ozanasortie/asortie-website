import { useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

import SliderProvider from "@/components/Slider";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

export default function ImageModal({
  currentImageIndex,
  images,
  isOpen,
  onClose,
}) {
  const fullVideoRef = useRef(null);
  console.log("imqgae", images);

  const fullScreenSettings = {
    initialSlide: currentImageIndex,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      if (fullVideoRef.current) {
        fullVideoRef.current.pause();
      }
    },
    nextArrow: <FsNextArrow />,
    prevArrow: <FsPrevArrow />,
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="backdrop-blur-sm" />
      <ModalContent borderRadius={0} background={"transparent"} maxW={"75rem"}>
        <ModalCloseButton
          className="z-30 mt-4 mr-4"
          size={40}
          color={"white"}
        />
        <ModalBody className="!p-0">
          {images.length > 1 ? (
            <SliderProvider
              key={currentImageIndex}
              className="overflow-hidden"
              settings={fullScreenSettings}
            >
              {images.map((item, index) => (
                <Box
                  key={index}
                  className="box-border flex items-center justify-center overflow-hidden outline-none"
                >
                  {item.resim && item.resim.includes(".mp4") && (
                    <video
                      ref={fullVideoRef}
                      width="100%"
                      height="100%"
                      controls
                      autoPlay
                      loop
                    >
                      <source src={item.resim} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {item.resim && !item.resim.includes(".mp4") && (
                    <Image
                      width={1920}
                      height={1080}
                      className="w-full aspect-[16/9] object-cover"
                      src={item.resim}
                      alt={`Product ${index}`}
                    />
                  )}
                  <div className="pt-2 pr-3 w-full text-end text-white">
                    {index + 1 + " / " + images.length}
                  </div>
                </Box>
              ))}
            </SliderProvider>
          ) : (
            <>
              {images.map((item, index) => (
                <div
                  key={index}
                  className="w-full box-border flex flex-col items-center justify-center overflow-hidden outline-none"
                >
                  {item.resim && item.resim.includes(".mp4") && (
                    <video
                      ref={fullVideoRef}
                      width="100%"
                      height="100%"
                      controls
                      autoPlay
                      loop
                    >
                      <source src={item.resim} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {item.resim && !item.resim.includes(".mp4") && (
                    <Image
                      width={1920}
                      height={1080}
                      className="w-full aspect-[16/9] object-cover"
                      src={item.resim}
                      alt={`Product ${index}`}
                    />
                  )}
                  <div className="pt-2 pb-2 pr-3 w-full text-end text-white">
                    {index + 1 + " / " + images.length}
                  </div>
                </div>
              ))}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
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
