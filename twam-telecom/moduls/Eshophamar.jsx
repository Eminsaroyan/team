import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';

import Eshopapranq from "./Eshopapranq";
import Hamar from "./Eshophamarmas";

let data = [
    {
        id: 1,
        vernagir: "Պլատին",
        hamar: "099 27 66 66",
        gin: "112,000 ֏",
    },
    {
        id: 2,
        vernagir: "Պլատին",
        hamar: "091 25 66 66",
        gin: "112,000 ",
    },
    {
        id: 3,
        vernagir: "Ոսկի",
        hamar: "096 44 99 22",
        gin: "48,000 ",
    },
    {
        id: 4,
        vernagir: "Ոսկի",
        hamar: "096 44 02 22",
        gin: "48,000",
    },
    {
        id: 5,
        vernagir: "Ոսկի",
        hamar: "096 44 11 99",
        gin: "48,000",
    },
    {
        id: 6,
        vernagir: "Ոսկի",
        hamar: "096 44 03 33",
        gin: "48,000",
    },
    {
        id: 7,
        vernagir: "Նիկել",
        hamar: "096 15 00 29",
        gin: "1,600",
    },
    {
        id: 8,
        vernagir: "Արծաթ",
        hamar: "096 14 14 55",
        gin: "16,000",
    },
    {
        id: 9,
        vernagir: "Նիկել",
        hamar: "096 14 02 07",
        gin: "1,600",
    },
    {
        id: 10,
        vernagir: "Պլատին",
        hamar: "099 68 33 33",
        gin: "112,000",
    }
]

export default function () {
    return (
        <div>
            <Eshopapranq />
            <div>
                <div className='mb-[25px]'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        slidesPerGroup={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                    >
                        {data.map((el) => (
                            <SwiperSlide key={el.id}>
                                <Hamar vernagir={el.vernagir} hamar={el.hamar} gin={el.gin} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}