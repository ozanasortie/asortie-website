import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr", "fr", "ar", "ru", "ha"],
  defaultLocale: "tr",
  localePrefix: "always", // "always" veya "none" olarak ayarlayabilirsiniz
  pathnames: {
    "/collection": {
      en: "/collection",
      tr: "/koleksiyon",
      fr: "/collection",
      ar: "/collection",
      ru: "/collection",
      ha: "/collection",
    },
    "/collection/[endpoint]": {
      en: "/collection/[endpoint]",
      tr: "/koleksiyon/[endpoint]",
      fr: "/collection/[endpoint]",
      ar: "/collection/[endpoint]",
      ru: "/collection/[endpoint]",
      ha: "/collection/[endpoint]",
    },
    "/collection/[endpoint]/[subendpoint]": {
      en: "/collection/[endpoint]/[subendpoint]",
      tr: "/koleksiyon/[endpoint]/[subendpoint]",
      fr: "/collection/[endpoint]/[subendpoint]",
      ar: "/collection/[endpoint]/[subendpoint]",
      ru: "/collection/[endpoint]/[subendpoint]",
      ha: "/collection/[endpoint]/[subendpoint]",
    },
  },
});

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
    "/((?!api|_next|.*\\..*|.*\\.mp4).*)",
  ],
};
