import { LinkBox } from "@chakra-ui/react";
import Image from "next/image";
import Sample from "@assets/sample.jpg";
import Sample2 from "@assets/sample-2.jpg";

export default function ResultItem() {
  const imageUrl = Sample.src;
  const imageUrl2 = Sample2.src;

  return (
    <LinkBox
      className="w-80 h-52 cursor-pointer relative m-2 bg-cover transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundImage = `url(${imageUrl2})`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundImage = `url(${imageUrl})`)
      }
    >
      <div className="absolute text-white text-lg xl:text-xl bg-black bg-opacity-80 w-full text-center py-1.5 bottom-0 left-0">
        Story Yemek Klasik Yemek Takımı
      </div>
    </LinkBox>
  );
}
