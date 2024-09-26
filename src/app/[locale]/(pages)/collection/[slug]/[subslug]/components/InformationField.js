"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, useDisclosure } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Share01Icon, Share02Icon, Share03Icon, WhatsappIcon } from "hugeicons-react";
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
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <Transition className="w-[100%] flex flex-col">
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
              text={"Modeli Paylaş"}
              fontWeight={"font-normal"}
              borderColor={"black"}
              color="black"
              onClick={handleRecommendationClick}
            >
              <Share01Icon
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
          <div className="text-lg w-full">Ürün Bilgi Formu</div>
          <div className="flex flex-col w-[100%]">
            <form
              onSubmit={formik.handleSubmit}
              className="w-[100%] hidden lg:block mr-5"
            >
              <Input
                name="detay_name"
                textColor="black"
                focusBorderColor="#adadad"
                placeholder="Adınız Soyadınız"
                borderColor="#adadad"
                className="mt-2"
                onChange={formik.handleChange}
                value={formik.values.detay_name}
                error={formik.errors.detay_name && formik.touched.detay_name}
                errorText={formik.errors.detay_name}
              />
              <PhoneInput
                name="telefon"
                textColor="black"
                focusBorderColor="#adadad"
                borderColor="#adadad"
                placeholder="Telefon"
                onChange={handlePhoneChange}
                value={formik.values.telefon}
                error={formik.errors.telefon && formik.touched.telefon}
                errorText={formik.errors.telefon}
              />
              <Input
                name="detay_email"
                textColor="black"
                focusBorderColor="adadad"
                borderColor="#adadad"
                placeholder="E-Mail"
                className="mt-2"
                onChange={formik.handleChange}
                value={formik.values.detay_email}
                error={formik.errors.detay_email && formik.touched.detay_email}
                errorText={formik.errors.detay_email}
              />
              <Textarea
                name="mesaj"
                focusBorderColor="adadad"
                _placeholder={{ color: "black" }}
                placeholder="Mesaj"
                className="mt-2"
                onChange={formik.handleChange}
                value={formik.values.mesaj}
                error={formik.errors.mesaj && formik.touched.mesaj}
                errorText={formik.errors.mesaj}
              ></Textarea>
              <div className="w-full flex justify-end">
                <Button
                  type="submit"
                  background="black"
                  color="white"
                  textSize={"text-sm"}
                  className="w-full flex items-center justify-center py-2 mt-5 mb-0 lg:my-3"
                  text={"GÖNDER"}
                  isLoading={isLoading}
                />
              </div>
            </form>
            <div className="w-full font-thin text-center border-b border-gray-200 pb-2 mt-8">Tüm Dünyaya Teslimat Yapıyoruz</div>
            <div className="w-[100%] mt-3">
              <div className="flex flex-col">
                <Button
                  className="w-full mb-3 flex items-center justify-center !bg-[#128c7e] text-white py-4"
                  text={whatsappNumber?.data[0].whatsap}
                  color="white"
                  fontWeight={"font-normal"}
                  textSize={"text-sm"}
                  onClick={handleWhatsappClick}
                >
                  <WhatsappIcon
                    size={20}
                    className="mr-2 group-hover:text-theme-color motion-safe:transition"
                  />
                </Button>
                <Link
                  background="transparent"
                  className="w-full flex h-[40px] items-center justify-center text-sm mb-3 border border-black rounded-md"
                  color="black"
                  fontWeight={"font-normal"}
                  href={"tel:" + contact?.data[0].tel1}
                >
                  <PhoneIcon
                    size={20}
                    className="mr-2 group-hover:text-theme-color motion-safe:transition"
                  />
                  {contact?.data[0].tel1}
                </Link>
              </div>
              <Button
                background="transparent"
                className="w-[100%] flex items-center justify-center py-4 border"
                text={"Modeli Paylaş"}
                fontWeight={"font-normal"}
                textSize={"text-sm"}
                borderColor={"black"}
                color="black"
                onClick={handleRecommendationClick}
              >
                <Share03Icon
                  size={20}
                  className="mr-2 group-hover:text-theme-color motion-safe:transition"
                />
              </Button>
            </div>
          </div>
        </Transition>
      </div>
      <StatusModal status={status} isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default InformationField;
