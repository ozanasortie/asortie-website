import Transition from "@/components/Transition";
import { QuillWrite01Icon } from "hugeicons-react";

function BlogsHeader() {
  return (
    <Transition
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="pt-40 lg:max-w-[1000px] xl:max-w-[1300px] w-[100%] flex items-center flex-col text-black max-lg:px-4 mb-4"
    >
      <h1 className="w-full text-center font-light mb-3 text-xl lg:text-3xl">HABERLER</h1>
      <h1 className="flex items-center mt-1 mb-4 ml-8 text-3xl lg:text-5xl text-center">Takım arkadaşlarımızdan haberler <QuillWrite01Icon size={32} className="ml-3"/></h1>
      <i className="w-full text-center max-md:mb-5 lg:w-8/12 leading-loose text-[14px] lg:text-[18px] mb-4 text-[#8c8c8c]">
        The latest industry news, interviews, technologies, and resources.
      </i>
    </Transition>
  );
}

export default BlogsHeader;
