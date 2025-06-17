import Eshopbajin from './Eshopbajinermas';

const data = [
    { id: 1, name: "Պարզ և հարմար", text1: "Գնիր ոնց հարմար է Քեզ համար", text2: "Գնել", image: "https://www.telecomarmenia.am/images/promo/1/16509756564861.png", bg: "#96d1db", color: "#000000", },
    { id: 2, name: "Առաքման պայմաններ", text1: "Առաքում Հայաստանի ողջ տարածքում", text2: "Մանրամասն", image: "https://www.telecomarmenia.am/images/promo/1/16509757089642.png", bg: "#01425f", color: "#ffffff", },
    { id: 3, name: "Առցանց ապառիկ", text1: "Ի՞նչ է այն և ո՞նց է աշխատում", text2: "Մանրամասն", image: "https://www.telecomarmenia.am/images/promo/1/16509758156906.png", bg: "#e3ddd2", },
    { id: 4, name: "Ապառիկի պայմաններ", text1: "Լավագույն պայմաները Team-ից", text2: "Մանրամասն", image: "https://www.telecomarmenia.am/images/promo/1/16509757444797.png", bg: "#96d1db", }
];


export default function () {
    return (
        <div className="grid grid-cols-2 justify-items-center gap-4 mt-[50px] m-[90px] lg:grid-cols-2">
            {data.map((el) => (
                <Eshopbajin key={el.id} id={el.id} name={el.name} text1={el.text1} text2={el.text2} image={el.image} bg={el.bg} color={el.color} />
            ))}
        </div>
    )
}