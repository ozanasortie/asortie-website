import { motion } from "framer-motion";

function BlogsHeader() {
  return (
    <motion.div
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="w-[100%] flex items-center flex-col text-black"
    >
      <h1 className="font-light mt-20 mb-10 text-5xl lg:text-6xl text-center">
        BLOG
      </h1>
      <i className="max-w-[1100px] md:max-w-[900px] w-[95%] leading-loose lg:text-[16px] mb-10 text-center">
        "Mükemmele odaklan, gerisi kendiliğinden gelir..."
      </i>
    </motion.div>
  );
}

export default BlogsHeader;
