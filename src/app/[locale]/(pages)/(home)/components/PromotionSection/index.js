import Image from "next/image";
import { motion } from "framer-motion";
import Arma from "@/assets/14arma.png";
import Background from "@assets/background.webp";

export default function PRomotionSection() {
    return (
        <div
            className="bg-cover bg-center bg-fixed relative  p-10 flex flex-col items-center justify-center text-white"
            style={{ backgroundImage: `url(${Background.src})` }}
        >
            <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
            <div className="flex flex-col w-full z-30">
                <div className="flex flex-col lg:flex-row items-center lg:items-center">
                    <Image
                        src={Arma}
                        className="w-[230px] mt-10"
                    />
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
                        <h1 className="text-2xl lg:text-3xl mt-3 mb-5 lg:hidden max-lg:block">
                            SİZİN İÇİN, SİZİNLE BİRLİKTE...
                        </h1>

                        <h1 className="w-full text-3xl mt-3 mb-5 text-start max-lg:hidden">
                            SİZİN İÇİN, SİZİNLE BİRLİKTE...
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
        </div >
    );
}
