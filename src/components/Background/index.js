"use client";
import React from "react";
import useIsSafari from "../../hooks/useIsSafari";
const BackgroundSection = ({ children, className = "", background }) => {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover  bg-center relative py-4 lg:py-8 flex flex-col items-center justify-center text-white backdrop-blur-md ${
        isSafari ? "" : "bg-fixed"
      } ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* <div className="absolute left-0 top-0 backdrop-blur-[2px] w-full h-full" /> */}
      {children}
    </div>
  );
};

export default BackgroundSection;
