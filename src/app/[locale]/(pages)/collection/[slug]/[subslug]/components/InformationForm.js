import Button from "@/components/Button";
import Input from "@/components/Input";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";

export default function InformationForm({ isOpen, onClose }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="backdrop-blur-sm" />
      <ModalContent
        className="w-full"
        background={"white"}
        maxW={"40rem"}
        py={5}
      >
        <ModalHeader>
          <div className="font-light text-3xl">ÜRÜN BİLGİSİ TALEP ET</div>
        </ModalHeader>
        <ModalCloseButton color={"black"} />
        <ModalBody
          background={"transparent"}
          className="w-full flex flex-col items-start"
        >
          <Input placeholder="Ad Soyad" className="mb-5" />
          <Input placeholder="E-Mail" className="mb-5" />
          <Input placeholder="Telefon" className="mb-5" />
          <Textarea
            _placeholder={{ color: "black" }}
            placeholder="Mesaj"
            className="mb-5"
            borderColor={"black"}
          ></Textarea>
          <Button
            background="black"
            color="white"
            className="w-full flex items-center justify-center py-4"
            text={"TALEP ET"}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
