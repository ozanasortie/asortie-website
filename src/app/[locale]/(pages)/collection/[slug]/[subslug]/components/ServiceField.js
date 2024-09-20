import Button from "@/components/Button";
import SliderProvider from "@/components/Slider";
import Transition from "@/components/Transition";
import {
  Box,
  ScaleFade,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Accordion,
} from "@chakra-ui/react";
import Link from "next/link";

const tabLabels = {
  d1_yazi: "Ürün Garantisi",
  d2_yazi: "Satış Sonrası Destek",
  d3_yazi: "Mimarlık Hizmeti",
  d4_yazi: "En Trend Modeller",
  d5_yazi: "Dünyanın Her Yerine Teslimat",
  d6_yazi: "El İşçiliği ve Doğal Ahşap",
  d7_yazi: "Fonksiyonel Tasarımlar",
  d8_yazi: "Kişiye Özel Tasarımlar",
  d9_yazi: "Geleneksel Tecrübe",
  d10_yazi: "Anahtar Teslim Projeler",
  d11_yazi: "Müşteri Anayasamız",
};

const settings = {
  slidesToShow: 3,
  nextArrow: <FsNextArrow />,
  prevArrow: <FsPrevArrow />,
};

const desktopSettings = {
  slidesToShow: 5,
  nextArrow: <FsNextArrow />,
  prevArrow: <FsPrevArrow />,
  autoplay: true,
  speed: 1500,
};

function ServiceField({ data }) {
  const tabsContent = Object.entries(tabLabels).map(([key, label]) => ({
    key,
    label,
    content: data?.[key] || "İçerik mevcut değil.",
  }));

  return (
    <div className="w-[92%] bg-cover bg-center bg-no-repeat relative flex flex-col lg:flex-row lg:justify-around lg:mt-14 lg:mb-10">
      {/* <Tabs
        isFitted
        colorScheme="black"
        className="w-full mb-10 !flex flex-col items-center"
        position="relative"
      > */}
      {/* <TabList className="w-full max-w-[85%] border-0 border-b-0 rounded-md py-2 lg:mt-14"> */}
      {/* <SliderProvider
          className="hidden xl:block w-full z-30"
          settings={desktopSettings}
        >
          {tabsContent.map((tab, index) => {
            return (
              <div
                color={"black"}
                className="text-center uppercase !p-0 flex justify-center items-center"
                key={index}
              >
                {tab.label}
              </div>
            );
          })}
        </SliderProvider> */}

      <SliderWithAccordion tabsContent={tabsContent} />
      <ArchitectService />
    </div>
  );
}

const SliderWithAccordion = ({ tabsContent, settings }) => {
  return (
    <Accordion
      allowMultiple
      className="w-full lg:w-[43%] border-0 border-b-0 rounded-md py-2 px-4"
    >
      {tabsContent.map((tab, index) => (
        <AccordionItem key={index} className="!border-0 py-1 mb-2">
          <AccordionButton
            _expanded={{ bg: "var(--theme-color)" }}
            className="!p-0 flex justify-between items-center w-full py-1"
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={16}
              color="black"
              className="uppercase"
            >
              {tab.label}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            className="w-full !p-0 mt-1 flex flex-col items-start"
            pb={0}
          >
            <div dangerouslySetInnerHTML={{ __html: tab.content }} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const ArchitectService = () => {
  return (
    <Transition className="w-full px-4 mt-10 mb-5 lg:mt-0 lg:w-[43%]">
      <h1 className="text-2xl">
        İç Mimarlık Hizmetlerimizle Mekânlarınıza Estetik Katın!
      </h1>
      <p className="mt-4">
        Hayalinizdeki iç mekânı yaratmak için buradayız! İç mimarlık
        hizmetlerimiz, her türlü mekânı estetik ve işlevsellik açısından en iyi
        şekilde tasarlamak üzere tasarlanmıştır. Uzman ekibimiz, müşteri
        ihtiyaçlarını dikkate alarak kişiye özel çözümler sunar.
      </p>

      <h2 className="text-xl mt-4">Hizmetlerimiz</h2>
      <li className="mt-2">
        Tasarım Danışmanlığı: Projelerinizin başlangıcından itibaren profesyonel
        danışmanlık.
      </li>
      <li className="mt-2">
        Kapsamlı İç Mekân Tasarımı: Evinizden ofisinize kadar her mekân için
        özgün tasarım çözümleri.
      </li>
      <li className="mt-2">
        Mobilya Seçimi ve Düzenleme: Mekânınıza en uygun mobilya ve dekorasyon
        önerileri.
      </li>
      <li className="mt-2 mb-8">
        Uygulama ve Proje Yönetimi: Tasarımın hayata geçirilmesi sürecinde
        sürekli destek ve izleme.
      </li>
      <Link
        href={"/architect-service"}
        className={
          "flex justify-center items-center w-full lg:w-fit bg-black text-white rounded-md p-4 text-lg hover:text-theme-color hover:scale-105 motion-safe:transition"
        }
      >
        İç Mimarlık Hizmeti Al
      </Link>
    </Transition>
  );
};

function FsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      position="absolute"
      top="20%"
      right="4"
      padding="2"
      zIndex="50"
      cursor="pointer"
      transition="transform 0.3s"
      onClick={onClick}
    ></Box>
  );
}
function FsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      position="absolute"
      top="20%"
      left="4"
      padding="2"
      zIndex="50"
      cursor="pointer"
      transition="transform 0.3s"
      onClick={onClick}
    ></Box>
  );
}

export default ServiceField;
