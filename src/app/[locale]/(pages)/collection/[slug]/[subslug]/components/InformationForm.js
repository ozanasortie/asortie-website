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

export default function InformationForm({ title, isOpen, onClose }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="backdrop-blur-sm" />
      <ModalContent
        width={"95%"}
        borderRadius={5}
        className="w-[95%]"
        background={"white"}
        py={5}
        pt={10}
      >
        <ModalHeader>
          <div className="font-light text-3xl text-center">{title}</div>
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
            text={"BİLGİ AL"}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
