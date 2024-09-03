import Image from "next/image";

import Team from "@/assets/about-us.jpg";
import Background from "@assets/background.webp";
import BackgroundSection from "@/components/Background";
import Transition from "@/components/Transition";

export default function AboutUs() {
  return (
    <BackgroundSection
      background={Background.src}
      className="bg-cover bg-center relative p-2 lg:p-0 lg:px-page flex flex-col items-center justify-center text-white"
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-35 z-30" />
      <div className="flex flex-col w-full z-30">
        <div className="flex flex-col lg:flex-row items-center lg:items-center py-8">
          <Transition
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            className="lg:w-[100%] h-full max-lg:mb-8"
          >
            <Image
              src={Team}
              className="lg:w-[100%] h-full z-20 object-cover"
            />
          </Transition>

          <Transition
            transition={{ duration: 1.2, delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-col items-center text-center lg:text-start lg:ml-8 lg:w-[100%]"
          >
            <Transition
              transition={{ duration: 0.8, delay: 0.2 }}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 80 },
              }}
              className="w-[100%] flex items-center lg:items-start flex-col"
            >
              <h1 className="text-3xl text-center lg:text-start lg:text-5xl my-4 mb-8 uppercase">
                Bizim Tasarımlarımız Kalıba Sığmaz
              </h1>
            </Transition>
            <p className="w-full mb-5">
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
            <p className="mb-5">
              Bugün bizde böyle bir heyecanın içindeyiz. Bir ressamın ilk fırça
              darbesindeki heyecanı, bir heykeltıraşın toprağa ilk dokunuşunda
              duyduğu his, bir nakkaşın kaleminden damlayan ilk mürekkebin
              coşkusu ve bir çocuğun ilk adım atmasının heyecanı…
            </p>
            <p className="mb-5">
              Bugün bizde böyle bir heyecanın içindeyiz. Bir ressamın ilk fırça
              darbesindeki heyecanı. Bugün bizde böyle bir heyecanın içindeyiz.
              Bir ressamın ilk fırça darbesindeki heyecanı.
            </p>
          </Transition>
        </div>
      </div>
    </BackgroundSection>
  );
}
