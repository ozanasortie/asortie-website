import { useSelector } from "react-redux";

import CollectionItem from "./CollectionItem";

function CollectionList() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:max-w-[1200px] xl:max-w-[1400px] lg:mt-7 px-4">
      {categories.data &&
        categories.data.map((item) => {
          return (
            <CollectionItem
              href={"/collection" + "/" + item.url}
              image={categories.image_url + item.resim}
              secondImage={categories.image_url + item.resim}
              title={item.kategori}
            />
          );
        })}
    </div>
  );
}

export default CollectionList;
