import Transition from "@/components/Transition";

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
      className="lg:max-w-[1000px] xl:max-w-[1400px] w-[100%] flex items-start flex-col text-black max-lg:px-4"
    >
      <h1 className="w-full font-light mt-12 mb-3 text-4xl lg:text-5xl">
        HABERLER
      </h1>
      <i className="w-full max-md:mb-10 lg:w-8/12 leading-loose text-[14px] lg:text-[16px] mb-4 text-[#8c8c8c]">
        Bilgi paylaşımını ve ilhamı teşvik eden bir platform olarak, geniş bir
        konu yelpazesi sunar. Güncel trendlerden yaşam tarzı ipuçlarına,
        kültürel analizlerden pratik önerilere kadar çeşitli içerikler sağlar.
      </i>
    </Transition>
  );
}

export default BlogsHeader;
