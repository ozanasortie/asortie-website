import { motion } from "framer-motion";

import { usePostContactMutation } from "@slices/homeServices";
import useIsSafari from "@/hooks/useIsSafari";
import Input from "@components/Input";
import Button from "@/components/Button";

import FormBackground from "@/assets/form-background.png";

export default function CatalogueFormSection() {
  const isSafari = useIsSafari();
  const [postContact] = usePostContactMutation();

  const handleSubmit = async () => {
    const formData = {
      name: "Ozan",
      email: "ozanodak",
      tel: "05390049090",
      message: "Deneme",
      ulke_kodu: "+90",
      dil: "tr_",
    };

    console.log("formdata", formData);
    console.log("Stringified formData", JSON.stringify(formData));

    try {
      const response = await postContact(formData).unwrap();
      console.log("Form successfully submitted:", response);
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div
      className={`bg-cover bg-center relative p-10 py-20 flex flex-col lg:flex-row items-center lg:justify-around text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${FormBackground.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-55 z-20" />
      <motion.div
        transition={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 90 },
        }}
        className="w-full lg:w-[40%] z-30 mb-14 lg:mb-0 flex flex-col items-center"
      >
        <i className="mb-5 text-center">
          "Özenle tasarlanmış klasik mobilyalarımızla yaşam alanlarınıza zarafet
          katmak için, katalog talep formumuzu doldurarak geniş ürün yelpazemizi
          keşfedin."
        </i>
        <Button
          background="white"
          color="black"
          className="w-[90%] flex items-center justify-center py-4"
          text={"DİJİTAL KATALOG TALEP ET"}
          onClick={() => handleSubmit()}
        />
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
            BİZE ULAŞIN
          </span>
        </motion.div>
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
          background="white"
          color="black"
          className="w-full flex items-center justify-center py-4"
          text={"KATALOG GÖNDER"}
        />
      </motion.div>
    </div>
  );
}
