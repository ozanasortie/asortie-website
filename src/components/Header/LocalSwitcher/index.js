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
  const pathname = usePathname();
  const router = useRouter();
  const localActive = useLocale();

  function onLanguageChange(lang) {
    const nextLocale = lang;
    const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);
    startTransition(() => {
      router.replace(newPathname);
    });
  }

  return (
    <div className={"flex items-center"}>
      <Button
        className={[styles.buttonBase, "mr-0"]}
        color={small ? "#1d1d1b" : "white"}
        colorScheme="none"
        onClick={onOpen}
      >
        EN
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
              <div className={styles.buttonText}>İngilizce</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("ar")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={arab}
                alt="Arabic"
              />
              <div className={styles.buttonText}>Arapça</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("en")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={eng}
                alt="Russian"
              />
              <div className={styles.buttonText}>Rusça</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("en")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={eng}
                alt="Fransızca"
              />
              <div className={styles.buttonText}>Fransızca</div>
            </Button>
            <Button
              onClick={() => onLanguageChange("en")}
              className={styles.languageButton}
            >
              <Image
                width={22}
                className={styles.image}
                src={eng}
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
