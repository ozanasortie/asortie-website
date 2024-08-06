import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Flex,
  SimpleGrid,
  PopoverArrow,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

import styles from "../header.module.css";

export default function CollectionMenu() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link className={styles.navLink} href={"/collection"}>
          Koleksiyon <ChevronDownIcon mb={1} />
        </Link>
      </PopoverTrigger>
      <PopoverContent
        mt={6}
        py={4}
        border={0}
        borderRadius={2}
        width={"100vw"}
        background={"rgba(0,0,0,0.8)"}
        zIndex={99}
      >
        <PopoverBody className="flex flex-wrap justify-center items-center">
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Klasik Koltuk Takımları
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Klasik Yemek Odası Takımları
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Klasik Yatak Odası Takımları
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Köşe Takımı Modelleri
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Duvar ve TV Üniteleri
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Bebek ve Genç Odaları
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Ofis Mobilyaları
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">Aksesuarlar</div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Otel Mobilyaları
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Modern Koleksiyon
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">Avizeler</div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Klasik Berjerler
            </div>
          </div>
          <div className="flex items-center  cursor-pointer mr-5 my-3">
            <div className="text-white hover:text-theme-color">
              Pet Mobilyaları
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
