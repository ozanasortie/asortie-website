import Transition from "@/components/Transition";
import WorldField from "./WorldField";

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
      className="w-[97%] flex flex-col justify-center items-center z-30 lg:mt-7 lg:mb-[2px]"
    >
      <h1 className="text-center text-[#353839] text-3xl lg:text-4xl uppercase">
        {title}
      </h1>
      <WorldField description={description} />
    </Transition>
  );
}

export default DetailHeader;
