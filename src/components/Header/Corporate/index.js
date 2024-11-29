import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

import styles from "../header.module.css";
import Link from "next/link";

export default function FollowDropdown({ t }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger className="w-auto">
        <Link className={styles.navLink} href={"/corporate/hakkimizda"}>
          {t("kurumsal")}
        </Link>
      </PopoverTrigger>
      <PopoverContent
        className="mt-[36px]"
        border={0}
        borderRadius={10}
        padding={0}
        width={250}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        background={"transparent"}
        zIndex={99}
      >
        <PopoverBody className="bg-black bg-opacity-80 flex flex-col justify-center items-start w-fit rounded-md">
          <Link className="my-3" href="/corporate/hakkimizda">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("asortie_hakkinda")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/felsefemiz">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("felsefemiz")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/referanslar">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("referanslar")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/asortie-vip">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                Asortie VIP
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/musteri-haklari">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("musteri_haklari")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/insan-kaynaklari">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("insan_kaynaklari")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/sikayet-ve-oneri">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("sikayet_ve_oneri")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link target="_blank" className="my-3" href="https://www.youtube.com/@asortiemobilya">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("asortie_tv_k")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <Link className="my-3" href="/corporate/biz-kimiz">
            <div className="flex items-center cursor-pointer mr-5 group">
              <div className="text-white font-light relative">
                {t("yasal_uyarilar")}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
