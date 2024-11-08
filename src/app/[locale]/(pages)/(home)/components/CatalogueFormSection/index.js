"use client";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDisclosure } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import useIsSafari from "@/hooks/useIsSafari";
import Input from "@components/Input";
import Textarea from "@/components/Textarea";
import Button from "@components/Button";
import StatusModal from "@/components/StatusModal";
import DigitalCatalogueForm from "../../components/DigitalCatalogueForm";
import PhoneInput from "@/components/PhoneInput";

import { usePostContactMutation } from "@services/homeServices";

import FormBackground from "@/assets/form-background.png";

export default function CatalogueFormSection() {
  const isSafari = useIsSafari();
  const [postContact, { isLoading, isError, isSuccess }] =
    usePostContactMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();
  const t = useTranslations("");

  const validationSchema = Yup.object({
    name: Yup.string().required(t('input_ad_soyad_uyari')),
    email: Yup.string()
      .email(t('input_email_uyari'))
      .required(t('input_email_gerekli_uyari')),
    tel: Yup.string()
      .matches(/^[0-9]+$/, t('input_telefon_numara_uyari'))
      .min(10, t('input_telefon_minimum_uyari'))
      .max(15, t('input_telefon_maximum_uyari'))
      .required(t('input_phone_uyari')),
    message: Yup.string().required(t('input_message_uyari')),
  });

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
    <div
      className={`bg-cover bg-center relative p-4 lg:p-10 py-20 lg:pb-24 flex justify-center items-center text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${FormBackground.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-55 z-20" />
      <div className="w-full max-w-[500px] lg:max-w-[1400px] flex flex-col lg:flex-row items-center lg:justify-around">
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
          <i className="mb-5 text-center">{t("katalog_aciklama")}</i>
          <Button
            background="white"
            color="black"
            className="w-[90%] flex items-center justify-center py-4"
            text={t("e_katalog_buton")}
            onClick={() => onFormOpen()}
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
            className="flex items-center justify-center mt-10 mb-5 z-30"
          >
            <span className="text-3xl lg:text-4xl text-center font-light">
              {t("bize_ulasin")}
            </span>
          </motion.div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <Input
              name="name"
              borderColor="white"
              color="white"
              placeholder={t("input_name_surname")}
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
              placeholder={t("input_email")}
              className="mt-5"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email && formik.touched.email}
              errorText={formik.errors.email}
            />

            <PhoneInput
              name="tel"
              textColor="black"
              focusBorderColor="black"
              placeholder={t("input_phone")}
              className="mt-5"
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
              className="mt-5"
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
          <DigitalCatalogueForm isOpen={isFormOpen} onClose={onFormClose} />
        </motion.div>
      </div>
    </div>
  );
}
