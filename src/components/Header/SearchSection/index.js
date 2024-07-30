import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";

import Button from "@components/Button";
import ResultItem from "./ResultItem";
import styles from "./searchSection.module.css";
import Search from "@assets/icons/search.png";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchSection({ small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        className={"lg:mr-4 max-lg:mr-2"}
        ref={btnRef}
        colorScheme="none"
        onClick={onOpen}
      >
        <SearchIcon
          color={small ? "#1d1d1b" : "white"}
          fontWeight={"thin"}
          boxSize={5}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent className="h-[87.5vh]" backgroundColor={"#1d1d1b"}>
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerCloseButton top={5} right={5} color={"white"} size={25} />
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <Input
              color={"white"}
              fontSize={50}
              height={100}
              textAlign={"center"}
              outline={"none"}
              _focus={"none"}
              _active={"none"}
              outlineColor={"none"}
              paddingX={10}
              border={0}
              focusBorderColor="#1d1d1b"
              placeholder="Ürün Ara"
              borderBottom={1}
              borderBottomColor={"white"}
            />

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
