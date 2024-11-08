"use client";
import { useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useTranslations } from "next-intl";

export default function StatusModal({ isOpen, onClose, status }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const t = useTranslations("");

  const getStatusContent = () => {
    switch (status) {
      case "success":
        return {
          icon: <CheckCircleIcon color={"green"} w={20} h={20} />,
          message: t("durum_popup_basarili"),
        };
      case "error":
        return {
          icon: <WarningIcon color={"red"} w={20} h={20} />,
          message: t("durum_popup_basarisiz"),
        };
      default:
        return {
          icon: null,
          message: "",
        };
    }
  };

  const { icon, message } = getStatusContent();
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={onClose} />
        <ModalBody className="my-10 flex flex-col justify-center items-center">
          {icon}
          <div className="text-center text-lg mt-5">{message}</div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
