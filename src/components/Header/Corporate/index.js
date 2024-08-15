import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import styles from "../header.module.css";

export default function FollowDropdown() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger className="w-auto">
        <span className={styles.navLink} href={"/"}>
          Kurumsal <ChevronDownIcon mb={1} />
        </span>
      </PopoverTrigger>
      <PopoverContent
        w={"100vw"}
        mt={5}
        border={0}
        borderRadius={0}
        py={1}
        background={"#a67f5e"}
      >
        <PopoverBody className="flex justify-center items-center">
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Hakkımızda
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Felsefemiz
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Referanslar
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Asortie VIP
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Müşteri Hakları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              İnsan Kaynakları
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Şikayet ve Öneri
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Asortie TV
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Yasal Uyarılar
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
