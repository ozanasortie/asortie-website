import Loading from "@/components/Loading";
import Store from "@/assets/store.png";

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

import { fetchCorporate } from "@services/generalService";
import NavLink from "@components/NavLink";
import BackgroundSection from "@/components/Background";
import SliderProvider from "@/components/Slider";
import { getTranslations } from "next-intl/server";

const kebabToSnake = (kebab) => kebab.replace(/-/g, "_");

export async function generateMetadata({ params }) {
  const t = await getTranslations("");

  const tabLabels = {
    hakkimizda: t("asortie_hakkinda"),
    felsefemiz: t("felsefemiz"),
    referanslar: t("referanslar"),
    musteri_haklari: t("musteri_haklari"),
    sikayet_ve_oneri: t("sikayet_ve_oneri"),
    insan_kaynaklari: t("insan_kaynaklari"),
    asortie_vip: "Asortie Vip",
    biz_kimiz: t("yasal_uyarilar"),
  };

  const { slug } = params;
  const snakeSlug = kebabToSnake(slug);

  const pageTitle = `Asortie | ${tabLabels[snakeSlug] || t('kurumsal')}`;
  const pageDescription = "";
  const pageImage = "";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
  };
}

export default async function Page({ params }) {
  const { locale, slug } = params;

  const snakeSlug = kebabToSnake(slug);

  const corporate = await fetchCorporate(locale);

  const t = await getTranslations("");

  const tabLabels = {
    hakkimizda: t("asortie_hakkinda"),
    felsefemiz: t("felsefemiz"),
    referanslar: t("referanslar"),
    musteri_haklari: t("musteri_haklari"),
    sikayet_ve_oneri: t("sikayet_ve_oneri"),
    insan_kaynaklari: t("insan_kaynaklari"),
    asortie_vip: "Asortie Vip",
    biz_kimiz: t("yasal_uyarilar"),
  };

  const content = corporate.data[0];

  const tabsContent = Object.entries(tabLabels).map(([key, label]) => ({
    key,
    label,
    content: content[key] || t('icerik_mevcut_degil')
  }));

  const settings = {
    slidesToShow: 3,
    nextArrow: <FsNextArrow />,
    prevArrow: <FsPrevArrow />,
  };

  const initialIndex = tabsContent.findIndex(
    (tabItem) => tabItem.key === snakeSlug
  );

  if (!corporate || !corporate.data || !content || corporate.data.length === 0)
    return <Loading />;

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around pb-20">
      <Tabs
        isFitted
        colorScheme="black"
        className="w-full mb-10 !flex flex-col items-center"
        position="relative"
        index={initialIndex}
      >
        <BackgroundSection
          background={Store.src}
          className="w-full bg-cover bg-center relative h-[430px] lg:h-[530px] p-10 flex flex-col items-center justify-center text-white"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-40 z-30 backdrop-blur-sm" />
          <h1 className="text-3xl lg:text-[55px] font-base uppercase z-30 -mt-20 text-center">
            {tabsContent[initialIndex].label}
          </h1>
          <TabList className="w-[90%] max-w-[1400px] z-30 absolute bottom-28">
            <div className="max-xl:hidden w-full flex justify-center items-center">
              {tabsContent.map((tab, index) => {
                const selectedKey = tabsContent[index].key;
                const kebabCaseKey = selectedKey.replace(/_/g, "-");
                return (
                  <Tab
                    _selected={{ fontWeight: "bold" }}
                    className="uppercase !p-0"
                    key={index}
                  >
                    <NavLink
                      className="text-[15px] h-[70px] flex items-center w-full justify-center"
                      href={`/corporate/${kebabCaseKey}`}
                    >
                      {tab.label}
                    </NavLink>
                  </Tab>
                );
              })}
            </div>

            <SliderProvider
              className="w-full max-w-[1400px] z-30 absolute bottom-4 xl:hidden px-12"
              settings={settings}
            >
              {tabsContent.map((tab, index) => {
                const selectedKey = tabsContent[index].key;
                const kebabCaseKey = selectedKey.replace(/_/g, "-");
                return (
                  <Tab
                    _selected={{ fontWeight: "medium" }}
                    className="uppercase !p-0"
                    key={index}
                  >
                    <NavLink
                      className="text-[15px] h-[50px] flex justify-center items-center"
                      href={`/corporate/${kebabCaseKey}`}
                    >
                      {tab.label}
                    </NavLink>
                  </Tab>
                );
              })}
            </SliderProvider>
            <TabIndicator
              className="max-xl:hidden"
              mt="-1.5px"
              height="2px"
              bg="white"
              borderRadius="1px"
            />
          </TabList>
        </BackgroundSection>

        <TabPanels className="!w-[90%] !max-w-[1400px] -mt-24 z-30 bg-white shadow-lg px-4 py-2">
          {tabsContent.map((tab, index) => (
            <ScaleFade key={index} initialScale={0.9} in={true}>
              <TabPanel dangerouslySetInnerHTML={{ __html: tab.content }} />
            </ScaleFade>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
}

function FsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      position="absolute"
      top="38%"
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
      top="38%"
      left="4"
      padding="2"
      zIndex="50"
      cursor="pointer"
      transition="transform 0.3s"
      onClick={onClick}
    ></Box>
  );
}
