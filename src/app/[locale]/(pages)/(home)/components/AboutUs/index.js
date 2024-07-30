import Image from "next/image";
import { motion } from "framer-motion";
import Team from "@/assets/about-us.jpg";
import Store from "@/assets/store.png";
import Background from "@assets/background.webp";

export default function AboutUs() {
  return (
    <div className="relative lg:h-[100vh] p-10 flex flex-col items-center justify-center text-white">
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <Image
        src={Background}
        className="w-full h-full object-cover absolute left-0 top-0"
      />
      <div className="flex flex-col w-full z-30">
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 80 },
          }}
          className="flex items-center lg:items-start flex-col lg:ml-10"
        >
          <h1 className="text-2xl text-center lg:text-start lg:text-6xl my-4 mb-5 uppercase">
            Bizim Tasarımlarımız Kalıba Sığmaz:
          </h1>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
          <motion.div
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-col text-center lg:text-start lg:ml-10"
          >
            <p className="w-full lg:w-[30vw] mb-5">
              Bir ömüre zor sığacak çok sayıda şaheseri dünyaya armağan eden
              Mimar Sinan, önündeki kâğıda ilk çizgiyi çizmeden önce, bir şehrin
              geleceğini değiştirecek olmanın heyecanını yaşıyordu. Gelecek
              nesillerin nasıl bir dünyada nefes alacaklarını, yürürken ne
              görürlerse mutlu olacaklarını, hangi binalara girmekten huzur ve
              gurur duyacaklarını hayal ediyordu. Bu yüzden eserleri yüzyıllar
              boyu ayakta ve yüzyıllar boyu kılavuz…
            </p>
            <p className="mb-5">
              Bugün bizde böyle bir heyecanın içindeyiz. Bir ressamın ilk fırça
              darbesindeki heyecanı, bir heykeltıraşın toprağa ilk dokunuşunda
              duyduğu his, bir nakkaşın kaleminden damlayan ilk mürekkebin
              coşkusu ve bir çocuğun ilk adım atmasının heyecanı…
            </p>
          </motion.div>
          <Image
            src={Team}
            className="w-full lg:w-[400px] h-full z-20 object-cover rounded-sm"
          />
          <motion.div
            transition={{ duration: 2, delay: 0.4 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="flex items-center flex-col lg:ml-10"
          >
            <h1 className="text-2xl lg:text-3xl mt-3 mb-5 lg:hidden max-lg:block">
              Sizin İçin, Sizinle Birlikte…
            </h1>
            <Image
              src={Store}
              className="w-full z-20 object-cover rounded-sm"
            />
            <h1 className="w-full text-3xl mt-3 mb-5 text-start max-lg:hidden">
              Sizin İçin, Sizinle Birlikte…
            </h1>
            <p className="mb-5 max-lg:mt-5">
              Asortie, mobilya ve dekorasyon adına, kendinizi mutlu
              hissedeceğiniz olağanüstü tasarımlara imza atıyor. 1965 yılından
              bugüne gelişen engin bir tecrübenin ürünü ile müşterilerine hizmet
              sağlayan Asortie, kendine özgü çizgisi ile günün moda anlayışına
              paralel olarak dizayn edilmiş fark edilebilen ürünler tasarlıyor.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
