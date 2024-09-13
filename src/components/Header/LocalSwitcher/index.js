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
import Image from "next/image";
import { useRef, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import Button from "@components/Button";
import styles from "./localSwitcher.module.css";

import eng from "@assets/icons/flags/eng.png";
import turkey from "@assets/icons/flags/turkey.png";
import arab from "@assets/icons/flags/arab.png";
import france from "@assets/icons/flags/france.png";
import nigeria from "@assets/icons/flags/nigeria.png";

export default function LocalSwitcher({ headerVariant, small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname(); // Current pathname
  const router = useRouter();
  const locale = useLocale(); // Current locale

  function onLanguageChange(lang) {
    const currentLocale = locale;
    const nextLocale = lang;
    const pathSegments = pathname.split("/").filter(Boolean);

    pathSegments[0] = nextLocale; // Mevcut dili yeni dil ile değiştir

    const newPathname = `/${pathSegments.join("/")}`;
    startTransition(() => {
      router.replace(newPathname);
    });
  }

  const flagIcons = {
    en: eng,
    tr: turkey,
    ar: arab,
    fr: france,
    ha: nigeria,
  };

  const languageNames = {
    en: "EN",
    tr: "TR",
    ar: "AR",
    fr: "FR",
    ha: "HA",
  };

  const currentFlag = flagIcons[locale] || flagIcons.en;
  const currentLanguageName = languageNames[locale] || languageNames.en;

  return (
    <div className={"flex items-center ml-2"}>
      <Button
        className={[styles.buttonBase, "mr-0 !h-fit"]}
        color={small || headerVariant === "second" ? "#1d1d1b" : "white"}
        colorScheme="none"
        onClick={onOpen}
      >
        <Image
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
            <div className="text-lg font-normal">Dil Seçiniz</div>
            <DrawerCloseButton top={3.5} />
          </DrawerHeader>

          <DrawerBody className={styles.drawerBody}>
            <Button
              onClick={() => onLanguageChange("tr")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={turkey}
                alt="Turkish"
              />
              <div className={styles.buttonText}>Türkçe</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("en")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={eng}
                alt="English"
              />
              <div className={styles.buttonText}>English</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("ar")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={arab}
                alt="Arapça"
              />
              <div className={styles.buttonText}>Arapça</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("fr")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={france}
                alt="Fransızca"
              />
              <div className={styles.buttonText}>Fransızca</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("ha")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={nigeria}
                alt="Hausaca"
              />
              <div className={styles.buttonText}>Hausa</div>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
