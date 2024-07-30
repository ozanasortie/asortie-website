import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { ChakraProvider } from "@chakra-ui/react";
import { getMessages } from "next-intl/server";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Asortie | Anasayfa",
  description: "The official Next.js Course Dashboard, built with App Router.",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={jost.variable}>
        <ChakraProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
