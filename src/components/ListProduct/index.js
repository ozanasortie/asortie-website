import Image from "next/image";
import Link from "next/link";
import Transition from "../Transition";

export default function ListProduct({
  width = "100%",
  href,
  image,
  title,
  secondVariant,
  secondImage,
  gif,
}) {
  return (
    <Link
      className={`box-border ${width} cursor-pointer relative overflow-hidden flex items-center justify-center text-2xl group ${
        secondVariant ? "rounded-none" : "rounded-md"
      }`}
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
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {/* Ana resim her zaman gösteriliyor */}
          <Image
            src={image}
            width={1920}
            height={1080}
            objectFit="cover"
            alt={title}
            className="transform transition-transform duration-1000 group-hover:scale-110"
          />

          {/* GIF var mı kontrol et, fare üzerine gelindiğinde gösterilecek */}
          {gif && gif.length > 0 && (
            <Image
              src={gif}
              width={1920}
              height={1080}
              objectFit="cover"
              alt={`${title} GIF`}
              className="absolute inset-0 z-30 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}

          {/* İkinci resim var mı kontrol et, fare üzerine gelindiğinde gösterilecek */}
          {secondImage && secondImage.length > 0 && (
            <Image
              src={secondImage}
              width={1920}
              height={1080}
              objectFit="cover"
              alt={`${title} - second image`}
              className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>
        <div
          className={`text-0 text-center font-light text-xl lg:text-[20px] relative w-full ${
            secondVariant
              ? "bg-transparent text-black"
              : "bg-black bg-opacity-20 text-white"
          }`}
        >
          <h2
            className={`motion-safe:transition py-3 ${
              secondVariant ? "text-black" : "text-white"
            }`}
          >
            {title}
          </h2>
          <div
            className={`absolute left-0 right-0 bottom-0 h-[1.5px] ${
              secondVariant ? "bg-background-color" : "bg-white"
            } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
          ></div>
        </div>
      </Transition>
    </Link>
  );
}
