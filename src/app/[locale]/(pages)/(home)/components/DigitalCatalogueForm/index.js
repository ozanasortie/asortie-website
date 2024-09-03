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
  Textarea,
} from "@chakra-ui/react";
// import StatusModal from "@/components/StatusModal";
import { useCatalogueRequestMutation } from "@services/homeServices"; // Import your mutation hook

const validationSchema = Yup.object({
  name: Yup.string().required("Ad Soyad alanı gereklidir"),
  email: Yup.string()
    .email("Geçersiz email adresi")
    .required("Email alanı gereklidir"),
  tel: Yup.string()
    .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlar içermelidir")
    .min(10, "Telefon numarası en az 10 haneli olmalıdır")
    .max(15, "Telefon numarası en fazla 15 haneli olmalıdır")
    .required("Telefon numarası gereklidir"),
});

export default function DigitalCatalogueForm({ isOpen, onClose }) {
  const [postContact, { isLoading, isError, isSuccess }] =
    useCatalogueRequestMutation();
  const [statusModalOpen, setStatusModalOpen] = useState(false);

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

  const status = isSuccess ? "success" : isError ? "error" : "";

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="backdrop-blur-sm" />
        <ModalContent
          className="w-full"
          background={"white"}
          maxW={"40rem"}
          py={5}
        >
          <ModalHeader>
            <div className="font-light text-3xl">KATALOG TALEP ET</div>
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
                placeholder="Ad Soyad"
                className="mt-5"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name && formik.touched.name}
                errorText={formik.errors.name}
              />
              <Input
                name="email"
                focusBorderColor="black"
                textColor={"black"}
                placeholder="E-Mail"
                className="mt-5"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email && formik.touched.email}
                errorText={formik.errors.email}
              />
              <Input
                name="tel"
                focusBorderColor="black"
                textColor={"black"}
                placeholder="Telefon"
                className="mt-5"
                onChange={formik.handleChange}
                value={formik.values.tel}
                error={formik.errors.tel && formik.touched.tel}
                errorText={formik.errors.tel}
              />
              <Button
                isLoading={isLoading}
                type="submit"
                background="black"
                color="white"
                className="w-full flex items-center justify-center py-4 mt-5"
                text={"TALEP ET"}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* {statusModalOpen && (
        <StatusModal
          isOpen={statusModalOpen}
          onClose={() => setStatusModalOpen(false)}
          status={status}
        />
      )} */}
    </>
  );
}
