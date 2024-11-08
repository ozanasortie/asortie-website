import Transition from "@/components/Transition";
import ProductItem from "./ProductItem";
import ProductsSlider from "./ProductsSlider";

const NewProducts = ({ t, products }) => {
  return (
    <div className="w-full relative flex flex-1 justify-start items-start max-lg:flex-col lg:px-10 2xl:px-page z-40 pt-12 lg:pt-8 pb-14">
      <div className="absolute left-0 top-0 w-full bg-black bg-opacity-35" />
      <div className="w-full flex flex-col items-center justify-center z-20">
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 90 },
          }}
          className="w-full flex items-center justify-center lg:mt-10"
        >
          <span className="uppercase text-3xl lg:text-4xl mb-2 text-center lg:text-start font-light">
            {t("yeni_modeller")}
          </span>
        </Transition>
        <Transition
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 90 },
          }}
          className="w-full flex items-center justify-center mt-5"
        >
          <ProductsSlider products={products} />
          <div className="max-md:hidden w-full flex place-content-center place-items-start">
            {products?.data?.slice(0, 3).map((item, index) => {
              return (
                <ProductItem
                  image={item.resim}
                  href={"/collection/" + item.slug + "/" + item.id}
                  title={item.urun_adi}
                />
              );
            })}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default NewProducts;
