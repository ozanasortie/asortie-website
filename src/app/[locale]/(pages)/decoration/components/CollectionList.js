import CollectionItem from "./CollectionItem";

function CollectionList({ decorations }) {
  return (
    <>
      {decorations.dekorasyon &&
        decorations.dekorasyon.map((item) => {
          console.log("item url", item.url)
          return (
            <CollectionItem
              href={"/decoration" + "/" + item.url}
              image={decorations.image_url + item.resim}
              secondImage={decorations.image_url + item.resim}
              title={item.kategori}
            />
          );
        })}
    </>
  );
}

export default CollectionList;
