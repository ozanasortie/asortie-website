"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import FollowDropdown from "./FollowDropdown";
import SearchSection from "./SearchSection";
import LocalSwitcher from "./LocalSwitcher";
import MobileMenu from "./MobileMenu";
import CollectionMenu from "./CollectionMenu";
import Corporate from "./Corporate";

import logo from "@assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
  const t = useTranslations("Header");
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 1));
    }
  }, []);

  return (
    <header>
      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -90 },
        }}
        className={`${styles.headerBase} ${small ? styles.headerSmall : ""}`}
      >
        <nav className={`${styles.navBase} ${small ? styles.navSmall : ""}`}>
          <MobileMenu isSmall={small} />
          <div className={styles.left}>
            <div className={styles.desktopItems}>
              <NavItem href="/">{t("home")}</NavItem>
              <CollectionMenu />
              <Corporate />
            </div>
          </div>
          <Link href={"/"}>
            <Image src={logo} width={180} alt="Logo" />
          </Link>
          <div className={styles.right}>
            <div className={styles.desktopItems}>
              <FollowDropdown />
              <NavItem href="/detail">Blog</NavItem>
              <NavItem href="/detail">İletişim</NavItem>
            </div>
          </div>

          <div className="absolute right-5 flex items-center">
            <SearchSection small={small} />
            <LocalSwitcher />
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
