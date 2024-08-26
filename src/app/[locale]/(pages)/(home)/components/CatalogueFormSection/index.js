import { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDisclosure } from "@chakra-ui/react";

import useIsSafari from "@/hooks/useIsSafari";
import Input from "@components/Input";
import Textarea from "@/components/Textarea";
import Button from "@components/Button";
import StatusModal from "@/components/StatusModal";

import { usePostContactMutation } from "@services/homeServices";

import FormBackground from "@/assets/form-background.png";

const validationSchema = Yup.object({
  name: Yup.string().required("Ad Soyad alanı gereklidir"),
  email: Yup.string()
    .email("Geçersiz email adresi")
    .required("Email alanı gereklidir"),
  tel: Yup.string()
    .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlar içermelidir")
    .min(10, "Telefon numarası en az 10 haneli olmalıdır")
    .max(15, "Telefon numarası en fazla 15 haneli olmalıdır")
    .required("Telefon is required"),
  message: Yup.string().required("Mesaj alanı gereklidir"),
});

export default function CatalogueFormSection() {
  const isSafari = useIsSafari();
  const [postContact] = usePostContactMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postContact(values).unwrap();
        console.log("Form successfully submitted:", response);
        onOpen();
      } catch (error) {
        console.error("Failed to submit form:", error);
      }
    },
  });

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
          onClick={() => formik.handleSubmit()}
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
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <Input
            name="name"
            borderColor="white"
            color="white"
            placeholder="Ad Soyad"
            className="mt-5"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name && formik.touched.name}
            errorText={formik.errors.name}
          />

          <Input
            name="email"
            borderColor="white"
            color="white"
            placeholder="E-Mail"
            className="mt-5"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email && formik.touched.email}
            errorText={formik.errors.email}
          />

          <Input
            name="tel"
            borderColor="white"
            color="white"
            placeholder="Telefon"
            className="mt-5"
            onChange={formik.handleChange}
            value={formik.values.tel}
            error={formik.errors.tel && formik.touched.tel}
            errorText={formik.errors.tel}
          />

          <Textarea
            name="message"
            borderColor="white"
            color="white"
            placeholder="Mesaj"
            className="mt-5"
            textColor="white"
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message && formik.touched.message}
            errorText={formik.errors.message}
          />

          <Button
            type="submit"
            background="white"
            color="black"
            className="w-full flex items-center justify-center py-4 mt-5"
            text={"GÖNDER"}
          />
        </form>
        {isOpen && <StatusModal isOpen={isOpen} onClose={onClose} />}
      </motion.div>
    </div>
  );
}
