"use client";
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import InformationForm from "./InformationForm";
import Button from "@components/Button";
import Transition from "@/components/Transition";

function InformationField() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 270)
      );
    }
  }, []);

  return (
    <div className="w-full lg:w-2/5 h-full lg:sticky top-24 z-40 !text-black">
      <Transition
        transition={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 90 },
        }}
        className="w-full flex flex-col items-center"
      >
        <Transition
          className="w-full flex flex-col items-center"
          transition={{ duration: 1 }}
          animate={small ? { y: 20 } : { y: 0 }}
        >
          <Button
            background="black"
            className="w-[95%] flex items-center justify-center py-4"
            text={"ÜRÜN BİLGİSİ TALEP ET"}
            onClick={onOpen}
          />

          <InformationForm isOpen={isOpen} onClose={onClose} />

          <div className="w-[95%] space-y-2 mt-2">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <Button
                background="transparent"
                className="w-full lg:w-[49.5%] mb-3 lg:mb-0 flex items-center justify-center py-4 border !border-[#075e54]"
                text={"WhatsApp: +90 549 460 30 07"}
                onClick={onOpen}
              />
              <Button
                background="transparent"
                className="w-full lg:w-[49.5%] flex items-center justify-center py-4 border border-theme-color"
                text={"Telefon: +90 212 675 04 46"}
                onClick={onOpen}
              />
            </div>
            <Button
              background="transparent"
              className="w-[100%] flex items-center justify-center py-4"
              text={"Modeli Tavsiye Et"}
              onClick={onOpen}
            />
            <div></div>
            <div className="underline"></div>
          </div>
        </Transition>
      </Transition>
    </div>
  );
}

export default InformationField;
