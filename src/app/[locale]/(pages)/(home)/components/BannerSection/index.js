import StoreField from "./StoreField";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function BannerSection({ onClick }) {
  return (
    <div className="relative flex flex-1 max-lg:flex-col w-full box-border bg-background-color overflow-hidden">
      <StoreField />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-50 w-full absolute bottom-10 flex justify-center"
      >
        <ChevronDownIcon onClick={onClick} color={"white"} boxSize={16} />
      </motion.div>
    </div>
  );
}
