"use client";
import { motion } from "framer-motion";
import { VolumeHighIcon, VolumeOffIcon } from "hugeicons-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import "@/app/[locale]/globals.css";

export default function StoreField() {
  const t = useTranslations("");
  const [isMuted, setIsMuted] = useState(true);
  const [width, setWidth] = useState(0);
  const toggleMute = () => setIsMuted(!isMuted);
  useEffect(() => {
    setWidth(window.innerWidth);

    function handleMouseMove(e) {
      const spansSlow = document.querySelectorAll(".spanSlow");
      const spansFast = document.querySelectorAll(".spanFast");
      const normalizedPosition = e.pageX / (width / 2) - 1;
      const speedSlow = 100 * normalizedPosition;
      const speedFast = 200 * normalizedPosition;

      spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
      });
    }

    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="overflow-hidden relative flex items-center justify-center flex-col group w-[100vw] h-[75vh] lg:h-[100vh] text-white"
    >
      {/* <video
        id="video"
        src="/intro.mp4"
        className="w-full h-full object-cover absolute left-0 top-0"
        autoPlay
        loop
        muted={isMuted}
      /> */}

      {/* <div class="wrap">
        <div class="line">
          <div class="text-left">
            <div class="content">
              <span class="spanSlow">GELECEĞİN ANTİKALARI</span>
            </div>
          </div>
          <div class="text-right">
            <div class="content">
              <span class="spanSlow">GELECEĞİN ANTİKALARI</span>
            </div>
          </div>
        </div>
      </div> */}

      <button
        onClick={toggleMute}
        className="flex justify-center items-center absolute z-30 text-white font-semibold p-3 lg:p-4 bg-black bg-opacity-50 rounded-lg bottom-10 right-4 lg:right-10"
      >
        {isMuted ? <VolumeOffIcon size={24} /> : <VolumeHighIcon size={24} />}
      </button>
    </motion.div>
  );
}
