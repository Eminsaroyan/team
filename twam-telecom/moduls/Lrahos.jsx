import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Mas from "./Lrahosmaser";

let data = [
    {
        id: 1,
        image: "https://www.telecomarmenia.am/images/news/1/17478128501455.jpeg",
        mouth: "21 May",
        name: "Team Telecom Armenia-ն Տավուշում ամբողջովին վերազինել է բջջային ցանցը"
    },
    {
        id: 2,
        image: "https://www.telecomarmenia.am/images/news/1/17474608108675.png",
        mouth: "16 May",
        name: "Արի՛ ժամանակի միջով ճամփորդելու. Team-ի Կապի թանգարանը միացել է թանգարանային տոներին"
    },
    {
        id: 3,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 April",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 4,
        image: "https://www.telecomarmenia.am/images/news/1/174558548876.jpeg",
        mouth: "25 April",
        name: "Ուղղությունը՝ Թիմ․ Team ընկերությունների խումբը Career City Fest-ում սպասում է իր ապագա թիմակիցներին..."
    },
    {
        id: 5,
        image: "https://www.telecomarmenia.am/images/news/1/17454120971311.jpeg",
        mouth: "23 April",
        name: "Վաճառքի և սպասարկման կենտրոնների աշխատանքային գրաֆիկը ապրիլի 24-ին"
    },
    {
        id: 6,
        image: "https://www.telecomarmenia.am/images/news/1/17453080912448.jpeg",
        mouth: "22 April",
        name: "Team-ը հիմնում է 1 հեկտար անտառ Լոռու մարզում"
    },
    {
        id: 7,
        image: "https://www.telecomarmenia.am/images/news/1/17447115707507.jpeg",
        mouth: "15 April",
        name: "Ձեռք բեր 1 սմարթֆոն Team-ից, տնկիր 10 ծառ"
    },
    {
        id: 8,
        image: "https://www.telecomarmenia.am/images/news/2/17442822957451.png",
        mouth: "10 April",
        name: "Team Telecom Armenia-ն արժանացել է որակի կառավարման միջազգային հավաստագրի"
    },
    {
        id: 9,
        image: "https://www.telecomarmenia.am/images/news/1/17424063041539.jpeg",
        mouth: "19 Marchլ",
        name: "Team-ը և Ericsson-ը կնքեցին ռազմավարական համագործակցության հուշագիր"
    },
    {
        id: 10,
        image: "https://www.telecomarmenia.am/images/news/1/17422985962904.jpeg",
        mouth: "18 March",
        name: "Զգուշացում. Team-ի անունից տարածվում է ներդրումների վերաբերյալ կեղծ հայտարարություն"
    },
    {
        id: 11,
        image: "https://www.telecomarmenia.am/images/news/1/17419472258909.jpeg",
        mouth: "14 March",
        name: "Team-ը բջջային ցանցի մասշտաբային արդիականացում կիրականացնի"
    },
    {
        id: 12,
        image: "https://www.telecomarmenia.am/images/news/1/17413397316409.jpeg",
        mouth: "07 March",
        name: "Գարունը ձեռքերում. նորագույն հեռախոս, սմարթ ժամացույց և այլ անակնկալներ Team-ից"
    },
    {
        id: 13,
        image: "https://www.telecomarmenia.am/images/news/2/17401254765163.jpeg",
        mouth: "21 February",
        name: "Team-ի համահիմնադիր Ալեքսանդր Եսայանը վերընտրվել է ԱՏՁՄ նախագահի պաշտոնում"
    },
    {
        id: 14,
        image: "https://www.telecomarmenia.am/images/news/1/17381558317549.jpeg",
        mouth: "29 January",
        name: "Team-ը`Համահայկական ձմեռային երկրորդ խաղերի հովանավոր"
    },
    {
        id: 15,
        image: "https://www.telecomarmenia.am/images/news/1/17351309373343.jpeg",
        mouth: "25 December",
        name: "Վաճառքի և սպասարկման կենտրոնների աշխատանքային գրաֆիկը տոնական օրերին"
    },
    {
        id: 16,
        image: "https://www.telecomarmenia.am/images/news/1/17351058800968.png",
        mouth: "24 December",
        name: "Team-ի նորագույն NGN ցանցը հասանելի է Վայոց ձորում և Արմավիրում"
    },
    {
        id: 17,
        image: "https://www.telecomarmenia.am/images/news/2/17349390035646.jpeg",
        mouth: "20 December",
        name: "Team-ի Կայուն զարգացման պարտատոմսերը ցուցակվեցին Հայաստանի ֆոնդային բորսայում"
    },
    {
        id: 18,
        image: "https://www.telecomarmenia.am/images/news/1/17340743012888.jpeg",
        mouth: "13 December",
        name: "Team ընկերությունների խումբը ձեռք է բերել իռլանդական Imagine օպերատորի բաժնետոմսերի..."
    },
    {
        id: 19,
        image: "https://www.telecomarmenia.am/images/news/1/17340092716975.jpeg",
        mouth: "12 December",
        name: "Team Telecom Armenia-ն ապագա ներդրողներին ներկայացրեց Կայուն զարգացման պարտատոմսերը"
    },
    {
        id: 20,
        image: "https://www.telecomarmenia.am/images/news/1/17334652618625.png",
        mouth: "06 December",
        name: "Beacon 1.1 արժեքի փոփոխություն"
    },
    {
        id: 21,
        image: "https://www.telecomarmenia.am/images/news/2/17333931457674.jpeg",
        mouth: "05 December",
        name: "«Տելեկոմ Արմենիա» ԲԲԸ-ն Հայաստանում առաջինն է թողարկում Կայուն զարգացման պարտատոմսեր"
    },


]

export default function NewsSlider() {
    return (
        <div className="mt-[40px] max-w-[1500px] mx-auto px-[20px]">
            <h1 className="text-[32px] font-bold mb-[20px] text-center">Լրահոս</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                slidesPerGroup={3}
                navigation
                loop={true}
                speed={800}
                breakpoints={{
                    500: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map((el) => (
                    <SwiperSlide key={el.id}>
                        <Mas image={el.image} mouth={el.mouth} name={el.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}