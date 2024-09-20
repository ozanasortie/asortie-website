"use client";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDisclosure } from "@chakra-ui/react";

import useIsSafari from "@/hooks/useIsSafari";
import Input from "@components/Input";
import Textarea from "@/components/Textarea";
import Button from "@components/Button";
import StatusModal from "@/components/StatusModal";
import PhoneInput from "@/components/PhoneInput";

import eng from "@assets/icons/flags/eng.png";
import turkey from "@assets/icons/flags/turkey.png";
import arab from "@assets/icons/flags/arab.png";
import france from "@assets/icons/flags/france.png";
import russia from "@assets/icons/flags/russia.png";
import nigeria from "@assets/icons/flags/nigeria.png";

import { usePostContactMutation } from "@services/homeServices";

import FormBackground from "@/assets/form-background.png";
import { useSelector } from "react-redux";
import {
  Clock01Icon,
  CustomerSupportIcon,
  LanguageCircleIcon,
  WhatsappIcon,
} from "hugeicons-react";
import Image from "next/image";

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

const whatsappNumbers = [
  {
    language: "İngilizce",
    numbers: ["+1 234 567 8901", "+1 234 567 8902"],
    flag: eng,
    delay: 0.2,
  },
  {
    language: "Türkçe",
    numbers: ["+90 123 456 7890", "+90 123 456 7891"],
    flag: turkey,
    delay: 0.4,
  },
  {
    language: "Arapça",
    numbers: ["+20 123 456 7890", "+20 123 456 7891"],
    flag: arab,
    delay: 0.6,
  },
  {
    language: "Rusça",
    numbers: ["+33 1 23 45 67 89", "+33 1 23 45 67 90"],
    flag: russia,
    delay: 0.8,
  },
  {
    language: "Fransızca",
    numbers: ["+33 1 23 45 67 89", "+33 1 23 45 67 90"],
    flag: france,
    delay: 1,
  },
  {
    language: "Hausaca",
    numbers: ["+234 123 456 7890", "+234 123 456 7891"],
    flag: nigeria,
    delay: 1.2,
  },
];

export default function FormField({}) {
  const isSafari = useIsSafari();
  const [postContact, { isLoading, isError, isSuccess }] =
    usePostContactMutation();
  const whatsappNumber = useSelector((state) => state.general.whatsappNumbers);
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
      className={`w-full bg-cover bg-center relative p-4 lg:p-10 py-20 lg:pb-24 flex flex-col items-center lg:justify-center text-white pt-32 lg:!pt-44 ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{ backgroundImage: `url(${FormBackground.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 z-20" />
      <div className="flex flex-col lg:flex-row lg:justify-around w-full max-w-[1400px]">
        <div className="w-full lg:max-w-[50%] flex flex-col text-white z-30 mr-5">
          <h1 className="text-4xl z-30 flex items-center">
            <CustomerSupportIcon color="white" className="mr-4" size={35} />{" "}
            7/24 Çok Dilli Müşteri Destek Hizmeti
          </h1>

          <h2 className="text-lg mt-6">
            Müşteri memnuniyetini ön planda tutuyoruz!
          </h2>

          <div className="flex justify-between text-black mt-6">
            <motion.div
              transition={{ duration: 1.2, delay: 0.2 }}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 90 },
              }}
              className="flex flex-col rounded-lg p-5 bg-white w-[49.2%]"
            >
              <div className="flex font-medium items-center">
                <Clock01Icon size={25} className="mr-2" /> Günün Her Saati
                Erişilebilirlik
              </div>
              <div className="mt-4 text-sm">
                Günün her saatinde, gece veya gündüz fark etmeksizin müşteri
                temsilcilerimiz her zaman hizmetinizdedir.
              </div>
            </motion.div>
            <motion.div
              transition={{ duration: 1.2, delay: 0.8 }}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 90 },
              }}
              className="flex flex-col rounded-lg p-5 bg-white w-[49.2%]"
            >
              <div className="flex font-medium items-center">
                <LanguageCircleIcon size={25} className="mr-2" /> Çok Dilli
                Destek
              </div>
              <div className="mt-4 text-sm">
                İhtiyacınıza uygun olarak, farklı dillerde hizmet alabilirsiniz.
                Müşteri temsilcilerimiz, çeşitli dillerde size yardımcı olacak
                şekilde eğitimlidir.
              </div>
            </motion.div>
          </div>
          <div className="flex-col mt-6 lg:mt-16">
            <div className="mt-4 text-xl mb-6">
              Destek almak istediğiniz numaraya tıklayın:
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3">
              {whatsappNumbers.map((item, index) => (
                <motion.div
                  transition={{ duration: 1, delay: item.delay }}
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 90 },
                  }}
                  key={index}
                  className="mr-6 flex flex-col mb-6 backdrop-blur-sm p-4 rounded-lg"
                >
                  <div className="flex items-center mb-3">
                    <Image
                      className="mr-2"
                      width={22}
                      src={item.flag}
                      alt={item.language}
                    />
                    <span className="text-base text-wrap">{item.language}</span>
                  </div>
                  <div className="flex flex-col mt-2">
                    {item.numbers.map((number, numIndex) => (
                      <span key={numIndex} className={"flex items-center mb-3"}>
                        <WhatsappIcon size={20} className="mr-2" />{" "}
                        <span>{number}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          transition={{ duration: 1 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full lg:w-[40%] z-30 flex flex-col items-center text-white"
        >
          <motion.div
            transition={{ duration: 1 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 90 },
            }}
            className="w-full z-30 mb-14 lg:mb-0 flex flex-col"
          >
            <span className="w-full text-4xl lg:text-4xl mb-2">
              Bize Ulaşın
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

            <PhoneInput
              name="tel"
              textColor="white"
              borderColor="white"
              focusBorderColor="white"
              placeholder="Telefon"
              color="white"
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
              placeholder="Mesaj"
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
              text={"GÖNDER"}
            />
          </form>
          <StatusModal status={status} isOpen={isOpen} onClose={onClose} />
        </motion.div>
      </div>
    </div>
  );
}
