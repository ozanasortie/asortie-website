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
import Corporate from "./Corporate";

import logo from "@assets/logo.png";
import arma from "@assets/logo-left.png";
import styles from "./header.module.css";

export default function Header() {
  const t = useTranslations("Header");
  const categories = useSelector((state) => state.categories);
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
        <nav className={styles.smallNav}></nav>
        <nav className={`${styles.navBase} ${small ? styles.navSmall : ""}`}>
          <MobileMenu categories={categories.data} isSmall={small} />
          <div className={styles.left}>
            <div className={styles.desktopItems}>
              <NavItem href="/">{t("home")}</NavItem>
              <CollectionMenu data={categories.data} />
              <NavItem href="/detail">PROJELER</NavItem>
            </div>
          </div>
          <Link className="mx-10" href={"/"}>
            <Image
              src={small ? arma : logo}
              width={small ? 70 : 240}
              alt="Logo"
            />
          </Link>
          <div className={styles.right}>
            <div className={styles.desktopItems}>
              <NavItem href="/blog">Blog</NavItem>
              <Corporate />
              <NavItem href="/detail">İletişim</NavItem>
            </div>
          </div>
          <div className="flex items-center absolute right-5">
            <SearchSection small={small} />
            <LocalSwitcher small={small} />
            <FollowDropdown small={small} />
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
