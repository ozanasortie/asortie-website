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
import arab from "@assets/icons/flags/arab.png";

export default function LocalSwitcher({ small }) {
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

  return (
    <div className={"flex items-center ml-2"}>
      <Button
        className={[styles.buttonBase, "mr-0 !h-fit"]}
        color={small ? "#1d1d1b" : "white"}
        colorScheme="none"
        onClick={onOpen}
      >
        <span className="font-normal">{locale === "en" ? "EN" : "TR"}</span>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent maxW={220} backgroundColor={"rgba(255,255,255,0.85)"}>
          <DrawerHeader className={styles.drawerHeader}>
            <div className="text-lg font-normal">Dil Seçiniz</div>
            <DrawerCloseButton top={3.5} />
          </DrawerHeader>

          <DrawerBody className={styles.drawerBody}>
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
              onClick={() => onLanguageChange("tr")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={arab}
                alt="Turkish"
              />
              <div className={styles.buttonText}>Türkçe</div>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
