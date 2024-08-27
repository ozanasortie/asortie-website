import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import NavLink from "@components/NavLink";

import styles from "../header.module.css";

export default function CollectionMenu({ data }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <NavLink className={styles.navLink} href={"/collection"}>
          Koleksiyon
        </NavLink>
      </PopoverTrigger>
      <PopoverContent
        className="mt-8"
        border={0}
        borderRadius={2}
        width={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        background={"#a67f5e"}
        zIndex={99}
      >
        <PopoverBody className="flex flex-wrap justify-center items-center w-[100%] rounded-sm">
          {data &&
            data.map((item) => {
              return (
                <NavLink
                  key={"collection-" + item.id}
                  href={"/collection" + "/" + item.url}
                  className="flex items-center cursor-pointer mr-5 my-3 group"
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
