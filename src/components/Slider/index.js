"use client";
import Slider from "react-slick";

export default function SliderProvider({
  key,
  children,
  className,
  settings,
  afterChange,
}) {
  return (
    <Slider
      key={key}
      afterChange={afterChange}
      className={className}
      {...settings}
    >
      {children}
    </Slider>
  );
}
