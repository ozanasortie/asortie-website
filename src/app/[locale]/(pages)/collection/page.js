"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import useIsSafari from "@/hooks/useIsSafari";
import CollectionHeader from "./components/CollectionHeader";
import CollectionList from "./components/CollectionList";

export default function Collection() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2021/01/luxury-sfondo-ok.jpg"})`,
      }}
    >
      <CollectionHeader />
      <CollectionList />
    </div>
  );
}
