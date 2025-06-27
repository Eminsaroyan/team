import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Masmas from "./Info-mas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function NewsSlider() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "glxavorbaj", "data");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setSlides(data.items || []);
                } else {
                    console.error("Փաստաթուղթը գոյություն չունի");
                }
            } catch (error) {
                console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                pagination={{ clickable: true }}
                loop={slides.length > 1} // ✅ loop միայն եթե բավարար է
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {slides.map((el) => (
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
