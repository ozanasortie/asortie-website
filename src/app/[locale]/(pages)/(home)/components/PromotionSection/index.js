import Image from "next/image";
import { motion } from "framer-motion";

import useIsSafari from "@hooks/useIsSafari";

import Arma from "@/assets/16arma.png";
import Background from "@assets/background.webp";

export default function PRomotionSection() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center relative py-4 lg:py-8 flex flex-col items-center justify-center text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <div className="flex flex-col w-full z-30">
        <div className="w-full flex flex-col lg:flex-row px-14 items-center justify-center lg:justify-start lg:items-center">
          <motion.div
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-col items-start text-center lg:text-start lg:ml-10"
          >
            <Image src={Arma} className="w-[140px] lg:w-[220px]" />
          </motion.div>
          <motion.div
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="w-full lg:w-fit flex flex-col items-start lg:ml-24"
          >
            <h1 className="text-2xl mt-5 mb-5 text-center lg:hidden max-lg:block">
              SİZİN İÇİN, SİZİNLE BİRLİKTE...
            </h1>

            <h1 className="w-full text-4xl xl:text-4xl mt-3 mb-5 text-start max-lg:hidden">
              SİZİN İÇİN, SİZİNLE BİRLİKTE...
            </h1>
            <p className="mb-5 lg:text-lg text-center lg:text-start !w-full lg:w-[45vw]">
              Asortie, mobilya ve dekorasyon adına, kendinizi mutlu
              hissedeceğiniz olağanüstü tasarımlara imza atıyor. 1965 yılından
              bugüne gelişen engin bir tecrübenin ürünü ile müşterilerine hizmet
              sağlayan Asortie, kendine özgü çizgisi ile günün moda anlayışına
              paralel olarak dizayn edilmiş fark edilebilen ürünler tasarlıyor.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
