"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextIntlClientProvider } from "next-intl";
import { ChakraProvider } from "@chakra-ui/react";

import {
  useGetCategoriesQuery,
  setCategories,
} from "@slices/categoriesService";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function ClientLayout({ children, locale, messages }) {
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (data) {
      dispatch(setCategories(data));
    }
  }, [data]);

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
