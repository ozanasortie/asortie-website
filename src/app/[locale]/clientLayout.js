"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextIntlClientProvider } from "next-intl";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
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

  useEffect(() => {
    const originalTitle = document.title;
    let intervalId;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Bu Lüksü Unutma!";

        intervalId = setInterval(() => {
          document.title =
            document.title === "Asortie Mobilya"
              ? "Bu Lüksü Unutma!"
              : "Asortie Mobilya";
        }, 1500);
      } else {
        clearInterval(intervalId);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, []);

  const customTheme = extendTheme(
    {
      colors: {
        black: "black",
      },
    },
    withDefaultColorScheme({ colorScheme: "black" })
  );

  console.log("contact data", contactData);

  if (!categories) return <Loading />;

  return (
    <ChakraProvider theme={customTheme}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </ChakraProvider>
  );
}
