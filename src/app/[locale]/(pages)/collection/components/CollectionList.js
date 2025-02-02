import CollectionItem from "./CollectionItem";

function CollectionList({ categories }) {
  return (
    <>
      {categories.koleksiyon &&
        categories.koleksiyon.map((item) => {
          return (
            <CollectionItem
              href={`/collection/${item.url}`}
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
