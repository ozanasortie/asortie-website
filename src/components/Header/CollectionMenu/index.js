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
          Koleksiyon
        </Link>
      </PopoverTrigger>
      <PopoverContent
        border={0}
        borderRadius={2}
        width={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={13}
        background={
          "radial-gradient(circle, rgba(0,0,0,0.8260097984506303) 8%, rgba(232,178,81,1) 99%, rgba(210,165,47,1) 100%)"
        }
        zIndex={99}
      >
        <PopoverBody className="flex flex-wrap justify-center items-center w-[100%] rounded-sm">
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Klasik Koltuk Takımları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Klasik Yemek Odası Takımları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Klasik Yatak Odası Takımları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Köşe Takımı Modelleri
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Duvar ve TV Üniteleri
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Bebek ve Genç Odaları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Ofis Mobilyaları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Aksesuarlar
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Otel Mobilyaları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Modern Koleksiyon
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Avizeler
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Klasik Berjerler
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mr-5 my-3 group">
            <div className="text-white relative">
              Pet Mobilyaları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
