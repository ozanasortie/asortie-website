import ListProduct from "@components/ListProduct";

function ProductList({ slug, products }) {
  return (
    <div className="max-w-[1400px] grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0 lg:mt-2 justify-around">
      {products &&
        products.map((item) => {
          return (
            <ListProduct
              key={item.id}
              href={"/decoration/" + slug + "/" + item.id}
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
