"use client";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import Button from "@components/Button";
import styles from "./localSwitcher.module.css";

export default function LocalSwitcher({ headerVariant, small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  function onLanguageChange(lang) {
    // const currentLocale = locale;
    // const nextLocale = lang;
    // const pathSegments = pathname.split("/").filter(Boolean);

    // pathSegments[0] = nextLocale;

    // const newPathname = `/${pathSegments.join("/")}`;
    startTransition(() => {
      router.replace("/" + lang);
      router.refresh();
      onClose();
    });
  }

  const flagIcons = {
    en: "/icons/flags/eng.png",
    tr: "/icons/flags/turkey.png",
    ar: "/icons/flags/arab.png",
    ru: "/icons/flags/russia.png",
    fr: "/icons/flags/france.png",
    ha: "/icons/flags/nigeria.png",
  };

  const languageNames = {
    en: "EN",
    tr: "TR",
    ar: "AR",
    ru: "RU",
    fr: "FR",
    ha: "HA",
  };

  const currentFlag = flagIcons[locale] || flagIcons.en;
  const currentLanguageName = languageNames[locale] || languageNames.en;

  return (
    <div className={"flex items-center ml-2 xl:pr-4"}>
      <Button
        className={[styles.buttonBase, "mr-0 !h-fit"]}
        color={small || headerVariant === "second" ? "#1d1d1b" : "white"}
        colorScheme="none"
        onClick={onOpen}
      >
        <img
          width={18}
          className={styles.image}
          src={currentFlag}
          alt={currentLanguageName}
        />
        <span className="font-normal text-sm">{currentLanguageName}</span>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent maxW={200} backgroundColor={"white"}>
          <DrawerHeader className={styles.drawerHeader}>
            <div className="text-lg font-normal">{t("dil_seciniz")}</div>
            <DrawerCloseButton top={3.5} />
          </DrawerHeader>

          <DrawerBody className={styles.drawerBody}>
            <Button
              onClick={() => onLanguageChange("tr")}
              className={styles.languageButton}
            >
              <img
                width={22}
                className={styles.image}
                src={flagIcons.tr}
                alt="Turkish"
              />
              <div className={styles.buttonText}>Türkçe</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("en")}
              className={styles.languageButton}
            >
              <img
                width={22}
                className={styles.image}
                src={flagIcons.en}
                alt="English"
              />
              <div className={styles.buttonText}>English</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("ar")}
              className={styles.languageButton}
            >
              <img
                width={22}
                className={styles.image}
                src={flagIcons.ar}
                alt="العربية"
              />
              <div className={styles.buttonText}>العربية</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("ru")}
              className={styles.languageButton}
            >
              <img
                width={22}
                className={styles.image}
                src={flagIcons.ru}
                alt="Pусский"
              />
              <div className={styles.buttonText}>Pусский</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("fr")}
              className={styles.languageButton}
            >
              <img
                width={22}
                className={styles.image}
                src={flagIcons.fr}
                alt="Français"
              />
              <div className={styles.buttonText}>Français</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("ha")}
              className={styles.languageButton}
            >
              <img
                width={22}
                className={styles.image}
                src={flagIcons.ha}
                alt="Hausa"
              />
              <div className={styles.buttonText}>Hausa</div>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
