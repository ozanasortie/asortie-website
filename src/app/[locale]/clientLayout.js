"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { ChakraProvider } from "@chakra-ui/react";

import {
  useGetCategoriesQuery,
  setCategories,
} from "@/app/store/services/categoriesService";

import {
  setContact,
  useGetContactQuery,
} from "@/app/store/services/generalService";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function ClientLayout({ children, locale, messages }) {
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery(locale);
  const { data: contactData } = useGetContactQuery(locale);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (data && contactData) {
      dispatch(setCategories(data));
      dispatch(setContact(contactData));
    }
  }, [data, contactData]);

  console.log("contact data", contactData);

  if (!categories) return <Loading />;

  return (
    <ChakraProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </ChakraProvider>
  );
}
