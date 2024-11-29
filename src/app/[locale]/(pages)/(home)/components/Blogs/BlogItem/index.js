import Link from "next/link";

const BlogItem = ({ href, imageBaseUrl, image, title }) => {
  return (
    <Link
      href={href}
      className="box-border w-full cursor-pointer relative flex flex-col items-center justify-center text-2xl group"
    >
      <div className="relative w-[97%] aspect-[16/9] overflow-hidden">
        <img
          src={imageBaseUrl + image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transition-transform duration-1000 transform group-hover:scale-110 rounded-md"
        />
      </div>
      <div className="w-full mt-2 text-center text-lg lg:text-xl bg-white font-light">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default BlogItem;
