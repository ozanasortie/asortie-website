import Transition from "@/components/Transition";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Accordion,
} from "@chakra-ui/react";
import Link from "next/link";

function ServiceField({ t, data }) {
  const tabLabels = {
    d1_yazi: t("urun_garantisi"),
    d2_yazi: t("satis_sonrasi_destek"),
    d3_yazi: t("mimarlik_hizmeti"),
    d4_yazi: t("en_trend_modeller"),
    d5_yazi: t("dunyanin_her_yerine_teslimat"),
    d6_yazi: t("el_isciligi"),
    d7_yazi: t("fonksiyonel_tasarimlar"),
    d8_yazi: t("kisiye_ozel_tasarimlar"),
    d9_yazi: t("geleneksel_tecrube"),
    d10_yazi: t("anahtar_teslim_projeler"),
    d11_yazi: t("musteri_anayasamiz"),
  };

  const tabsContent = Object.entries(tabLabels).map(([key, label]) => ({
    key,
    label,
    content: data?.[key] || t("icerik_mevcut_degil"),
  }));

  return (
    <div className="w-[90%] p-4 bg-cover bg-center bg-no-repeat relative flex flex-col items-center mt-5">
      <ArchitectService t={t} />
      <div className="text-2xl mb-2 bg-gray-50 min-w-[100%] py-4 text-center">
        {t("cok_sorulanlar")}
      </div>
      <SliderWithAccordion tabsContent={tabsContent} />
    </div>
  );
}

const SliderWithAccordion = ({ tabsContent }) => {
  return (
    <Accordion
      allowToggle
      className="w-[100%] flex flex-col lg:flex-wrap justify-center items-start gap-1 border-0 border-b-0 rounded-md mb-12"
    >
      {tabsContent.map((tab, index) => (
        <AccordionItem
          key={index}
          className="!border-0 py-1 w-full flex flex-col items-center"
        >
          <AccordionButton
            _expanded={{ bg: "var(--theme-color)" }}
            className="flex items-center !w-[100%] border border-gray-200 !p-2"
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={14}
              color="black"
              className="uppercase"
            >
              <span className="text-sm">{tab.label}</span>
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

const ArchitectService = ({ t }) => {
  return (
    <Transition className="w-[100%] group flex justify-center items-center mb-8  lg:mb-20 lg:mt-8 border hover:bg-black hover:border-black duration-1000 text-white motion-safe:transition cursor-pointer">
      <Link
        className="w-full flex justify-center items-center px-4 py-7"
        href={"/architect-service"}
      >
        <h1 className="lg:text-xl group-hover:text-white duration-1000 text-black">
          {t("urun_detay_mimarlik")}
        </h1>
      </Link>
    </Transition>
  );
};

export default ServiceField;
