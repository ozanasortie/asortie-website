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
import { useLocale } from "next-intl";
import { debounce } from "lodash";

import Button from "@components/Button";
import ResultItem from "./ResultItem"; // Adjust this import if needed
import styles from "./searchSection.module.css";
import { fetchSearchResult } from "@services/generalService";
import Link from "next/link";
import { Loading01Icon, Loading03Icon } from "hugeicons-react";

export default function SearchSection({ headerVariant, small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch search results
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

  // Debounced function to fetch search results
  const debouncedFetchResults = useCallback(
    debounce(async (term) => {
      await fetchResults(term);
    }, 300), // Debounce delay in milliseconds
    [locale]
  );

  // Fetch initial data when the component mounts
  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchResults(""); // Fetch with empty search term for initial data
    };

    fetchInitialData();
  }, [locale]);

  // Handle input change and trigger debounced search
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
        <DrawerContent className="h-[88vh]">
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerCloseButton top={5} right={7} size={40} />
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <Input
              autoFocus
              fontSize={40}
              height={90}
              textAlign={"center"}
              outline={"none"}
              _focus={"none"}
              _active={"none"}
              outlineColor={"none"}
              paddingX={10}
              border={0}
              focusBorderColor="white"
              placeholder="Ne Aramıştınız ?"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {loading ? (
              <div className="flex justify-center items-center mt-10">
                <Loading03Icon className="animate-spin-slow" size={45} />
              </div>
            ) : result ? (
              <ScaleFade in={true}>
                {result.products && result.products.length > 0 && (
                  <>
                    <h1 className="w-full border-b border-gray-300 pb-2 text-3xl xl:text-4xl mb-6 mt-10 text-title-color">
                      Ürünler
                    </h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-start place-content-center">
                      {result.products.map((item) => (
                        <ResultItem key={item.id} name={item.urun_adi} />
                      ))}
                    </div>
                  </>
                )}

                {result.blogs && result.blogs.length > 0 && (
                  <>
                    <h1 className="w-full border-b border-gray-300 pb-2 text-3xl xl:text-4xl mb-6 mt-10 text-title-color">
                      Blog
                    </h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-start place-content-center">
                      {result.blogs.map((blog) => (
                        <ResultItem key={blog.id} name={blog.baslik} />
                      ))}
                    </div>
                  </>
                )}

                {result.news && result.news.length > 0 && (
                  <>
                    <h1 className="w-full border-b border-gray-300 pb-2 text-3xl xl:text-4xl mb-6 mt-10 text-title-color">
                      Haberler
                    </h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-start place-content-center">
                      {result.blogs.map((item) => (
                        <ResultItem key={item.id} name={item.baslik} />
                      ))}
                    </div>
                  </>
                )}

                {result.category && result.category.length > 0 && (
                  <>
                    <h1 className="w-full border-b border-gray-300 pb-2 text-3xl xl:text-4xl mb-6 mt-10 text-title-color">
                      Kategoriler
                    </h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                      {result.category.map((item) => (
                        <Link
                          href={"/collection/" + item.url}
                          key={item.id}
                          className="text-xl mb-6 hover:text-theme-color motion-safe:transition"
                        >
                          {item.kategori}
                        </Link>
                      ))}
                    </div>
                  </>
                )}

                {(!result.products || result.products.length === 0) &&
                  (!result.blogs || result.blogs.length === 0) &&
                  (!result.news || result.news.length === 0) &&
                  (!result.category || result.category.length === 0) && (
                    <div className="text-2xl text-center mt-10 flex flex-col justify-center items-center">
                      Aradığınız içerik bulunamadı.
                      <Button
                        color="white"
                        background="black"
                        className={"w-[200px] mt-5"}
                        text={"KEŞFET"}
                      />
                    </div>
                  )}
              </ScaleFade>
            ) : (
              <ScaleFade
                in={true}
                className="text-2xl text-center mt-10 flex flex-col justify-center items-center"
              >
                Aradığınız içerik bulunamadı.
                <Button
                  color="white"
                  background="black"
                  className={"w-[200px] mt-5"}
                  text={"KEŞFET"}
                />
              </ScaleFade>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
