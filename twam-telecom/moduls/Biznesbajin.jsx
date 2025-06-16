import Bajin from "./Biznesnajinmas"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

let data = [
    {
        id: 1,
        vernagir: "PRO",
        text1: "•PROգրեսիվ",
        text2: "•PROդուկտիվ",
        text3: "•PROֆեսիոնալ",
        image: "https://www.telecomarmenia.am/images/advanced_slider/1/1650973651394.png",
        but: "Մանրամասն",
        bg: "https://www.telecomarmenia.am/images/advanced_slider/1/16509736514207.png",
    },
    {
        id: 2,
        vernagir: "Միացե՛ք",
        text1: "Փորձարկե՛ք հնարավորություններն ԱՆՎՃԱՐ",
        image: "https://www.telecomarmenia.am/images/advanced_slider/1/1696925830142.png",
        but: "Միանալ",
        bg: "https://www.telecomarmenia.am/images/advanced_slider/1/16969258302134.png",
    },
    {
        id: 3,
        vernagir: "Բիզնես",
        text1: "•ՀՀ բոլոր ցանցեր",
        text2: "•Ռուսաստան Beeline ցանց",
        text3: "•PROֆեսիոնալ",
        image: "https://www.telecomarmenia.am/images/advanced_slider/1/16969336013421.png",
        but: "Մանրամասն",
        bg: "https://www.telecomarmenia.am/images/advanced_slider/1/16969259307808.png",
    }

]

export default function () {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {data.map((el) => (
                    <SwiperSlide key={el.id}>
                        <Bajin
                            key={el.id}
                            id={el.id}
                            vernagir={el.vernagir}
                            text1={el.text1}
                            text2={el.text2}
                            text3={el.text3}
                            image={el.image}
                            bg={el.bg}
                            but={el.but} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}