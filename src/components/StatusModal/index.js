import { useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Button from "@components/Button";
import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";

export default function StatusModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);
  return (
    <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClose={onClose} />
        <ModalBody className="my-10 flex flex-col justify-center items-center">
          <CheckCircleIcon w={20} h={20} />
          <div className="text-2xl mt-5">Başarılı</div>
          <div className="text-center mt-2">
            Bize ulaştığınız için teşekkür ederiz. Size en kısa sürede geri
            dönüş yapacağız.
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
