import Transition from "@/components/Transition";

function CollectionHeader({ t }) {
  return (
    <Transition
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="max-w-[1500px] 2xl:max-w-[1700px] w-[100%] flex items-center flex-col z-20"
    >
      <h1 className="font-light mt-32 mb-10 text-5xl text-center">
        {t('dekorasyon')}
      </h1>
      <i className="max-w-[1100px] md:max-w-[900px] w-[95%] leading-loose lg:text-[16px] mb-6 text-center">
        {t('mukemmele_odaklan')}
      </i>
    </Transition>
  );
}

export default CollectionHeader;
