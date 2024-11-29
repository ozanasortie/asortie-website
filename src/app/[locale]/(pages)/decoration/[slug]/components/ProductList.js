import ListProduct from "@components/ListProduct";
import { slugify } from "@/utils";

function ProductList({ slug, products }) {
  return (
    <div className="max-w-[1500px] 2xl:max-w-[1700px] grid place-content-center place-items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-page lg:mt-2 justify-around">
      {products &&
        products.map((item) => {
          return (
            <ListProduct
              key={item.id}
              href={
                "/decoration/" + slug + "/" + slugify(item.urun_adi, item.id)
              }
              image={item.resim1}
              secondImage={item.resim2}
              title={item.urun_adi}
              gif={item.gif}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
