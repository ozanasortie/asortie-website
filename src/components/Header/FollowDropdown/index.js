import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Image from "next/image";

import Facebook from "@assets/icons/socials/facebook.png";
import Youtube from "@assets/icons/socials/youtube.png";
import Instagram from "@assets/icons/socials/instagram.png";

import styles from "../header.module.css";

export default function FollowDropdown() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger className="w-auto">
        <span className={styles.navLink} href={"/"}>
          Takip Et <ChevronDownIcon mb={1} />
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
        <PopoverArrow backgroundColor={"#1d1d1b"} color={"#1d1d1b"} />
        <PopoverBody className="flex justify-center items-center">
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <Image
              width={20}
              className="mt-1 mr-2"
              src={Youtube}
              alt="Youtube"
            />{" "}
            <div className="text-white hover:text-theme-color">Youtube</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <Image
              width={19}
              className="mr-2"
              src={Instagram}
              alt="Instagram"
            />{" "}
            <div className="text-white hover:text-theme-color">Instagram</div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5">
            <Image width={19} className="mr-2" src={Facebook} alt="Facebook" />{" "}
            <div className="text-white hover:text-theme-color">Facebook</div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
