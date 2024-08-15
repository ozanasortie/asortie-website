"use client";
import { motion } from "framer-motion";
import { usePathname } from "../../../../../../navigation";
import useIsSafari from "@/hooks/useIsSafari";
import Image from "next/image";

import Sample from "@assets/Naorabi.jpg";
import Sample2 from "@assets/blog-sample.jpg";
import Sample3 from "@assets/blog-sample-2.png";

import BlogItem from "./components/BlogItem";
import RecommendedBlogs from "./components/RecommendedBlogs";

export default function Page() {
  const pathname = usePathname();
  const isSafari = useIsSafari();
  console.log("router", pathname);
  return (
    <div
      className={`pt-52 pb-10 bg-cover min-h-full bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white ${
        isSafari ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: `url(${"https://www.cappellettisrl.com/wp-content/uploads/2023/05/EQ0.jpg"})`,
      }}
    >
      <div className="max-w-[1400px] flex justify-around">
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -80 },
          }}
          className="w-[29%] h-fit flex items-center flex-col bg-white text-black"
        >
          <h1 className="w-full text-center text-2xl py-4 border-b">
            ÇOK OKUNANLAR
          </h1>
          <BlogItem image={Sample} />
          <BlogItem image={Sample2} />
          <BlogItem image={Sample3} />
          <BlogItem image={Sample} />
          <BlogItem image={Sample2} />
          <BlogItem image={Sample3} />
        </motion.div>
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -80 },
          }}
          className="w-[69%] flex items-center flex-col"
        >
          <h1 className="z-10 text-6xl w-full font-light leading-normal text-black bg-white p-6">
            Lüks Dekorasyon Seçenekleri ile Evinizi Şık ve Zarif Bir Hale
            Getirin
          </h1>

          <Image className="w-full object-cover" src={Sample} />

          <div class="col-12 imgBu bg-white w-full p-6 text-black">
            <h1>
              Avrupa'nın Türk Mobilyasına Olan İlgisi: Hangi Ülkeler Öne
              Çıkıyor?
            </h1>

            <p>
              Avrupa’da Türkiye’den en çok mobilya ithal eden ülkeler arasında
              Almanya, Birleşik Krallık, Fransa, Hollanda ve İtalya öne
              çıkmaktadır. Bu ülkeler, Türkiye’nin kaliteli işçilik ve estetik
              tasarımlar sunan mobilya endüstrisinden faydalanmakta ve bu
              ürünlere büyük talep göstermektedir. İşte bu ülkelerin Türkiye’den
              mobilya ithalatında neden öne çıktığına dair bazı faktörler:
            </p>

            <h2>Almanya</h2>

            <ul>
              <li>
                <strong>Yüksek Kalite Talepleri:</strong> Almanya, dayanıklı ve
                uzun ömürlü mobilyalar arayan bir pazardır. Türk mobilyaları,
                yüksek kaliteli malzemeler ve işçilik sunarak bu talepleri
                karşılamaktadır.
              </li>
              <li>
                <strong>Kültürel Bağlar:</strong> Almanya'da büyük bir Türk
                nüfusunun bulunması, Türk mobilyalarına olan ilgiyi
                artırmaktadır.
              </li>
            </ul>

            <h2>Birleşik Krallık</h2>

            <ul>
              <li>
                <strong>Estetik ve Fonksiyonellik:</strong> İngiliz tüketiciler,
                estetik açıdan çekici ve fonksiyonel mobilyalar aramaktadır.
                Türk mobilyaları, bu iki özelliği bir arada sunarak İngiltere
                pazarında popüler hale gelmiştir.
              </li>
              <li>
                <strong>Modern ve Klasik Karışımı:</strong> Türk mobilyalarının
                hem modern hem de klasik tasarımlar sunması, Birleşik
                Krallık’taki geniş müşteri kitlesine hitap etmektedir.
              </li>
            </ul>

            <h2>Fransa</h2>

            <ul>
              <li>
                <strong>Sanatsal Tasarımlar:</strong> Fransa, sanata ve estetiğe
                büyük önem veren bir ülkedir. Türk mobilyalarının zarif ve
                detaylı tasarımları, Fransız tüketiciler arasında rağbet
                görmektedir.
              </li>
              <li>
                <strong>Kaliteli İşçilik:</strong> Fransa'da kaliteli işçilikle
                üretilmiş mobilyalara duyulan ilgi, Türk mobilyalarının
                popülaritesini artırmaktadır.
              </li>
            </ul>

            <h2>Hollanda</h2>

            <ul>
              <li>
                <strong>Çevre Dostu Ürünler:</strong> Hollanda, çevre dostu ve
                sürdürülebilir ürünlere büyük önem vermektedir. Türkiye’den
                gelen mobilyaların bir kısmının sürdürülebilir malzemelerle
                üretilmesi, Hollandalı tüketiciler için cazip hale gelmektedir.
              </li>
              <li>
                <strong>Çok Yönlülük:</strong> Türk mobilyalarının farklı stil
                ve fonksiyonlara sahip olması, Hollanda pazarında geniş bir
                yelpazede müşteri kitlesine hitap etmektedir.
              </li>
            </ul>

            <h2>İtalya</h2>

            <ul>
              <li>
                <strong>El İşçiliği ve Detay:</strong> İtalyanlar, el işçiliğine
                ve detaylara büyük önem vermektedir. Türk mobilyalarının bu
                konuda sunduğu yüksek kalite, İtalya’da büyük ilgi görmektedir.
              </li>
              <li>
                <strong>Tasarım Çeşitliliği:</strong> İtalya, çeşitli
                tasarımlara açık bir pazardır ve Türk mobilyalarının geniş
                tasarım yelpazesi, İtalyan tüketiciler tarafından takdir
                edilmektedir.
              </li>
            </ul>

            <h2>Genel Faktörler</h2>

            <ul>
              <li>
                <strong>Kültürel Yakınlık:</strong> Türkiye ile Avrupa ülkeleri
                arasındaki kültürel ve tarihi bağlar, mobilya ticaretini olumlu
                yönde etkilemektedir.
              </li>
              <li>
                <strong>Rekabetçi Fiyatlar:</strong> Türk mobilyalarının sunduğu
                rekabetçi fiyatlar, Avrupa’daki tüketiciler için cazip hale
                gelmektedir.
              </li>
              <li>
                <strong>Kolay Ulaşım:</strong> Türkiye'nin coğrafi konumu,
                Avrupa ülkelerine hızlı ve maliyet etkin ulaşım imkanı sunarak
                mobilya ticaretini desteklemektedir.
              </li>
            </ul>

            <p>
              Bu faktörler, Türkiye'nin Avrupa pazarındaki mobilya ihracatında
              neden güçlü bir konuma sahip olduğunu göstermektedir. Türk
              mobilyaları, kalitesi, estetiği ve fonksiyonelliği ile Avrupa’da
              geniş bir müşteri kitlesine hitap etmekte ve talep görmektedir.
            </p>
          </div>
        </motion.div>
      </div>
      <RecommendedBlogs />
    </div>
  );
}
