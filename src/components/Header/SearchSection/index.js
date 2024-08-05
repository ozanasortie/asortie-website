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

import Button from "@components/Button";
import ResultItem from "./ResultItem";
import styles from "./searchSection.module.css";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchSection({ small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className={"mr-4 lg:mr-4"} colorScheme="none" onClick={onOpen}>
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
        variant={"secondary"}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
        <DrawerContent className="h-[87.5vh]">
          <DrawerHeader className={styles.drawerHeader}>
            <DrawerCloseButton top={5} right={5} size={25} />
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <Input
              autoFocus
              fontSize={50}
              height={100}
              textAlign={"center"}
              outline={"none"}
              _focus={"none"}
              _active={"none"}
              outlineColor={"none"}
              paddingX={10}
              border={0}
              focusBorderColor="white"
              placeholder="Ürün Ara"
              mb={5}
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
