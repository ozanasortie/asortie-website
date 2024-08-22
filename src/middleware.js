import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "tr",
  localePrefix: "as-needed",
  pathnames: {
    "/collection": {
      en: "/collection",
      tr: "/koleksiyon",
    },
    "/collection/[endpoint]": {
      en: "/collection/[endpoint]",
      tr: "/koleksiyon/[endpoint]",
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
