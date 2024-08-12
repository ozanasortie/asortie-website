import ListProduct from "@components/ListProduct";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:max-w-[1000px] xl:max-w-[1600px] lg:mt-7 justify-around">
      <ListProduct
        href={"/detail"}
        image={Sample2}
        title={"Olimpos Yatak Odası"}
      />
      <ListProduct
        href={"detail"}
        image={Sample}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample3}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/detail"}
        image={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample3}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/detail"}
        image={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample3}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"detail"}
        image={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
    </div>
  );
}

export default ProductList;
