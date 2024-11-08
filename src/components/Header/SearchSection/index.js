import React, { useState, useCallback, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import { debounce } from "lodash";

import Button from "@components/Button";
import ResultItem from "./ResultItem";
import styles from "./searchSection.module.css";
import { fetchSearchResult } from "@services/generalService";
import Link from "next/link";
import { Loading03Icon } from "hugeicons-react";

const ResultsSection = ({ title, items, renderItem }) => {
  if (!items || items.length === 0) return null;

  return (
    <>
      <h1 className="w-full text-3xl xl:text-4xl mb-8 mt-5 text-title-color font-light uppercase">
        {title}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-4 place-items-start place-content-center mb-10">
        {items.map(renderItem)}
      </div>
    </>
  );
};

export default function SearchSection({ headerVariant, small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("");

  const fetchResults = async (term) => {
    setLoading(true);
    try {
      const data = await fetchSearchResult(locale, term);
      setResult(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchResults = useCallback(
    debounce(async (term) => {
      await fetchResults(term);
    }, 300),
    [locale]
  );

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchResults("");
    };
    fetchInitialData();
  }, [locale]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedFetchResults(term);
  };

  return (
    <>
      <Button
        className={"mr-4 lg:mr-6 h-fit"}
        colorScheme="none"
        onClick={onOpen}
      >
        <SearchIcon
          color={small || headerVariant === "second" ? "#1d1d1b" : "white"}
          fontWeight={"thin"}
          boxSize={5}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent className="h-full lg:h-[88vh]">
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerCloseButton top={5} right={7} size={40} />
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <Input
              autoFocus
              className="!text-3xl !rounded-none !border-0 !border-b !border-gray-300 mt-4 mb-5 py-6 lg:py-10"
              textAlign={"center"}
              paddingX={10}
              focusBorderColor="white"
              placeholder={t("input_arama")}
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {loading ? (
              <div className="flex justify-center items-center mt-10">
                <Loading03Icon className="animate-spin-slow" size={45} />
              </div>
            ) : result ? (
              <ScaleFade in={true}>
                <ResultsSection
                  title={t("modeller")}
                  items={result.products}
                  renderItem={(item) => (
                    <ResultItem
                      onClose={onClose}
                      image={item.image}
                      key={item.id}
                      name={item.urun_adi}
                      url={
                        "/collection/" +
                        item.kategori_slug.urlseo +
                        "/" +
                        item.id
                      }
                    />
                  )}
                />
                <ResultsSection
                  title={t("blog")}
                  items={result.blogs}
                  renderItem={(blog) => (
                    <ResultItem
                      onClose={onClose}
                      image={blog.image}
                      key={blog.id}
                      name={blog.baslik}
                      url={"/blog/" + blog.id}
                    />
                  )}
                />
                <ResultsSection
                  title={t("haberler")}
                  items={result.news}
                  renderItem={(item) => (
                    <ResultItem
                      onClose={onClose}
                      image={item.image}
                      key={item.id}
                      name={item.baslik}
                      url={"/news/" + item.id}
                    />
                  )}
                />
                <ResultsSection
                  title={t("koleksiyon")}
                  items={result.category}
                  renderItem={(item) => (
                    <Link
                      href={"/collection/" + item.kategori_slug}
                      onClick={onClose}
                      key={item.id}
                      className="w-full text-center p-4 text-xl hover:text-theme-color motion-safe:transition border border-gray-200 rounded-md"
                    >
                      {item.kategori}
                    </Link>
                  )}
                />

                {!result.products?.length &&
                  !result.blogs?.length &&
                  !result.news?.length &&
                  !result.category?.length && (
                    <div className="text-2xl text-center mt-10 flex flex-col justify-center items-center">
                      {t("arama_icerik_bulunamadi")}
                      <Link
                        href={"/collection"}
                        className="bg-black text-white w-[210px] mt-5 rounded-md p-2 hover:text-theme-color motion-safe:transition-all"
                        onClick={onClose}
                      >
                        {t("daha_fazla_kesfet")}
                      </Link>
                    </div>
                  )}
              </ScaleFade>
            ) : (
              <ScaleFade
                in={true}
                className="text-2xl text-center mt-10 flex flex-col justify-center items-center"
              >
                {t("arama_icerik_bulunamadi")}
                <Link
                  href={"/collection"}
                  className="bg-black text-white w-[210px] mt-5 rounded-md p-2 hover:text-theme-color motion-safe:transition-all"
                  onClick={onClose}
                >
                  {t("daha_fazla_kesfet")}
                </Link>
              </ScaleFade>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
