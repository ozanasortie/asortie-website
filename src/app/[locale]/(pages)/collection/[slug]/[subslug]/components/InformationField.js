"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, useDisclosure } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { WhatsappIcon } from "hugeicons-react";
import { useLocale } from "next-intl";
import { useSelector } from "react-redux";
import { PhoneIcon } from "@chakra-ui/icons";

import { usePostProductRequestMutation } from "@/app/store/services/formServices";

import InformationForm from "./InformationForm";
import Button from "@components/Button";
import Transition from "@/components/Transition";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import StatusModal from "@/components/StatusModal";
import PhoneInput from "@/components/PhoneInput";

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

function InformationField({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const locale = useLocale();
  const whatsappNumber = useSelector((state) => state.general.whatsappNumbers);
  const contact = useSelector((state) => state.general.contact);
  const [status, setStatus] = useState("");
  const [pageUrl, setPageUrl] = useState("");

  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();
  const [postProductRequest, { isLoading, isError, isSuccess }] =
    usePostProductRequestMutation();

  const handleRecommendationClick = () => {
    const pageUrl = window?.location?.href;
    const message = `Merhaba, şuna bir göz at!: ${encodeURIComponent(pageUrl)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsappClick = () => {
    const number = whatsappNumber?.data[0].whatsap;
    const pageUrl = window?.location?.href;
    const message = `Merhaba, bu ürün hakkında bilgi almak istiyorum: ${encodeURIComponent(
      pageUrl
    )}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const formik = useFormik({
    initialValues: {
      detay_name: "",
      detay_email: "",
      telefon: "",
      mesaj: "",
      sayfa: pageUrl,
      dil: locale + "_",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("VALUEs", values);
      try {
        const response = await postProductRequest(values).unwrap();
        onOpen();
        formik.resetForm();
        setStatus("success");
      } catch (error) {
        onOpen();
        setStatus("error");
      }
    },
  });

  const handlePhoneChange = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    formik.setFieldValue("telefon", formattedValue);
  };

  return (
    <div className="w-full !text-black">
      <div className="w-full flex flex-col items-center">
        <Transition className="w-[90%] flex flex-col items-center">
          <Box className="w-full lg:hidden mt-4">
            <Button
              background="black"
              className="w-[100%] justify-center h-[41px] mb-3"
              text={"ÜRÜN BİLGİSİ AL"}
              onClick={onFormOpen}
            />
            <Link
              background="transparent"
              className="w-full flex items-center justify-center text-lg mb-3 border border-black rounded-md h-[41px] py-7"
              color="black"
              fontWeight={"font-normal"}
              href={"tel:" + contact?.data[0].tel1}
            >
              <PhoneIcon
                size={24}
                className="mr-2 group-hover:text-theme-color motion-safe:transition"
              />
              {contact?.data[0].tel1}
            </Link>
            <Button
              className="w-full xl:w-[49.5%] mb-3 flex items-center justify-center !bg-[#075e54] text-white py-4 border !border-[#075e54]"
              text={whatsappNumber?.data[0].whatsap}
              color="white"
              fontWeight={"font-normal"}
              onClick={handleWhatsappClick}
            >
              <WhatsappIcon
                size={24}
                className="mr-2 group-hover:text-theme-color motion-safe:transition"
              />
            </Button>
            <Button
              background="transparent"
              className="w-full flex items-center justify-center py-4 border"
              text={"MODELİ PAYLAŞ"}
              fontWeight={"font-normal"}
              borderColor={"black"}
              color="black"
              onClick={handleRecommendationClick}
            >
              <WhatsappIcon
                size={24}
                className="mr-2 group-hover:text-theme-color motion-safe:transition"
              />
            </Button>
          </Box>

          <InformationForm
            title={title}
            isFormOpen={isFormOpen}
            onFormClose={onFormClose}
            onStatusOpen={onOpen}
            setStatus={setStatus}
          />
          <form
            onSubmit={formik.handleSubmit}
            className="w-full hidden lg:block"
          >
            <div className="text-2xl w-full uppercase">Ürün Bilgisi Al</div>

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

            <div className="w-full">
              <div className="flex flex-col xl:flex-row lg:justify-between">
                <Button
                  className="w-full xl:w-[49.5%] mb-3 flex items-center justify-center !bg-[#075e54] text-white py-4 border !border-[#075e54]"
                  text={whatsappNumber?.data[0].whatsap}
                  color="white"
                  fontWeight={"font-normal"}
                  onClick={handleWhatsappClick}
                >
                  <WhatsappIcon
                    size={24}
                    className="mr-2 group-hover:text-theme-color motion-safe:transition"
                  />
                </Button>
                <Link
                  background="transparent"
                  className="w-full xl:w-[49.5%] flex items-center justify-center text-lg mb-3 border border-black rounded-md"
                  color="black"
                  fontWeight={"font-normal"}
                  href={"tel:" + contact?.data[0].tel1}
                >
                  <PhoneIcon
                    size={24}
                    className="mr-2 group-hover:text-theme-color motion-safe:transition"
                  />
                  {contact?.data[0].tel1}
                </Link>
              </div>
              <Button
                background="transparent"
                className="w-[100%] flex items-center justify-center py-4 border"
                text={"MODELİ PAYLAŞ"}
                fontWeight={"font-normal"}
                borderColor={"black"}
                color="black"
                onClick={handleRecommendationClick}
              >
                <WhatsappIcon
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
