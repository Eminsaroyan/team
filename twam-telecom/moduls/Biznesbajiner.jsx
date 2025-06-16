import Biznesmas from './Biznesbajinermas';

const data = [
    { id: 1, name: "Կորպորատիվ ցանցեր", text1: "Տեղեկատվության փոխանակման ապահով համակարգ", image: "https://www.telecomarmenia.am/images/promo/1/16509737068164.png" },
    { id: 2, name: "Mobile ID",text1:"Վճարումներ և նույնականացում բջջային հեռախոսի միջոցով", image: "https://www.telecomarmenia.am/images/promo/1/16509737228197.png" },
    { id: 3, name: "M2M լուծումներ", text1:"Տվյալների հուսալի փոխանցում",image: "https://www.telecomarmenia.am/images/promo/1/16509737385483.png" },
    { id: 4, name: "SMS-ինֆո",text1:"Զանգվածային SMS տարածման ծառայություն", image: "https://www.telecomarmenia.am/images/promo/1/16509737509423.png", }
];


export default function () {
    return (
        <div className="grid grid-cols-2 justify-items-center gap-4 mt-[50px] m-[90px] lg:grid-cols-2">
            {data.map((el) => (
                <Biznesmas key={el.id} id={el.id} name={el.name} text1={el.text1} image={el.image} />
            ))}
        </div>
    )
}