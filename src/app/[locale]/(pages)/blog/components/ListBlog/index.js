import Transition from "@/components/Transition";
import Link from "next/link";

export default function ListBlog({
  href,
  image,
  title,
  description,
  imageBaseUrl,
  width = "w-full",
}) {
  return (
    <Link
      href={href}
      className={`box-border ${width} mb-4 lg:mb-8 cursor-pointer relative overflow-hidden flex flex-col group`}
    >
      <Transition
        transition={{ duration: 1.5, delay: 0.2 }}
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 80 },
        }}
        className={`flex flex-col w-full h-full`}
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={imageBaseUrl + image}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="transform transition-transform duration-1000 group-hover:scale-110 rounded-md"
          />
        </div>
        <div className="p-4 bg-white">
          <h2 className="text-xl text-black mb-2 group-hover:text-theme-color motion-safe:transition">
            {title}
          </h2>
          <p className="text-sm lg:text-base text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
      </Transition>
    </Link>
  );
}
