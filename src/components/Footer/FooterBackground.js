"use client";
import useIsSafari from "@/hooks/useIsSafari";
import Background from "@assets/montaj.jpg";

export default async function FooterBackground({ children }) {
  const isSafari = useIsSafari();
  return (
    <footer
      className={`bg-cover bg-center relative flex flex-col items-center w-full box-border overflow-hidden py-10 pb-10 lg:px-20 font-light ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      {children}
    </footer>
  );
}
