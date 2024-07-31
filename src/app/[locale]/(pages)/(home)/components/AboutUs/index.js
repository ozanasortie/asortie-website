import Image from "next/image";
import { motion } from "framer-motion";
import Team from "@/assets/about-us.jpg";
import Arma from "@/assets/14arma.png";
import Background from "@assets/background.webp";

export default function AboutUs() {
  return (
    <div
      className="bg-cover bg-center bg-fixed relative p-10 flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
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
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <motion.div
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            className="w-[550px] h-[65vh]"
          >
            <Image
              src={Team}
              className="w-[550px] h-full z-20 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-col items-center text-center lg:text-start lg:ml-10 lg:w-[40vw]"
          >
            <p className="w-full  mb-5">
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
            <h1 className="text-2xl lg:text-3xl mt-3 mb-5 lg:hidden max-lg:block">
              Sizin İçin, Sizinle Birlikte…
            </h1>

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
