import { getMessages } from "next-intl/server";
import ProviderLayout from "./providerLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata = async () => {
  const messages = await getMessages({
    keys: ["anasayfa"],
  });
  const title = messages["anasayfa"] + " | " + "Asortie";

  return {
    title,
  };
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  console.log("NODE_ENV:", process.env.NODE_ENV);

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          href="/logo-left.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta charSet="UTF-8" />
      </head>
      <body className={jost.variable}>
        <ProviderLayout messages={messages} locale={locale}>
          {children}
          <Footer locale={locale} />
          <BottomBar />
        </ProviderLayout>
      </body>
    </html>
  );
}
