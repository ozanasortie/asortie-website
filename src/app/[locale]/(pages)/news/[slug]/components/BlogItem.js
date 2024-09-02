import Image from "next/image";
import Link from "next/link";

function BlogItem({ href, item, image, imageBaseUrl }) {
  return (
    <Link href={href} className="relative w-full mb-2 group cursor-pointer">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          layout="fill"
          src={imageBaseUrl + image}
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt="Blog image"
        />
      </div>
      <h1 className="absolute top-0 left-0 w-full px-5 h-full flex items-center justify-center text-white text-center text-xl bg-black bg-opacity-30 shadow-lg p-4">
        {item.baslik}
      </h1>
    </Link>
  );
}

export default BlogItem;
