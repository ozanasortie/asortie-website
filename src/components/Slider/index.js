"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function SliderProvider({ children, className, settings }) {
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
}
