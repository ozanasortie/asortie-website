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
import {
  ArrowDown02Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
} from "hugeicons-react";
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
    <div className="w-[92%] bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:mt-5">
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
      <ArchitectService />

      <div className="text-2xl mb-4 bg-gray-50 min-w-[94%] py-4 text-center">
        Çok Merak Edilenler
      </div>

      <SliderWithAccordion tabsContent={tabsContent} />
    </div>
  );
}

const SliderWithAccordion = ({ tabsContent, settings }) => {
  return (
    <Accordion
      allowToggle
      className="w-[95%] flex flex-wrap justify-center items-start gap-2 border-0 border-b-0 rounded-md mb-12"
    >
      {tabsContent.map((tab, index) => (
        <AccordionItem
          key={index}
          className="!border-0 py-1 w-[49%] flex flex-col items-center"
        >
          <AccordionButton
            _expanded={{ bg: "var(--theme-color)" }}
            className="flex items-center !w-[100%] border border-gray-200 p-4"
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
    <Transition className="w-[95%] group flex justify-center items-center px-4 py-7 mb-20 lg:mt-8 border hover:bg-black hover:border-black text-white motion-safe:transition cursor-pointer p-4">
      <Link href={"/architect-service"}>
        <h1 className="text-xl group-hover:text-white text-black">
          Daha estetik ve fonksiyonel yaşam alanları oluşturmak için profesyonel
          mimarlık hizmeti almak ister misiniz ?
        </h1>
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
