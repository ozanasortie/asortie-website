import { useSelector } from "react-redux";

import ListProduct from "@/components/ListProduct";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

function CollectionList() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-[1000px] xl:max-w-[1200px] lg:mt-7">
      {categories.data &&
        categories.data.map((item) => {
          return (
            <ListProduct
              href={"/collection" + "/" + item.url}
              image={categories.image_url + item.resimanasayfa}
              secondImage={categories.image_url + item.resim}
              title={item.kategori}
            />
          );
        })}
    </div>
  );
}

export default CollectionList;
