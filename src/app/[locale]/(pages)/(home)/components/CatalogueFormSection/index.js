import { motion } from "framer-motion";
import useIsSafari from "@/hooks/useIsSafari";
import Input from "@components/Input";
import Button from "@/components/Button";

import FormBackground from "@/assets/form-background.png";

export default function CatalogueFormSection() {
  const isSafari = useIsSafari();

  return (
    <div
      className={`bg-cover bg-center relative lg:h-[70vh] p-10 py-20 flex flex-col lg:flex-row items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${FormBackground.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-20" />
      <motion.div
        transition={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 90 },
        }}
        className="flex items-center justify-center lg:mt-10 mb-10 z-30"
      >
        <span className="text-4xl lg:text-6xl text-center font-light">
          KATALOG TALEP EDİN
        </span>
      </motion.div>
      <motion.div
        transition={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 90 },
        }}
        className="w-full lg:w-[40%] z-30 flex flex-col items-center"
      >
        <i className="mb-5 text-center">
          "Özenle tasarlanmış klasik mobilyalarımızla yaşam alanlarınıza zarafet
          katmak için, katalog talep formumuzu doldurarak geniş ürün yelpazemizi
          keşfedin."
        </i>
        <Input
          borderColor="white"
          color="white"
          placeholder="Ad Soyad"
          className="mb-5"
        />
        <Input
          borderColor="white"
          color="white"
          placeholder="E-Mail"
          className="mb-5"
        />
        <Input
          borderColor="white"
          color="white"
          placeholder="Phone"
          className="mb-5"
        />
        <Button
          background="black"
          className="w-full flex items-center justify-center py-4"
          text={"TALEP ET"}
        />
      </motion.div>
    </div>
  );
}
