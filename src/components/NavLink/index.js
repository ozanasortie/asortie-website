import Link from "next/link";
import { useLocale } from "next-intl";

export default function NavLink({ href, children, className }) {
  const locale = useLocale(); // Mevcut dil kodunu al

  // URL'yi mevcut dil kodu ile oluştur
  const localizedHref = `/${locale}${href.startsWith("/") ? href : "/" + href}`;

  return (
    <Link className={className} href={localizedHref}>
      {children}
    </Link>
  );
}
