import { Pathnames } from "next-intl/dist/types/src/routing/types";

export const locales = ['en', 'tr'] as const;
 
// The `pathnames` object holds pairs of internal and
// external paths. Based on the locale, the external
// paths are rewritten to the shared, internal ones.
export const pathnames = {
  // If locales use different paths, you can
  // specify each external path per locale
  '/about': {
    en: '/detail',
    tr: '/detay'
  },
} satisfies Pathnames<typeof locales>;