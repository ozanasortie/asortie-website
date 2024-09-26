import ListProduct from "@components/ListProduct";
import SecondImage from "@assets/sample-2.jpg";

function ProductList({ slug, products }) {
  return (
    <div className="max-w-[1400px] grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0 lg:mt-7 justify-around">
      {products &&
        products.map((item) => {
          return (
            <ListProduct
              href={"/collection/" + slug + "/" + item.id}
              image={item.resim}
              secondImage={SecondImage.src}
              title={item.urun_adi}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
