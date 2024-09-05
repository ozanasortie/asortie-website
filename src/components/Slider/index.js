"use client";
import React, { forwardRef } from "react";
import Slider from "react-slick";

// Ref'i ileriye doğru iletmek için forwardRef kullanın
const SliderProvider = forwardRef(
  ({ key, children, className, settings, afterChange }, ref) => {
    return (
      <Slider
        ref={ref}
        key={key}
        afterChange={afterChange}
        className={className}
        {...settings}
      >
        {children}
      </Slider>
    );
  }
);

export default SliderProvider;
