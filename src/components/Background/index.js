"use client";
import React from "react";
import useIsSafari from "../../hooks/useIsSafari";
const BackgroundSection = ({ children, className = "", background }) => {
  console.log("BACGRKOUND", background);
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center relative py-4 lg:py-8 flex flex-col items-center justify-center text-white ${
        isSafari ? "" : "bg-fixed"
      } ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundSection;
