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
      className="w-[97%] flex items-center flex-col z-30 lg:mt-5 lg:mb-[17px]"
    >
      <h1 className="text-center text-[#353839] text-4xl lg:text-5xl uppercase">
        {title}
      </h1>
      <p className="text-center text-[#414a4c] mt-5 max-w-[90%]">
        {description}
      </p>
    </Transition>
  );
}

export default DetailHeader;
