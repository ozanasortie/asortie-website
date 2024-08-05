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
        background={"rgba(0,0,0,0.8)"}
      >
        <PopoverBody className="flex justify-center items-center">
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">Hakkımızda</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">Felsefemiz</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">Referanslar</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">Asortie VIP</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">
              Müşteri Hakları
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">
              İnsan Kaynakları
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">
              Şikayet ve Öneri
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">Asortie TV</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <div className="text-white hover:text-theme-color">
              Yasal Uyarılar
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
