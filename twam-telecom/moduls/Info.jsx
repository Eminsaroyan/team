import Masmas from "./Info-mas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


let data = [
    {
        id: 1,
        vernagir: "Be Free 3500",
        bovandakutyun: "Անսահմանափակ ինտերնետ",
        but: "Ավելին",
        image: "https://www.telecomarmenia.am/images/advanced_slider/2/17494512279093.jpeg",
        color: "#e5e0d8",
    },
    {
        id: 2,
        vernagir: "ԿՈՍՄՈ",
        bovandakutyun: "Առաջին ամիսն ԱՆՎՃԱՐ՝ առցանց միանալու դեպքում:",
        but: "Ավելին",
        image: "https://www.telecomarmenia.am/images/advanced_slider/2/17486286320455.png",
        color: "#002230",
        guyn: "#FFFFFF",
    },
    {
        id: 3,
        vernagir: "BE FREE 4000 սակագնային փաթեթ",
        but: "Ավելին",
        image: "https://www.telecomarmenia.am/images/advanced_slider/1/17144722984561.png",
        color: "#e5e0d8",
        width: '100%',
    },
    {
        id: 4,
        vernagir: "Շեյքի՛ր և Շահի՛ր",
        bovandakutyun: "Բազմաթիվ  նվերներ",
        but: "Միանալ",
        image: "https://www.telecomarmenia.am/images/advanced_slider/2/17400318089669.png",
        color: "#01415f",
        guyn: "#FFFFFF",
    },
    {
        id: 5,
        vernagir: "SONY Smart TV",
        bovandakutyun: "ԿՈՍՄՈ/ԿՈՄԲՈ փաթեթներ",
        but: "Մանրամասն",
        image: "https://www.telecomarmenia.am/images/advanced_slider/1/17054709118389.png",
        color: "#91a8d0",
    },
];

export default function NewsSlider() {
    return (
        <div className="">
            <Swiper
                modules={[Navigation, Autoplay]} // ավելացրել ենք Autoplay-ը modules-ի մեջ
                spaceBetween={10}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                loop={true}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false, // interaction-ից հետո շարունակի
                }}
            >
                {data.map((el) => (
                    <SwiperSlide key={el.id}>
                        <Masmas
                            vernagir={el.vernagir}
                            bovandakutyun={el.bovandakutyun}
                            but={el.but}
                            image={el.image}
                            color={el.color}
                            guyn={el.guyn}
                            width={el.width}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}