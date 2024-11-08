import CollectionItem from "./CollectionItem";

function CollectionList({ categories }) {
  return (
    <>
      {categories.dekorasyon &&
        categories.dekorasyon.map((item) => {
          return (
            <CollectionItem
              href={"/decoration" + "/" + item.url}
              image={categories.image_url + item.resim}
              secondImage={categories.image_url + item.resim}
              title={item.kategori}
            />
          );
        })}
    </>
  );
}

export default CollectionList;
