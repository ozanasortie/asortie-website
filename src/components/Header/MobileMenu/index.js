import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";

import Button from "@components/Button";
import logo from "@assets/logo-left.png";

import styles from "./mobileMenu.module.css";

export default function MobileMenu({
  t,
  variant,
  categories,
  decorations,
  isSmall,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      className={
        "flex items-center mr-4 xl:hidden absolute left-3"
      }
    >
      <Button className={styles.buttonBase} colorScheme="none" onClick={onOpen}>
        <HamburgerIcon
          fontSize={30}
          color={variant === "second" || isSmall ? "black" : "white"}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent backgroundColor={"white"}>
          <DrawerHeader className={styles.drawerHeader}>
            <img src={logo} width={50} alt="Logo" />
            <DrawerCloseButton top={3.5} color={"black"} />
          </DrawerHeader>

          <DrawerBody className={styles.drawerBody}>
            <Link onClick={onClose} className={styles.menuItem} href="/">
              {t("anasayfa")}
            </Link>
            <Accordion allowToggle>
              <AccordionItem className="!border-0 !p-0 !py-3">
                <AccordionButton
                  _expanded={{ bg: "var(--theme-color)", color: "black" }}
                  className="!p-0"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="uppercase"
                  >
                    {t("koleksiyon")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="flex flex-col items-start" pb={0}>
                  <Link
                    onClick={onClose}
                    className={styles.menuItem}
                    href="/collection"
                  >
                    {t("tumu")}
                  </Link>
                  {categories &&
                    categories.map((item) => {
                      return (
                        <Link
                          key={"collection-" + item.id}
                          className={styles.menuItem}
                          href={"/collection" + "/" + item.url}
                          onClick={onClose}
                        >
                          {item.kategori}
                        </Link>
                      );
                    })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem className="!border-0 !p-0 !py-3">
                <AccordionButton
                  _expanded={{ bg: "var(--theme-color)", color: "black" }}
                  className="!p-0"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="uppercase"
                  >
                    {t("dekorasyon")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="flex flex-col items-start" pb={0}>
                  <Link
                    onClick={onClose}
                    className={styles.menuItem}
                    href="/decoration"
                  >
                    {t("tumu")}
                  </Link>
                  {decorations &&
                    decorations.map((item) => {
                      return (
                        <Link
                          key={"decoration-" + item.id}
                          className={styles.menuItem}
                          href={"/decoration" + "/" + item.url}
                          onClick={onClose}
                        >
                          {item.kategori}
                        </Link>
                      );
                    })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Link
              className={styles.menuItem}
              href="/corporate/hakkimizda"
              onClick={onClose}
            >
              {t("kurumsal")}
            </Link>
            <Link className={styles.menuItem} href="/news" onClick={onClose}>
              {t("haberler")}
            </Link>
            <Link className={styles.menuItem} href="/contact" onClick={onClose}>
              {t("iletisim")}
            </Link>
            <FollowSection t={t} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function FollowSection({ t }) {
  return (
    <div className="flex flex-col justify-start">
      <div className="py-3 border-b mb-2 border-gray-300 uppercase">{t("takip")}</div>
      <div className="flex justify-around">
        <Link
          target="_blank"
          href={"https://www.youtube.com/channel/UCUNag5nQXWxWS9qMe1-B1qw"}
          className="py-1 hover:text-theme-color motion-safe:transition text-black"
        >
          <div>Youtube</div>
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/asortiemobilya/"}
          className="py-1 hover:text-theme-color motion-safe:transition text-black"
        >
          <div>Instagram</div>
        </Link>
        <Link
          target="_blank"
          href={"https://www.facebook.com/asortiemobilya/"}
          className="py-1 hover:text-theme-color motion-safe:transition text-black"
        >
          <div>Facebook</div>
        </Link>
      </div>
    </div>
  );
}
