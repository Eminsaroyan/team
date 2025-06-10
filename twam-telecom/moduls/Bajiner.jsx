import Maser from "./Maser";

const data = [
    { id: 1, name: "Բջջային կապ", image: "https://www.telecomarmenia.am/images/promo/1/16509682370213.png" },
    { id: 2, name: "Ֆիքսված կապ", image: "https://www.telecomarmenia.am/images/promo/1/1650969068409.png" },
    { id: 3, name: "Հավելվածնե", image: "https://www.telecomarmenia.am/images/promo/1/16509690498367.png" },
    { id: 4, name: "Ինտերնետ և TV", image: "https://www.telecomarmenia.am/images/promo/1/16510462295535.png", }
];


export default function () {
    return (
        <div className="grid grid-cols-2 justify-items-center gap-4 mt-[30px] m-[90px] lg:grid-cols-2">
            {data.map((el) => (
                <Maser key={el.id} id={el.id} name={el.name} image={el.image} />
            ))}
        </div>
    )
}