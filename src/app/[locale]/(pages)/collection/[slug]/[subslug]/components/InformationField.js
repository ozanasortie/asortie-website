"use client";
import { Box, useDisclosure } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Upload04Icon } from "hugeicons-react";

import { usePostProductRequestMutation } from "@/app/store/services/formServices";

import InformationForm from "./InformationForm";
import Button from "@components/Button";
import Transition from "@/components/Transition";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import StatusModal from "@/components/StatusModal";

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
  message: Yup.string().required("Mesaj alanı gereklidir"),
});

function InformationField({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postProductRequest, { isLoading, isError, isSuccess }] =
    usePostProductRequestMutation();

  const formik = useFormik({
    initialValues: {
      detay_name: "",
      detay_email: "",
      telefon: "",
      mesaj: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postProductRequest(values).unwrap();
        onOpen();
        formik.resetForm();
      } catch (error) {
        onOpen();
      }
    },
  });

  const status = isSuccess ? "success" : isError ? "error" : "";

  return (
    <div className="w-full !text-black">
      <div className="w-full flex flex-col items-center">
        <Transition className="w-[90%] flex flex-col items-center">
          <Box className="w-full lg:hidden mt-4">
            <Button
              background="black"
              className="w-[100%] justify-center h-[43px]"
              text={"ÜRÜN BİLGİSİ AL"}
              onClick={onOpen}
            />
          </Box>

          <InformationForm title={title} isOpen={isOpen} onClose={onClose} />
          <form
            onSubmit={formik.handleSubmit}
            className="w-full hidden lg:block"
          >
            <div className="font-light text-3xl mb-5 w-full">
              ÜRÜN BİLGİSİ TALEP ET
            </div>

            <Input
              name="detay_name"
              textColor="black"
              focusBorderColor="black"
              placeholder="Ad Soyad"
              className="mb-5"
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
              className="mb-5"
              onChange={formik.handleChange}
              value={formik.values.detay_email}
              error={formik.errors.detay_email && formik.touched.detay_email}
              errorText={formik.errors.detay_email}
            />
            <Input
              name="telefon"
              textColor="black"
              focusBorderColor="black"
              placeholder="Telefon"
              className="mb-5"
              onChange={formik.handleChange}
              value={formik.values.telefon}
              error={formik.errors.telefon && formik.touched.telefon}
              errorText={formik.errors.telefon}
            />
            <Textarea
              name="mesaj"
              focusBorderColor="black"
              _placeholder={{ color: "black" }}
              placeholder="Mesaj"
              className="mb-5"
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
              className="w-full flex items-center justify-center py-4 mb-5"
              text={"TALEP ET"}
              isLoading={isLoading}
            />

            <div className="w-full">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <Button
                  background="transparent"
                  className="w-full lg:w-[49.5%] mb-3 lg:mb-0 flex items-center justify-center py-4 border !border-[#075e54]"
                  text={"WhatsApp: +90 549 460 30 07"}
                  color="#075e54"
                  fontWeight={"font-normal"}
                  onClick={onOpen}
                />
                <Button
                  background="transparent"
                  className="w-full lg:w-[49.5%] flex items-center justify-center py-4 border border-black"
                  text={"Telefon: +90 212 675 04 46"}
                  color="black"
                  fontWeight={"font-normal"}
                  onClick={onOpen}
                />
              </div>
              <Button
                background="transparent"
                className="w-[100%] flex items-center justify-center py-4 mt-3"
                text={"Modeli Tavsiye Et"}
                fontWeight={"font-normal"}
                color="black"
                onClick={onOpen}
              >
                <Upload04Icon
                  size={24}
                  className="mr-2 group-hover:text-theme-color motion-safe:transition"
                />
              </Button>
              <div></div>
              <div className="underline"></div>
            </div>
          </form>
        </Transition>
      </div>
      <StatusModal status={status} isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default InformationField;
