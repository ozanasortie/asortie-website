"use client";
import DigitalCatalogueForm from "@/app/[locale]/(pages)/(home)/components/DigitalCatalogueForm";
import { useDisclosure } from "@chakra-ui/react";
import Button from "@components/Button";
import { CatalogueIcon } from "hugeicons-react";

export default function CatalogueFormButton({}) {
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();
  return (
    <>
      <Button
        className="mr-3 !h-fit !bg-transparent !rounded-md px-4 py-1 !border !border-gray-400 mx-3"
        text={"E-Katalog"}
        color="white"
        fontWeight={"font-normal"}
        textSize={"text-sm"}
        onClick={onFormOpen}
      >
        <CatalogueIcon className="mr-2 !hover:text-theme-color" />
      </Button>
      <DigitalCatalogueForm isOpen={isFormOpen} onClose={onFormClose} />
    </>
  );
}
