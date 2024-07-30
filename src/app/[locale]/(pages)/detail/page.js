import { useTranslations } from "next-intl";

export default function Detail() {
  const t = useTranslations("Header");
  return <div>{t("home")}</div>;
}
