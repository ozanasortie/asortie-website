import ListProduct from "@components/ListProduct";

function ProductList({ products }) {
  console.log("DATA A ", products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:max-w-[1000px] xl:max-w-[1600px] lg:mt-7 justify-around">
      {products &&
        products.map((item) => {
          return (
            <ListProduct
              href={"/detail"}
              image={item.resim}
              title={item.urun_adi}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
