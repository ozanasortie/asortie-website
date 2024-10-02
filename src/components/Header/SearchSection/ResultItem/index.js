import Image from "next/image";
import Link from "next/link";

export default function ResultItem({ name, image, onClose, url }) {
  return (
    <Link
      href={url}
      onClick={onClose}
      className={`box-border w-full lg:mx-2 mb-8 lg:mb-4 cursor-pointer relative bg-cover overflow-hidden flex flex-col items-center justify-center group`}
    >
      <div className="overflow-hidden w-[100%] h-full relative">
        <Image
          src={image}
          width={1920}
          height={1080}
          alt="Slider Furniture Product"
          className="w-full h-full aspect-[16/9] object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="mt-2 text-0 w-full font-light text-xl lg:text-2xl relative">
        <h2 className="motion-safe:transition group-hover:text-theme-color">
          {name}
        </h2>
      </div>
    </Link>
  );
}
