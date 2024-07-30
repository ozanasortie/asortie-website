import { LinkBox } from "@chakra-ui/react";
import Image from "next/image";
import Sample from "@assets/sample.jpg";

export default function CategoryItem() {
  return (
    <LinkBox className="overflow-hidden cursor-pointer relative m-2 group- hover:text-theme-color motion-safe:transition ">
      <div className="overflow-hidden group-hover:text-theme-color">
        <Image
          src={Sample}
          className="motion-safe:transition hover:scale-110 group-hover:text-theme-color"
          alt="Category"
        />
      </div>
      <div className="z-20 text-white text-md w-full text-center py-1 group-hover:text-theme-color">
        Klasik Koltuk Takımları
      </div>
    </LinkBox>
  );
}
