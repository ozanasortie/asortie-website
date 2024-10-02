import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import VerticalArrow from "@assets/icons/vertical-arrow.png";
import Slider from "react-slick";
import Image from "next/image";

const VerticalPagination = ({ images, activeIndex, onThumbnailClick }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: images.length < 4 ? images.length : 4,
    slidesToScroll: images.length < 4 ? images.length : 4,
    centerMode: false,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    // vertical: true,
    // verticalSwiping: true,
    nextArrow: images.length > 4 ? <FsNextArrow /> : false,
    prevArrow: images.length > 4 ? <FsPrevArrow /> : false,
  };

  return (
    <div className="flex w-full absolute -bottom-5 justify-center items-center">
      {images.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer transition-all duration-300 mx-1 ${
            index === activeIndex
              ? "bg-black w-3 h-3 rounded-full"
              : "border border-black w-3 h-3 rounded-full"
          }`}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </div>
  );
};

function FsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute bottom-[20px] right-2   p-2 z-50 cursor-pointer hover:scale-110 motion-safe:transition`}
      onClick={onClick}
    >
      <Image src={VerticalArrow} width={45} />
    </div>
  );
}

function FsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute bottom-[20px] left-2 -rotate-180 bg-green-500 p-2 z-50 cursor-pointer hover:scale-110 motion-safe:transition"
      }
      onClick={onClick}
    >
      <Image src={VerticalArrow} width={45} />
    </div>
  );
}

export default VerticalPagination;
