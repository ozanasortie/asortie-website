import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import NavLink from "@components/NavLink";

import styles from "../header.module.css";

export default function ModernMenu({ data, t }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <span>
          <NavLink className={styles.navLink} href={"/collection"}>
            Modern
          </NavLink>
        </span>
      </PopoverTrigger>
      <PopoverContent
        className="mt-[35px]"
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
          {data &&
            data.map((item) => {
              return (
                <NavLink
                  key={"collection-" + item.id}
                  href={"/collection" + "/" + item.url}
                  className="flex items-center cursor-pointer my-3 group font-light"
                >
                  <div className="text-white relative">
                    {item.kategori}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </NavLink>
              );
            })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
