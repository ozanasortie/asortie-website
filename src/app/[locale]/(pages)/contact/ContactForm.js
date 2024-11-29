"use client";
import { usePostContactMutation } from "@services/homeServices";
import { useDisclosure } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";

import Input from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import StatusModal from "@/components/StatusModal";

const ContactForm = () => {
  const t = useTranslations("");

  const validationSchema = Yup.object({
    name: Yup.string().required(t("input_ad_soyad_uyari")),
    email: Yup.string()
      .email(t("input_email_uyari"))
      .required(t("input_email_gerekli_uyari")),
    tel: Yup.string()
      .matches(/^[0-9]+$/, t("input_telefon_numara_uyari"))
      .min(10, t("input_telefon_minimum_uyari"))
      .max(15, t("input_telefon_maximum_uyari"))
      .required(t("input_telefon_uyari")),
    message: Yup.string().required(t("input_message_uyari")),
  });

  const [postContact, { isLoading, isError, isSuccess }] =
    usePostContactMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await postContact(values).unwrap();
        onOpen();
        formik.resetForm();
      } catch (error) {
        onOpen();
      }
    },
  });

  const handlePhoneChange = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    formik.setFieldValue("tel", formattedValue);
  };

  const status = isSuccess ? "success" : isError ? "error" : "";

  return (
    <motion.div
      transition={{ duration: 1 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 90 },
      }}
      className="w-full mt-10 lg:mt-0 md:w-[50%] max-w-[500px] z-30 flex flex-col items-center text-white"
    >
      <span className="w-full text-3xl lg:text-4xl mb-2">
        {t("bize_ulasin")}
      </span>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <Input
          name="name"
          borderColor="white"
          color="white"
          placeholder={t("input_name_surname")}
          className="mt-3"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name && formik.touched.name}
          errorText={formik.errors.name}
        />
        <Input
          name="email"
          borderColor="white"
          color="white"
          placeholder={t("input_email")}
          className="mt-4"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && formik.touched.email}
          errorText={formik.errors.email}
        />
        <PhoneInput
          name="tel"
          textColor="white"
          borderColor="white"
          focusBorderColor="white"
          placeholder={t("tel_no")}
          color="white"
          containerStyle="mt-2"
          inputClassName="!bg-transparent !text-white !border-white"
          buttonClassName="!bg-transparent !border-white"
          onChange={handlePhoneChange}
          value={formik.values.tel}
          error={formik.errors.tel && formik.touched.tel}
          errorText={formik.errors.tel}
        />
        <Textarea
          name="message"
          borderColor="white"
          color="white"
          placeholder={t("input_message")}
          className="mt-4"
          textColor="white"
          onChange={formik.handleChange}
          value={formik.values.message}
          error={formik.errors.message && formik.touched.message}
          errorText={formik.errors.message}
        />
        <Button
          isLoading={isLoading}
          type="submit"
          background="white"
          color="black"
          className="w-full flex items-center justify-center py-4 mt-5"
          text={t("gonder")}
        />
      </form>
      <StatusModal status={status} isOpen={isOpen} onClose={onClose} />
    </motion.div>
  );
};

export default ContactForm;
