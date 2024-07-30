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
import CategoryItem from "./CategoryItem";

export default function CollectionMenu() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link className={styles.navLink} href={"/"}>
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
        zIndex={9999}
      >
        <PopoverArrow backgroundColor={"#1d1d1b"} color={"#1d1d1b"} />
        <PopoverBody className="z-50">
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 7 }} spacing={1}>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
