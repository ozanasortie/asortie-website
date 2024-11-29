"use client";
import { useSelector } from "react-redux";
import CollectionList from "./CollectionList";

function ListWrapper() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-[1500px] 2xl:max-w-[1700px] lg:mt-7 px-4 xl:px-page">
      <CollectionList categories={categories} />
    </div>
  );
}

export default ListWrapper;
