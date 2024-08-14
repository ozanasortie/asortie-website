import { motion } from "framer-motion";
import Image from "next/image";

function BlogItem({ image }) {
  return (
    <div className="w-[100%] flex items-center border-b p-1">
      <Image src={image} className="w-2/6" />
      <h1 className="font-ligh ml-2">
        Lüks Dekorasyon Seçenekleri ile Evinizi Şık ve Zarif Bir Hale Getirin{" "}
      </h1>
    </div>
  );
}

export default BlogItem;
