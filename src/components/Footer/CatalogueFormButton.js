"use client";
import { useTranslations } from "next-intl";
import { CatalogueIcon } from "hugeicons-react";
import { useDisclosure } from "@chakra-ui/react";

import DigitalCatalogueForm from "@/app/[locale]/(pages)/(home)/components/DigitalCatalogueForm";
import Button from "@components/Button";

export default function CatalogueFormButton({}) {
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();

  const t = useTranslations("");

  return (
    <>
      <Button
        className="mr-3 !h-fit !bg-transparent !rounded-md px-4 py-1 !border !border-gray-400 mx-3"
        text={t('katalog_buton')}
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
