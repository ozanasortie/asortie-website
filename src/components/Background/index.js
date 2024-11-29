"use client"
import React from "react";
import useIsSafari from "../../hooks/useIsSafari";
const BackgroundSection = ({
  children,
  className = "",
  background,
  bgOpacity,
}) => {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover  bg-center relative py-4 lg:py-8 flex flex-col items-center justify-center text-white backdrop-blur-md ${
        !isSafari ? "bg-fixed" : ""
      }
       ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {bgOpacity && (
        <div className="absolute left-0 top-0 w-full h-full bg-opacity-50 bg-black" />
      )}
      {children}
    </div>
  );
};

export default BackgroundSection;
