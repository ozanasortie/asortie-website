import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ image, href, title }) => {
  return (
    <Link
      href={href}
      className="box-border w-[100%] h-auto cursor-pointer relative overflow-hidden flex flex-col items-center justify-between text-2xl group"
    >
      <div className="relative w-[97%] aspect-[16/9] overflow-hidden">
        <img
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transition-transform duration-1000 transform group-hover:scale-110"
        />
      </div>
      <div className="w-full p-4 bg-white text-center text-[20px]">
        <h2 className="font-light">{title}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
