// "use client";
import Transition from "@/components/Transition";
// import Lottie from "react-lottie";
// import * as animationData from "../../../../../../../../public/world.json";

function WorldField({ description }) {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //   };
  return (
    <Transition
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="w-full flex justify-center items-center z-30 lg:mb-[12px]"
    >
      {/* <Lottie options={defaultOptions} height={47} width={47} /> */}
      <p className="w-full text-center text-[#414a4c] max-w-[90%]">
        {description}
      </p>
    </Transition>
  );
}

export default WorldField;
