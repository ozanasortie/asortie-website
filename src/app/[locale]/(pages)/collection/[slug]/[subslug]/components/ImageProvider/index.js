"use client";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import ImageModal from "./ImageModal";
import ImageSliders from "./ImageSliders";

function ImageProvider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log("current", currentImageIndex);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    onOpen();
  };

  return (
    <>
      <ImageSliders
        currentImageIndex={currentImageIndex}
        images={images}
        handleImageClick={handleImageClick}
      />
      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        currentImageIndex={currentImageIndex}
        images={images}
      />
    </>
  );
}

export default ImageProvider;
