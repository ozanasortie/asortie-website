"use client";
import StoreField from "./StoreField";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import DigitalCatalogueForm from "../../components/DigitalCatalogueForm";

export default function BannerSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex flex-1 max-lg:flex-col w-full box-border bg-background-color overflow-hidden">
      <StoreField onOpen={onOpen} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full absolute bottom-10 flex justify-center"
      >
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="max-md:hidden"
        >
          <ChevronDownIcon
            color="white"
            boxSize={16}
            onClick={scrollToNextSection}
            cursor="pointer"
          />
        </motion.div>
      </motion.div>

      <DigitalCatalogueForm isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
