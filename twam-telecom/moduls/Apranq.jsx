import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Apranqmas from './Apranqmas';
const data = [
    {
        id: 1,
        name: "Honor X9c Smart | 256 GB",
        image: "https://www.telecomarmenia.am/images/product/9/17343318782473/245x280c-center.png",
        gin: "104,900 ֏",
        aparic: "1,750֏/ամիս",
    },
    {
        id: 2,
        name: "Samsung A16 | 128 GB",
        image: "https://www.telecomarmenia.am/images/product/8/17327054608968/245x280c-center.png",
        gin: "67,900 ֏",
        aparic: "1,270֏/ամիս",
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 FE | 	128  GB",
        image: "https://www.telecomarmenia.am/images/product/8/17314952611489/245x280c-center.png",
        gin: "231,900 ֏",
        aparic: "4,300 ֏/ամիս",
    },
    {
        id: 4,
        name: "Ականջակալ AirPods 4",
        image: "https://www.telecomarmenia.am/images/product/8/17268300771811/241x273c-center.jpeg ",
        gin: "74,900  ֏",
    },
    {
        id: 5,
        name: "Բրենդավորված ուսապարկ",
        image: "https://www.telecomarmenia.am/images/product/8/17241484284143/241x273c-center.jpeg",
        gin: "13,900 ֏",
    },
    {
        id: 6,
        name: "Նոթբուք Apple MacBook Air 13' M3",
        image: "https://www.telecomarmenia.am/images/product/10/1749621552109/241x273c-center.jpeg",
        gin: "529,900 ֏",
    },
    {
        id: 7,
        name: "Պլանշետ Apple iPad Wi-Fi 11",
        image: "https://www.telecomarmenia.am/images/product/9/17437604544896/241x273c-center.jpeg",
        gin: "189,900 ֏",
    },
    {
        id: 8,
        name: "Հեռուստացույց TCL 55P735 55",
        image: "https://www.telecomarmenia.am/images/product/9/17364961409782/241x273c-center.jpeg",
        gin: "257,000 ֏",
    },
    {
        id: 9,
        name: "Ֆոտոտպիչ Kodak Mini 3 + 60 Sheets",
        image: "https://www.telecomarmenia.am/images/product/6/16877940317476/241x273c-center.jpeg",
        gin: "89,900 ֏",
    },
    {
        id: 10,
        name: "Բարձրախոս JBL FLIP 6",
        image: "https://www.telecomarmenia.am/images/product/9/17477418264523/241x273c-center.png",
        gin: "59,900 ֏",
    },
    {
        id: 11,
        name: "Անլար ականջակալ Marshall Major V",
        image: "https://www.telecomarmenia.am/images/product/9/17472063669139/241x273c-center.png",
        gin: "64,900 ֏",
    },
    {
        id: 12,
        name: "Պատյան Apple iPhone 16 Pro Max 3mk Frosty MagCase",
        image: "https://www.telecomarmenia.am/images/product/9/17355558012237/241x273c-center.png",
        gin: "6,000 ֏",
    },
    {
        id: 13,
        name: "Նոթբուք Dell Vostro 3520 i3 - 1215",
        image: "https://www.telecomarmenia.am/images/product/9/17375288616621/241x273c-center.png",
        gin: "159,900 ֏",
    },
    {
        id: 14,
        name: "Նոթբուք Asus Vivobook E410MA",
        image: "https://www.telecomarmenia.am/images/product/9/17362300586986/241x273c-center.png",
        gin: "115,900 ֏",
    },
    {
        id: 15,
        name: "Նոթբուք ASUS E1504G (90NB0ZT2-M011A0)",
        image: "https://www.telecomarmenia.am/images/product/8/17331375273452/241x273c-center.jpeg",
        gin: "175,000 ֏",
    },
    {
        id: 16,
        name: "Մալուխ 3mk Hyper Thunderbolt Cable 240W",
        image: "https://www.telecomarmenia.am/images/product/9/17351979130219/241x273c-center.jpeg",
        gin: "14,000 ֏",
    },
    {
        id: 17,
        name: "Մալուխ 3mk Hyper Silicone Cable-C to Type-C 60W 3A",
        image: "https://www.telecomarmenia.am/images/product/9/1735196481803/241x273c-center.jpeg",
        gin: "4,500 ֏",
    },
    {
        id: 18,
        name: "Մալուխ 3mk Hyper Silicone Cable-C to C 2m 100W",
        image: "https://www.telecomarmenia.am/images/product/9/1734615645648/241x273c-center.jpeg",
        gin: "4,500 ֏",
    },
    {
        id: 19,
        name: "Արտաքին մարտկոց 3mk Hardy MagSynergy Ni+10.000mAh",
        image: "https://www.telecomarmenia.am/images/product/9/17352119721237/241x273c-center.jpeg",
        gin: "25,000 ֏",
    },
];

export default function Apranq() {
    return (
        <div className="mt-[40px] m-[20px] mb-[20px] ">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                slidesPerGroup={3}
                pagination={{ clickable: true }}
                className="pb-10"
                loop={true}
                speed={800}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {data.map((el) => (
                    <SwiperSlide key={el.id}>
                        <Apranqmas
                            id={el.id}
                            image={el.image}
                            gin={el.gin}
                            name={el.name}
                            aparic={el.aparic}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
