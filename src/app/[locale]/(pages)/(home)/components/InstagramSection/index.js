"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramSection = () => {
  return (
    <div className="flex justify-center py-4 lg:hidden">
      <InstagramEmbed
        url="https://www.instagram.com/asortiemobilya/"
        width={"95%"}
      />
    </div>
  );
};

export default InstagramSection;
