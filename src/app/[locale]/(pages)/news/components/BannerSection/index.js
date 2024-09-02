import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import RecommendedSlider from "./RecommendedSlider";

export default function BannerSection({ onClick }) {
  return (
    <div className="relative flex flex-1 max-lg:flex-col w-full box-border overflow-hidden">
      <RecommendedSlider />
    </div>
  );
}
