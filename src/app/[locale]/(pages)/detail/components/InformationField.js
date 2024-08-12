import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";

import InformationForm from "./InformationForm";
import Button from "@components/Button";

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
    <div className="w-full lg:w-2/5 h-full lg:sticky top-24 z-40">
      <motion.div
        transition={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 90 },
        }}
        className="w-full flex flex-col items-center"
      >
        <motion.div
          transition={{ duration: 1 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -90 },
          }}
          className={`${small ? "hidden lg:block mb-5 mt-10" : "hidden"}`}
        >
          <h1 className="text-white font-light lg:text-4xl xl:text-6xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
            OLİMPOS YATAK ODASI
          </h1>
        </motion.div>
        <motion.div
          className="w-full flex flex-col items-center"
          transition={{ duration: 1 }}
          animate={small ? { y: 20 } : { y: 0 }}
        >
          <p className="w-[95%] font-light xl:text-base mt-7 lg:mt-0 mb-5 leading-relaxed [text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)]">
            Tüm gözleri üzerine çekecek olan ihtişamlı bir tasarıma sahip olan
            Olimpos gold yatak odası takımına şimdi daha yakından bakın. El
            oyması motifleri ile yaşam alanlarınızda şıklık ve görkemli bir
            tasarım katacak olan lüks yatak odası takımı kullanıcısını memnun
            ediyor. Etkileyici tasarımıyla görenleri büyüleyen klasik yatak
            odası takımı karyola, iki adet komodin, makyaj masası ve kıyafet
            dolabından oluşuyor. Ahşap klasik yatak odası takımının en önemli ve
            karakterini oluşturan ahşap oyma motifleri gerçek altın varak
            kaplama ile değerli alanlarınıza daha da değer katmaya geliyor.
            Karyola, makyaj aynası, komodin ve gardıropta tercih edilen oyma
            motifleri takımın ihtişamını arttırıyor. Klasik ve lüks mobilya
            severlerin hayallerindeki mobilyanın vücut bulmuş hali olan Olimpos
            gold yatak odası takımı tamamen doğal ahşaptan el işçiliği ile
            üretilirken, kullanıcıların isteklerine bağlı olarak renk ve ölçü
            seçenekleri ile özelleştirilebiliyor. Yaşam alanlarına uygun bir
            tasarım ile mükemmel dekorasyonu oluşturmanızı sağlayacak olan ahşap
            klasik yatak odası takımında tercih edilen başlık ve sandalyenin
            kumaşı dokuma kumaş ile konforlu bir kullanım sağlıyor. Lüks yatak
            odası takımını tercih eden kullanıcılar genellikle takımın kendi
            grubundan olan Olimpos gold klasik koltuk takımı ve Olimpos gold
            klasik yemek odası takımını da tercih ediyor. Lüks yatak odası
            takımı fiyatı ve özellikleri hakkında ayrıntılı bilgi almak için
            ürün bilgi formunu doldurabilir ya da Whatsapp hattımız üzerinden
            taleplerinizi iletebilirsiniz. Alanında deneyimli ve tecrübeli
            müşteri danışmanlarımız en kısa sürede tarafınıza dönüş
            gerçekleştirerek tüm sorularınızı büyük bir memnuniyetle
            yanıtlayacaklardır.
          </p>
          <Button
            background="black"
            className="w-[95%] flex items-center justify-center py-4"
            text={"ÜRÜN BİLGİSİ TALEP ET"}
            onClick={onOpen}
          />

          <InformationForm isOpen={isOpen} onClose={onClose} />

          <div className="w-[95%] space-y-2 mt-2">
            <div className="flex justify-between">
              <Button
                background="transparent"
                className="w-[49.5%] flex items-center justify-center py-4 border !border-[#075e54]"
                text={"WhatsApp: +90 549 460 30 07"}
                onClick={onOpen}
              />
              <Button
                background="transparent"
                className="w-[49.5%] flex items-center justify-center py-4 border border-theme-color"
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InformationField;
