import * as Yup from "yup";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useLocale } from "next-intl";

import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import Input from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";

import { usePostProductRequestMutation } from "@services/formServices";

export default function InformationForm({
  title,
  isFormOpen,
  onStatusOpen,
  onFormClose,
  setStatus,
}) {
  const locale = useLocale();
  const [postProductRequest, { isLoading, isError, isSuccess }] =
    usePostProductRequestMutation();

  const validationSchema = Yup.object({
    detay_name: Yup.string().required("Ad Soyad alanı gereklidir"),
    detay_email: Yup.string()
      .email("Geçersiz email adresi")
      .required("Email alanı gereklidir"),
    telefon: Yup.string()
      .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlar içermelidir")
      .min(10, "Telefon numarası en az 10 haneli olmalıdır")
      .max(15, "Telefon numarası en fazla 15 haneli olmalıdır")
      .required("Telefon numarası gereklidir"),
    mesaj: Yup.string().required("Mesaj alanı gereklidir"),
  });

  const formik = useFormik({
    initialValues: {
      detay_name: "",
      detay_email: "",
      telefon: "",
      mesaj: "",
      sayfa: window && window?.location?.href,
      dil: locale + "_",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postProductRequest(values).unwrap();
        onStatusOpen();
        onFormClose();
        setStatus("success");
        formik.resetForm();
      } catch (error) {
        onStatusOpen();
        setStatus("error");
      }
    },
  });

  const handlePhoneChange = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    formik.setFieldValue("telefon", formattedValue);
  };

  return (
    <Modal isCentered isOpen={isFormOpen} onClose={onFormClose}>
      <ModalOverlay className="backdrop-blur-sm" />
      <ModalContent
        width={"95%"}
        borderRadius={5}
        className="w-[95%]"
        background={"white"}
        py={5}
        pt={10}
      >
        <ModalHeader>
          <div className="font-light text-3xl text-center">{title}</div>
        </ModalHeader>
        <ModalCloseButton color={"black"} />
        <ModalBody
          background={"transparent"}
          className="w-full flex flex-col items-start"
        >
          <form onSubmit={formik.handleSubmit} className="w-full">
            <Input
              name="detay_name"
              textColor="black"
              focusBorderColor="black"
              placeholder="Ad Soyad"
              className="mt-5"
              onChange={formik.handleChange}
              value={formik.values.detay_name}
              error={formik.errors.detay_name && formik.touched.detay_name}
              errorText={formik.errors.detay_name}
            />
            <Input
              name="detay_email"
              textColor="black"
              focusBorderColor="black"
              placeholder="E-Mail"
              className="mt-5"
              onChange={formik.handleChange}
              value={formik.values.detay_email}
              error={formik.errors.detay_email && formik.touched.detay_email}
              errorText={formik.errors.detay_email}
            />
            <PhoneInput
              name="telefon"
              textColor="black"
              focusBorderColor="black"
              placeholder="Telefon"
              className="mt-5"
              onChange={handlePhoneChange}
              value={formik.values.telefon}
              error={formik.errors.telefon && formik.touched.telefon}
              errorText={formik.errors.telefon}
            />
            <Textarea
              name="mesaj"
              focusBorderColor="black"
              _placeholder={{ color: "black" }}
              placeholder="Mesaj"
              className="mt-5"
              borderColor={"black"}
              onChange={formik.handleChange}
              value={formik.values.mesaj}
              error={formik.errors.mesaj && formik.touched.mesaj}
              errorText={formik.errors.mesaj}
            ></Textarea>
            <Button
              type="submit"
              background="black"
              color="white"
              className="w-full flex items-center justify-center py-4 my-5 lg:my-3"
              text={"BİLGİ AL"}
              isLoading={isLoading}
            />
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
