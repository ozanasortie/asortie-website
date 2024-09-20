import Image from "next/image";
import Link from "next/link";
import Transition from "../Transition";

export default function ListProduct({ width = "90%", href, image, title }) {
  return (
    <Link
      className={`box-border !${width} max-w-lg cursor-pointer relative overflow-hidden flex items-center justify-center text-2xl group`}
      href={href}
    >
      <Transition
        transition={{ duration: 1.5, delay: 0.2 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className="box-border w-full flex flex-col items-center justify-center text-2xl"
      >
        <div className="relative w-full lg:min-w-[600px] aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="transform transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="text-0 text-center text-xl lg:text-[22px] relative bg-white w-full">
          <h2 className="motion-safe:transition text-black py-3">{title}</h2>
          <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-background-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </Transition>
    </Link>
  );
}
