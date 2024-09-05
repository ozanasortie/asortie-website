import Transition from "@/components/Transition";

function DetailHeader({ title, description }) {
  return (
    <Transition
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="w-[97%] flex items-center flex-col z-40 mt-[160px] lg:mb-[30px]"
    >
      <h1 className="text-black text-center font-light text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h1>
      {/* <p className="text-center lg:text-lg mt-5 max-w-[90%]">{description}</p> */}
    </Transition>
  );
}

export default DetailHeader;
