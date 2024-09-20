import { LinkBox } from "@chakra-ui/react";
import Image from "next/image";
import Sample from "@assets/sample.jpg";
import Sample2 from "@assets/sample-2.jpg";

export default function ResultItem({ name }) {
  return (
    <LinkBox
      className={`box-border w-auto mb-5 mx-2 cursor-pointer relative bg-cover overflow-hidden flex flex-col items-center justify-center group`}
    >
      <div className="overflow-hidden w-[100%] h-full relative">
        <Image
          src={Sample}
          alt="Slider Furniture Product"
          className="w-full h-full aspect-[16/9] object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="mt-2 text-0 w-full text-2xl relative">
        <h2 className="motion-safe:transition group-hover:text-theme-color">
          {name}
        </h2>
      </div>
    </LinkBox>
  );
}
