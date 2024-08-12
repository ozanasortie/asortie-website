import ListProduct from "@/components/ListProduct";

import Sample2 from "@assets/Samplebanner.jpg";
import Sample from "@assets/sample.jpg";
import Sample3 from "@assets/sample-3.jpg";

function CollectionList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-[1000px] xl:max-w-[1200px] lg:mt-7">
      <ListProduct
        href={"/products"}
        image={Sample3}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample}
        secondImage={Sample2}
        title={"Klasik Yatak Odası Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample2}
        secondImage={Sample2}
        title={"Klasik Yemek Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample3}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample}
        secondImage={Sample2}
        title={"Klasik Yatak Odası Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample2}
        secondImage={Sample2}
        title={"Klasik Yemek Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample3}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample3}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />{" "}
      <ListProduct
        href={"/products"}
        image={Sample}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample3}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />{" "}
      <ListProduct
        href={"/products"}
        image={Sample}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
      <ListProduct
        href={"/products"}
        image={Sample3}
        secondImage={Sample2}
        title={"Klasik Koltuk Takımları"}
      />
    </div>
  );
}

export default CollectionList;
