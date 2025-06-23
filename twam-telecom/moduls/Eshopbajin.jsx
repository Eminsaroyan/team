
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Buj from "./Eshopbajinmas";

let data = [
    {
        id: 1,
        image: "https://www.telecomarmenia.am/images/advanced_slider/2/17489586047297.jpeg",
    },
    {
        id: 2,
        image: "https://www.telecomarmenia.am/images/advanced_slider/2/17489584659191.jpeg",
    },
    {
        id: 3,
        image: "https://www.telecomarmenia.am/images/advanced_slider/2/1748944013709.jpeg",
    },
    {
        id: 4,
        vernagir: "SONY Smart TV",
        bovandakutyun: "ԿՈՍՄՈ/ԿՈՄԲՈ փաթեթներ",
        but: "Մանրամասն",
        image: "https://www.telecomarmenia.am/images/advanced_slider/1/17054709118389.png",
        color: "#91a8d0",
    },
]

export default function () {
    return (
        <div>
            <div className="">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >
                    {data.map((el) => (
                        <SwiperSlide key={el.id}>
                            {el.vernagir ? (
                                <Buj
                                    vernagir={el.vernagir}
                                    bovandakutyun={el.bovandakutyun}
                                    but={el.but}
                                    image={el.image}
                                    color={el.color}
                                />
                            ) : (
                                <img
                                    src={el.image}
                                    alt=""
                                    className="ml-[450px]"
                                />
                            )}
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}