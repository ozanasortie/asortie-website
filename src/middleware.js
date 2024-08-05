import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "necessary",
  pathnames: {
    "/detail": {
      en: "/detail",
      tr: "/detay",
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
