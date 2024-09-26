import { getMessages } from "next-intl/server";
import ProviderLayout from "./providerLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Cormorant_Garamond,
  Cormorant_Infant,
  EB_Garamond,
  Jost,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <head>
        <link
          rel="icon"
          href="/logo-left.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={jost.variable}>
        <ProviderLayout messages={messages} locale={locale}>
          {children}
          <Footer locale={locale} />
        </ProviderLayout>
      </body>
    </html>
  );
}
