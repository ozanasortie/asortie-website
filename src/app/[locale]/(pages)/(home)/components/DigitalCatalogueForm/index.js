"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import StatusModal from "@/components/StatusModal";
import { useCatalogueRequestMutation } from "@services/homeServices";
import PhoneInput from "@/components/PhoneInput";
import { useTranslations } from "next-intl";

export default function DigitalCatalogueForm({ isOpen, onClose }) {
  const [postContact, { isLoading, isError, isSuccess }] =
    useCatalogueRequestMutation();
  const [statusModalOpen, setStatusModalOpen] = useState(false);
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
      .required(t("input_phone_uyari")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await postContact(values).unwrap();
        setStatusModalOpen(true); // Open status modal on success
        formik.resetForm();
        onClose();
      } catch (error) {
        console.error("Failed to submit form:", error);
        setStatusModalOpen(true);
        onClose();
      }
    },
  });

  const handlePhoneChange = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    formik.setFieldValue("tel", formattedValue);
  };

  const status = isSuccess ? "success" : isError ? "error" : "";

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="backdrop-blur-sm" />
        <ModalContent
          className="w-[90%]"
          background={"white"}
          maxW={"30rem"}
          py={5}
        >
          <ModalHeader>
            <div className="font-light text-3xl">
              {t("katalog_talep_formu")}
            </div>
          </ModalHeader>
          <ModalCloseButton color={"black"} />
          <ModalBody
            background={"transparent"}
            className="w-full flex flex-col items-start"
          >
            <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col items-start"
            >
              <Input
                name="name"
                focusBorderColor="black"
                textColor={"black"}
                placeholder={t("input_name_surname")}
                className="mt-4"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name && formik.touched.name}
                errorText={formik.errors.name}
              />
              <Input
                name="email"
                focusBorderColor="black"
                textColor={"black"}
                placeholder={t("input_email")}
                className="mt-4"
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
                className="mt-4"
                onChange={handlePhoneChange}
                value={formik.values.tel}
                error={formik.errors.tel && formik.touched.tel}
                errorText={formik.errors.tel}
              />
              <Button
                isLoading={isLoading}
                type="submit"
                background="black"
                color="white"
                className="w-full flex items-center justify-center py-4 mt-4"
                text={t('gonder')}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {statusModalOpen && (
        <StatusModal
          isOpen={statusModalOpen}
          onClose={() => setStatusModalOpen(false)}
          status={status}
        />
      )}
    </>
  );
}
