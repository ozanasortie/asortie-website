import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import Link from "next/link";

import styles from "../header.module.css";

export default function CollectionMenu({ data }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link className={styles.navLink} href={"/collection"}>
          Koleksiyon
        </Link>
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
                <Link
                  key={"collection-" + item.id}
                  href={"/collection" + "/" + item.url}
                  className="flex items-center cursor-pointer mr-5 my-3 group"
                >
                  <div className="text-white relative">
                    {item.kategori}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </Link>
              );
            })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
