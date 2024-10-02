"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import FollowDropdown from "./FollowDropdown";
import SearchSection from "./SearchSection";
import LocalSwitcher from "./LocalSwitcher";
import MobileMenu from "./MobileMenu";
import CollectionMenu from "./CollectionMenu";
import DecorationMenu from "./DecorationMenu";
import Corporate from "./Corporate";

import logo from "@assets/logo.png";
import arma from "@assets/logo-left.png";
import styles from "./header.module.css";
import NavLink from "../NavLink";

export default function Header() {
  const t = useTranslations("Header");
  const categories = useSelector((state) => state.categories);
  const headerVariant = useSelector((state) => state.ui.headerVariant);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 1));
    }
  }, []);

  const navStyle =
    headerVariant === "second" ? "!text-background-color" : "text-white";

  return (
    <header>
      <motion.div
        transition={{ duration: 0.5, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -70 },
        }}
        className={`${styles.headerBase} ${small ? styles.headerSmall : ""}`}
      >
        <nav
          className={`${styles.navBase} ${
            small ? styles.navSmall : ""
          } ${navStyle}`}
        >
          <MobileMenu categories={categories.koleksiyon} isSmall={small} />
          <div className={styles.left}>
            <div className={styles.desktopItems}>
              <NavLink className={styles.navLink} href="/">
                {t("home")}
              </NavLink>
              <CollectionMenu data={categories.koleksiyon} />
              <DecorationMenu data={categories.dekorasyon} />
            </div>
          </div>
          <Link className="mx-10" href={"/"}>
            <Image
              src={small ? arma : logo}
              width={small ? 70 : 240}
              className={`${small ? "max-md:w-[60px]" : "max-md:w-[180px]"}`}
              alt="Logo"
            />
          </Link>
          <div className={styles.right}>
            <div className={styles.desktopItems}>
              <Corporate />

              <NavLink className={styles.navLink} href="/news">
                HABERLER
              </NavLink>
              <NavItem href="/contact">İLETİŞİM</NavItem>
            </div>
          </div>
          <div className="flex items-center absolute right-7">
            <SearchSection headerVariant={headerVariant} small={small} />
            <LocalSwitcher headerVariant={headerVariant} small={small} />
            {/* <FollowDropdown headerVariant={headerVariant} small={small} /> */}
          </div>
        </nav>
      </motion.div>
    </header>
  );
}

function NavItem({ href, children }) {
  return (
    <Link className={styles.navLink} href={href}>
      {children}
    </Link>
  );
}
