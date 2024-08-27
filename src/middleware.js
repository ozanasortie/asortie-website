import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "tr",
  localePrefix: "necessary",
  pathnames: {
    "/collection": {
      en: "/collection",
      tr: "/koleksiyon",
    },
    "/collection/[endpoint]": {
      en: "/collection/[endpoint]",
      tr: "/koleksiyon/[endpoint]",
    },
    "/collection/[endpoint]/[subendpoint]": {
      en: "/collection/[endpoint]/[subendpoint]",
      tr: "/koleksiyon/[endpoint]/[subendpoint]",
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
