import Mas from "./Lrahosmaser";

let data = [
    {
        id: 1,
        image: "https://www.telecomarmenia.am/images/news/1/17478128501455.jpeg",
        mouth: "21 մայիս",
        name: "Team Telecom Armenia-ն Տավուշում ամբողջովին վերազինել է բջջային ցանցը"
    },
    {
        id: 2,
        image: "https://www.telecomarmenia.am/images/news/1/17474608108675.png",
        mouth: "16 մայիս",
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
        mouth: "30 ապրիլ",
        name: "Ձեռք բեր 1 սմարթֆոն Team-ից, տնկիր 10 ծառ"
    },
    {
        id: 8,
        image: "https://www.telecomarmenia.am/images/news/2/17442822957451.png",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն արժանացել է որակի կառավարման միջազգային հավաստագրի"
    },
    {
        id: 9,
        image: "https://www.telecomarmenia.am/images/news/1/17424063041539.jpeg",
        mouth: "30 ապրիլ",
        name: "Team-ը և Ericsson-ը կնքեցին ռազմավարական համագործակցության հուշագիր"
    },
    {
        id: 10,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 11,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 12,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 13,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 14,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 15,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 16,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 17,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 18,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 19,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 20,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },
    {
        id: 21,
        image: "https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg",
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    },


]

export default function () {
    return (
        <div className="flex flex-col items-center mt-[40px]">
            <h1 className="text-[32px] font-bold mb-[20px]">Լրահոս</h1>
            <div className="grid grid-cols-3  gap-[20px] w-full max-w-[1200px] px-[20px]">
                {data.map((el) => (
                    <Mas key={el.id} id={el.id} image={el.image} mouth={el.mouth} name={el.name} />
                ))}
            </div>
        </div>
    )
}