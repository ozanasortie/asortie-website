"use client";
import { useSelector } from "react-redux";
import CollectionList from "./CollectionList";

function ListWrapper() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:max-w-[1200px] xl:max-w-[1400px] lg:mt-7 px-4">
      <CollectionList categories={categories} />
    </div>
  );
}

export default ListWrapper;
