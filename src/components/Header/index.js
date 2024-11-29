"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

import SearchSection from "./SearchSection";
import LocalSwitcher from "./LocalSwitcher";
import MobileMenu from "./MobileMenu";
import CollectionMenu from "./CollectionMenu";
import ModernMenu from "./ModernMenu";
import DecorationMenu from "./DecorationMenu";
import Corporate from "./Corporate";

import styles from "./header.module.css";
import NavLink from "../NavLink";

export default function Header() {
  const t = useTranslations("");
  const categories = useSelector((state) => state.categories);
  const headerVariant = useSelector((state) => state.ui.headerVariant);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 1));
    }
  }, []);

  const navStyle =
    headerVariant === "second"
      ? "!text-background-color shadow-lg"
      : "text-white";

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
          <MobileMenu
            t={t}
            variant={headerVariant}
            decorations={categories.dekorasyon}
            categories={categories.koleksiyon}
            isSmall={small}
          />
          <div className={styles.left}>
            <div className={styles.desktopItems}>
              <NavLink className={styles.navLink} href="/">
                {t("anasayfa")}
              </NavLink>
              <CollectionMenu t={t} data={categories.koleksiyon} />
              <ModernMenu t={t} data={categories.koleksiyon}/>
            </div>
          </div>
          <Link className="mx-10" href={"/"}>
            {headerVariant === "second" ? (
              <img
                src={
                  small ? "/assets/logo-left.png" : "/assets/asortie-second.png"
                }
                width={small ? 70 : 240}
                className={`${small ? "max-md:w-[60px]" : "max-md:w-[160px]"}`}
                alt="Second Logo"
              />
            ) : (
              <img
                src={small ? "/assets/logo-left.png" : "/assets/logo.png"}
                width={small ? 70 : 240}
                className={`${small ? "max-md:w-[60px]" : "max-md:w-[160px]"}`}
                alt="Logo"
              />
            )}
          </Link>
          <div className={styles.right}>
            <div className={styles.desktopItems}>
              <DecorationMenu t={t} data={categories.dekorasyon} />
              <Corporate t={t} />
              <NavItem href="/contact"> {t("iletisim")}</NavItem>
            </div>
          </div>
          <div className="flex items-center absolute right-3">
            <SearchSection headerVariant={headerVariant} small={small} />
            <LocalSwitcher t={t} headerVariant={headerVariant} small={small} />
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
