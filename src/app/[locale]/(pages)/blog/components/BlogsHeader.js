import Transition from "@/components/Transition";
import { QuillWrite01Icon } from "hugeicons-react";

function BlogsHeader({ t }) {
  return (
    <Transition
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="pt-28 lg:pt-40 max-w-[1500px] 2xl:max-w-[1700px] w-[100%] flex items-center flex-col text-black px-4 lg:px-page mb-4"
    >
      <h1 className="w-full text-center font-light mb-3 text-xl lg:text-3xl">
        {t("blog")}
      </h1>
      <h1 className="flex items-center mt-1 mb-4 ml-8 text-2xl lg:text-4xl text-center">
        {t("blog_liste_baslik")}
        <QuillWrite01Icon size={32} className="ml-3" />
      </h1>
      {/* <i className="w-full text-center max-md:mb-5 lg:w-8/12 leading-loose text-[14px] lg:text-[18px] mb-4 text-[#8c8c8c]">
        {t("blog_liste_alt_baslik")}
      </i> */}
    </Transition>
  );
}

export default BlogsHeader;
