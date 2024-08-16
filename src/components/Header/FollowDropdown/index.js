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
        <span className="ml-6 text-white font-bold" href={"/"}>
          TAKİP ET
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
            {/* <Image width={20} className="mt-1 mr-2" src={Youtube} alt="Youtube" />{" "} */}
            <div className="text-white relative">
              Youtube
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            {/* <Image width={19} className="mr-2" src={Instagram} alt="Instagram" />{" "} */}
            <div className="text-white relative">
              Instagram
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            {/* <Image width={19} className="mr-2" src={Facebook} alt="Facebook" />{" "} */}
            <div className="text-white relative">
              Facebook
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
