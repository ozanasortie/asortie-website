import Loading from "@/components/Loading";
import SliderProvider from "@/components/Slider";
import {
  Box,
  ScaleFade,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { DnaIcon, WavingHand01Icon } from "hugeicons-react";

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
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around">
      <Tabs
        isFitted
        colorScheme="black"
        className="w-full mb-10 !flex flex-col items-center"
        position="relative"
      >
        <div className="w-full bg-cover bg-center flex flex-col items-center justify-center">
          <TabList className="w-full max-w-[85%] border-0 border-b-0 rounded-md py-2 lg:mt-14">
            <SliderProvider
              className="hidden xl:block w-full z-30"
              settings={desktopSettings}
            >
              {tabsContent.map((tab, index) => {
                return (
                  <Tab
                    color={"black"}
                    _selected={{ color: "#bd8f0f" }}
                    className="uppercase !p-0 flex justify-center items-center"
                    key={index}
                  >
                    {tab.label}
                  </Tab>
                );
              })}
            </SliderProvider>

            <SliderProvider
              className="w-full z-30 xl:hidden px-12"
              settings={settings}
            >
              {tabsContent.map((tab, index) => {
                return (
                  <Tab
                    color={"white"}
                    _selected={{ color: "#bd8f0f" }}
                    fontSize={12}
                    className="uppercase !p-0"
                    key={index}
                  >
                    {tab.label}
                  </Tab>
                );
              })}
            </SliderProvider>
          </TabList>
          {/* <TabPanels className="w-full !max-w-[85%] z-30 shadow-lg px-4 py-2 ">
            {tabsContent.map((tab, index) => (
              <ScaleFade key={index} initialScale={0.9} in={true}>
                <TabPanel
                  color={"gray"}
                  dangerouslySetInnerHTML={{ __html: tab.content }}
                />
              </ScaleFade>
            ))}
          </TabPanels> */}
        </div>
      </Tabs>
    </div>
  );
}

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
