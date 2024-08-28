import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import RecommendedSlider from "./RecommendedSlider";

export default function BannerSection({ onClick }) {
  return (
    <div className="relative flex flex-1 max-lg:flex-col w-full box-border bg-background-color overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <RecommendedSlider />
    </div>
  );
}
