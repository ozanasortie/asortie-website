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
      className="max-w-[1500px] 2xl:max-w-[1700px] w-[97%] flex flex-col justify-center items-center z-30 mt-4 lg:mt-16 lg:mb-[2px]"
    >
      <h1 className="text-center text-[#353839] text-2xl lg:text-4xl mb-4 uppercase">
        {title}
      </h1>
      {description && <WorldField description={description} />}
    </Transition>
  );
}

export default DetailHeader;
