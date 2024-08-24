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
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import Button from "@components/Button";

import Instagram from "@assets/icons/socials/instagram.png";
import Facebook from "@assets/icons/socials/facebook.png";
import Youtube from "@assets/icons/socials/youtube.png";
import logo from "@assets/logo-left.png";

import styles from "./mobileMenu.module.css";

export default function MobileMenu({ categories, isSmall }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      className={
        "flex items-center mr-4 xl:hidden min-w-[50px] absolute left-5"
      }
    >
      <Button className={styles.buttonBase} colorScheme="none" onClick={onOpen}>
        <HamburgerIcon fontSize={30} color={isSmall ? "black" : "white"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent backgroundColor={"#1d1d1b"}>
          <DrawerHeader className={styles.drawerHeader}>
            <Image src={logo} width={50} alt="Logo" />
            <DrawerCloseButton top={3.5} color={"white"} />
          </DrawerHeader>

          <DrawerBody className={styles.drawerBody}>
            <Link onClick={onClose} className={styles.menuItem} href="/">
              HOME
            </Link>
            <Accordion allowToggle>
              <AccordionItem className="!border-0 !p-0 !py-3">
                <AccordionButton
                  _expanded={{ bg: "var(--theme-color)", color: "white" }}
                  className="!p-0"
                >
                  <Box as="span" flex="1" textAlign="left">
                    COLLECTION
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="flex flex-col items-start" pb={0}>
                  <Link
                    onClick={onClose}
                    className={styles.menuItem}
                    href="/collection"
                  >
                    All
                  </Link>
                  {categories &&
                    categories.map((item) => {
                      return (
                        <Link
                          key={"collection-" + item.id}
                          className={styles.menuItem}
                          href={"/collection" + "/" + item.kategori}
                        >
                          {item.kategori}
                        </Link>
                      );
                    })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Link className={styles.menuItem} href="/detail">
              HOTEL FURNITURES
            </Link>
            <Link className={styles.menuItem} href="/detail">
              ABOUT US
            </Link>
            <Link className={styles.menuItem} href="/detail">
              CONTACT
            </Link>
            <Link className={styles.menuItem} href="/blog">
              BLOG
            </Link>
            <FollowSection />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function FollowSection() {
  return (
    <div className="flex flex-col">
      <div className="py-3 border-b border-white">FOLLOW</div>
      <div className="flex justify-around">
        <Button
          color={"white"}
          className="py-1 hover:text-theme-color motion-safe:transition !h-fit"
        >
          <div>Youtube</div>
        </Button>
        <Button
          color={"white"}
          className="py-1 hover:text-theme-color motion-safe:transition"
        >
          <div>Instagram</div>
        </Button>
        <Button
          color={"white"}
          className="py-1 hover:text-theme-color motion-safe:transition"
        >
          <div>Facebook</div>
        </Button>
      </div>
    </div>
  );
}
