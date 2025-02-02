"use client";

const BlogItem = ({ imageBaseUrl, image, title }) => {
  return (
    <div className="box-border w-full cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-2xl group">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={imageBaseUrl + image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transition-transform duration-1000 transform group-hover:scale-110"
        />
      </div>
      <div className="w-full p-4 text-center text-lg lg:text-xl bg-white">
        <h2 className="font-light">{title}</h2>
      </div>
    </div>
  );
};

export default BlogItem;
