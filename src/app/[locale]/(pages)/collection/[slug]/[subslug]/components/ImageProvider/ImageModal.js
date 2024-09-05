import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
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
  const fullScreenSettings = {
    initialSlide: currentImageIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FsNextArrow />,
    prevArrow: <FsPrevArrow />,
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="backdrop-blur-sm" />
      <ModalContent borderRadius={0} background={"white"} maxW={"92rem"}>
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
                <div
                  key={index}
                  className="box-border flex items-center justify-center overflow-hidden outline-none"
                >
                  <Image
                    width={300}
                    height={100}
                    src={item.resim}
                    alt={`Sample ${index}`}
                    className="w-[100%] h-full object-cover"
                  />
                  <div className="pt-3 pr-3 w-full text-end">
                    {index + 1 + " / " + images.length}
                  </div>
                </div>
              ))}
            </SliderProvider>
          ) : (
            <>
              {images.map((item, index) => (
                <div
                  key={index}
                  className="w-full box-border flex flex-col items-center justify-center overflow-hidden outline-none"
                >
                  <Image
                    width={300}
                    height={100}
                    src={item.resim}
                    alt={`Sample ${index}`}
                    className="w-[100%] h-full object-cover"
                  />
                  <div className="pt-3 pb-2 pr-3 w-full text-end">
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
