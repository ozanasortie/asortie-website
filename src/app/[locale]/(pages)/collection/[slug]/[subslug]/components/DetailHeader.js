import { motion } from "framer-motion";

function DetailHeader() {
  return (
    <motion.div
      transition={{ duration: 0.8, delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      }}
      className="w-full flex items-center flex-col z-40 mt-[150px] lg:mb-[50px] xl:mb-[60px]"
    >
      <h1 className="text-white font-light text-4xl lg:text-6xl xl:text-7xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
        OLİMPOS YATAK ODASI
      </h1>
      <p className="text-white text-center text-lg mt-10 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)] max-w-[90%]">
        Zamanın ötesine uzanan tasarımlarımızla, bugünün zarafetini geleceğin
        mirasıyla buluşturuyoruz. Her parçamız, geleceğin antikası olmaya aday
        benzersiz bir sanat eseri.
      </p>
    </motion.div>
  );
}

export default DetailHeader;
