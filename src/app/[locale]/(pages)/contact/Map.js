"use client";
import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const libraries = ["places", "drawing", "geometry"];

export default function Map() {
  // const containerStyle = {
  //   width: "100%",
  //   height: "500px",
  //   borderRadius: "20px",
  //   zIndex: 40,
  // };

  // const center = {
  //   lat: 41.065395,
  //   lng: 28.790913,
  // };

  // const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  //   libraries: libraries,
  // });

  // if (loadError) return <p>Encountered error while loading Google Maps</p>;

  // if (!scriptLoaded) return <p>Map script is loading...</p>;

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.163698451567!2d28.78829917617406!3d41.06541427134255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa59547719c0b%3A0x86b9eb27a8cff0df!2sAsortie%20Mobilya%20-%20Klasik%20%26%20Luxury%20Mobilya%20ve%20Dekorasyon!5e0!3m2!1str!2str!4v1729000464308!5m2!1str!2str"
      width="100%"
      height="500px"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
