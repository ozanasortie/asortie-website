"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "drawing", "geometry"];

export default function Map() {
  const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "20px",
    zIndex: 40,
  };

  const center = {
    lat: 41.065395,
    lng: 28.790913,
  };

  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: libraries,
  });

  if (loadError) return <p>Encountered error while loading Google Maps</p>;

  if (!scriptLoaded) return <p>Map script is loading...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  );
}
