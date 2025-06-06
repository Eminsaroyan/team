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
        mouth: "30 ապրիլ",
        name: "Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք..."
    }
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