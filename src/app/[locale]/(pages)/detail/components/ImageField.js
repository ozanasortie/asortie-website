import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import YouTube from "react-youtube";
import Slider from "react-slick";

import SampleBanner from "@assets/bosna.jpg";
import Image from "next/image";

function ImageField() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const sliderSettings = {
    initialSlide: currentImageIndex,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "17px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fullScreenSettings = {
    initialSlide: currentImageIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FsNextArrow />,
    prevArrow: <FsPrevArrow />,
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    onOpen();
  };

  return (
    <>
      <div className="hidden lg:block w-[59%] h-full z-40">
        {[...Array(4)].map((_, index) => (
          <Box key={index} mb={5} className="cursor-zoom-in">
            <Image
              src={SampleBanner}
              alt={`Sample ${index}`}
              onClick={() => handleImageClick(index)}
            />
          </Box>
        ))}
        <Box mb={5}>
          <YouTube opts={opts} videoId="uuaGUPkfs_Y" />
        </Box>
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
        <Slider className="z-30 w-full overflow-hidden" {...sliderSettings}>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="box-border px-2 flex items-center justify-center overflow-hidden w-[96%] h-full relative"
            >
              <Image
                className="w-full h-full object-cover"
                src={SampleBanner}
                onClick={() => handleImageClick(index)}
                alt={`Sample ${index}`}
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="backdrop-blur-sm" />
        <ModalContent borderRadius={0} background={"white"} maxW={"92rem"}>
          <ModalCloseButton
            className="z-30 mt-4 mr-4"
            size={40}
            color={"white"}
          />
          <ModalBody className="!p-0">
            <Slider className="overflow-hidden" {...fullScreenSettings}>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="box-border flex items-center justify-center overflow-hidden outline-none"
                >
                  <Image
                    src={SampleBanner}
                    alt={`Sample ${index}`}
                    className="w-[100%] h-full object-cover"
                  />
                  <div className="pt-3 pr-3 w-full text-end">
                    {index + 1 + " / " + [...Array(4)].length}
                  </div>
                </div>
              ))}
            </Slider>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function FsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute top-[40%] bg-red-950 left-12 z-50"}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function FsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default ImageField;
