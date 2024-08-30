import ListBlog from "./ListBlog";

function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-[1000px] xl:max-w-[1400px] lg:mt-7">
      {blogs?.data.map((item) => {
        return (
          <ListBlog
            key={item.id}
            title={item.baslik}
            imageBaseUrl={blogs.image_url}
            description={item.ozet}
            href={"/blog/" + item.id}
            image={item.resim}
          />
        );
      })}
    </div>
  );
}

export default BlogList;
