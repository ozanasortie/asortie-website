"use client";
import { useEffect, useState } from "react";
import ListBlog from "./ListBlog";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocale } from "next-intl";
import Loading from "@/components/Loading";
import StatusModal from "@/components/StatusModal";
import { useDisclosure } from "@chakra-ui/react";
import { slugify } from "@/utils";

function BlogList() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);
  const locale = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(`https://asortie.com/json/blogs?dil=${locale}_&sira=${index}`)
      .then((res) => {
        if (items.length > 0) {
          setItems((prevItems) => [...prevItems, ...res.data.data]);
          res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
        } else {
          setItems(res.data.data);
        }
      })
      .catch((err) => onOpen());
  }, [index, locale]);

  if (!items?.length) return <Loading />;

  return (
    <div className="max-w-[1500px] 2xl:max-w-[1700px] px-4 lg:px-page">
      <InfiniteScroll
        dataLength={items.length}
        next={() => setIndex((prevIndex) => prevIndex + 1)}
        hasMore={hasMore}
        loader={"Loading..."}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items?.map((item, index) => {
            console.log(
              "/blog/" + slugify(item.baslik, item.id)
            );
            return (
              <ListBlog
                key={item.id}
                title={item.baslik}
                imageBaseUrl={
                  "https://www.asortie.com/blog/uploads/en_haberler/"
                }
                description={item.ozet}
                href={"/blog/" + slugify(item.baslik, item.id)}
                image={item.resim}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      <StatusModal status={"error"} isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default BlogList;
