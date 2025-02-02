import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "tr", "fr", "ar", "ru", "ha"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
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
    "/decoration": {
      en: "/decoration",
      tr: "/dekorasyon",
      fr: "/decoration",
      ar: "/decoration",
      ru: "/decoration",
      ha: "/decoration",
    },
    "/decoration/[endpoint]": {
      en: "/decoration/[endpoint]",
      tr: "/dekorasyon/[endpoint]",
      fr: "/decoration/[endpoint]",
      ar: "/decoration/[endpoint]",
      ru: "/decoration/[endpoint]",
      ha: "/decoration/[endpoint]",
    },
    "/decoration/[endpoint]/[subendpoint]": {
      en: "/decoration/[endpoint]/[subendpoint]",
      tr: "/dekorasyon/[endpoint]/[subendpoint]",
      fr: "/decoration/[endpoint]/[subendpoint]",
      ar: "/decoration/[endpoint]/[subendpoint]",
      ru: "/decoration/[endpoint]/[subendpoint]",
      ha: "/decoration/[endpoint]/[subendpoint]",
    },
    "/corporate": {
      en: "/corporate",
      tr: "/kurumsal",
      fr: "/corporate",
      ar: "/corporate",
      ru: "/corporate",
      ha: "/corporate",
    },
    "/corporate/hakkimizda": {
      en: "/corporate/about-us",
      tr: "/kurumsal/hakkimizda",
      fr: "/corporate/a-propos-de-nous",
      ar: "/corporate/about-us",
      ru: "/corporate/about-us",
      ha: "/corporate/about-us",
    },
    "/corporate/felsefemiz": {
      en: "/corporate/our-philosophy",
      tr: "/kurumsal/felsefemiz",
      fr: "/corporate/notre-philosophie",
      ar: "/corporate/our-philosophy",
      ru: "/corporate/our-philosophy",
      ha: "/corporate/our-philosophy",
    },
    "/corporate/referanslar": {
      en: "/corporate/references",
      tr: "/kurumsal/referanslar",
      fr: "/corporate/references",
      ar: "/corporate/references",
      ru: "/corporate/references",
      ha: "/corporate/references",
    },
    "/corporate/asortie-vip": {
      en: "/corporate/asortie-vip",
      tr: "/kurumsal/asortie-vip",
      fr: "/corporate/asortie-vip",
      ar: "/corporate/asortie-vip",
      ru: "/corporate/asortie-vip",
      ha: "/corporate/asortie-vip",
    },
    "/corporate/musteri-haklari": {
      en: "/corporate/customer-rights",
      tr: "/kurumsal/musteri-haklari",
      fr: "/corporate/droits-des-clients",
      ar: "/corporate/customer-rights",
      ru: "/corporate/customer-rights",
      ha: "/corporate/customer-rights",
    },
    "/corporate/insan-kaynaklari": {
      en: "/corporate/human-resources",
      tr: "/kurumsal/insan-kaynaklari",
      fr: "/corporate/ressources-humaines",
      ar: "/corporate/human-resources",
      ru: "/corporate/human-resources",
      ha: "/corporate/human-resources",
    },
    "/corporate/sikayet-ve-oneri": {
      en: "/corporate/complaints-suggestions",
      tr: "/kurumsal/sikayet-ve-oneri",
      fr: "/corporate/reclamations-suggestions",
      ar: "/corporate/complaints-suggestions",
      ru: "/corporate/complaints-suggestions",
      ha: "/corporate/complaints-suggestions",
    },
    "/corporate/biz-kimiz": {
      en: "/corporate/who-we-are",
      tr: "/kurumsal/biz-kimiz",
      fr: "/corporate/qui-nous-sommes",
      ar: "/corporate/who-we-are",
      ru: "/corporate/who-we-are",
      ha: "/corporate/who-we-are",
    },
    "/contact": {
      en: "/contact",
      tr: "/iletisim",
      fr: "/contact",
      ar: "/contact",
      ru: "/contact",
      ha: "/contact",
    },
    "/architect-service": {
      en: "/architect-service",
      tr: "/mimarlik-hizmeti",
      fr: "/service-architectural",
      ar: "/architect-service",
      ru: "/architect-service",
      ha: "/architect-service",
    },
    "/news": {
      en: "/news",
      tr: "/haberler",
      fr: "/news",
      ar: "/news",
      ru: "/news",
      ha: "/news",
    },
    "/news/[endpoint]": {
      en: "/news/[endpoint]",
      tr: "/haberler/[endpoint]",
      fr: "/news/[endpoint]",
      ar: "/news/[endpoint]",
      ru: "/news/[endpoint]",
      ha: "/news/[endpoint]",
    },
    "/blog": {
      en: "/blog",
      tr: "/blog",
      fr: "/blog",
      ar: "/blog",
      ru: "/blog",
      ha: "/blog",
    },
    "/blog/[endpoint]": {
      en: "/blog/[endpoint]",
      tr: "/blog/[endpoint]",
      fr: "/blog/[endpoint]",
      ar: "/blog/[endpoint]",
      ru: "/blog/[endpoint]",
      ha: "/blog/[endpoint]",
    },
  },
});

export default function middleware(request) {
  const referer = request.headers.get("referer"); // Referer başlığını al
  const host = request.headers.get("host"); // Uygulamanın kendi host bilgisi
  const url = request.nextUrl;

  console.log("Referer:", referer);
  console.log("Host:", host);
  console.log("Pathname:", url.pathname);

  // Google'dan gelen istekleri algıla
  if (!referer) {
    // Yönlendirme yapılacak eski URL'yi kontrol et
    if (url.pathname === "/eski-url") {
      const newUrl = new URL("/", request.url);
      return NextResponse.redirect(newUrl);
    }
  }

  // Eğer istek uygulamanın kendi içinden geliyorsa yönlendirme yapma
  // if (referer && referer.includes(host)) {
  //   return intlMiddleware(request);
  // }

  // Diğer durumlarda intl middleware'i çalıştır
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*|.*\\.mp4).*)"],
};
