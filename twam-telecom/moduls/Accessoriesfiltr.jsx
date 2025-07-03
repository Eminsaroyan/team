import { useState, useEffect } from "react";
import Navbaj from "./Navbaj-apranqner";

const acs = [
    {
        id: 1,
        anun: "Բարձրախոս JBL FLIP 6 ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17477418264523/245x280c-center.png",
        gin: "59,900 ֏"
    },
    {
        id: 2,
        anun: "Անլար ականջակալ Marshall Major V ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17472063669139/245x280c-center.png",
        gin: "64,900 ֏"
    },
    {
        id: 3,
        anun: "Պատյան Apple iPhone 16 Pro Max 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355558012237/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 4,
        anun: "Պատյան Apple iPhone 16 Pro Max 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355550026716/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 5,
        anun: "Պատյան Apple iPhone 16 Pro 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355547503823/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 6,
        anun: "Պատյան Apple iPhone 16 Pro 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355545051807/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 7,
        anun: "Apple Watch Series 10 GPS 42mm Rose Gold Aluminium Case with Light Blush Sport Band - S/M ",
        nkar: "https://www.telecomarmenia.am/images/product/8/17268305098487/245x280c-center.jpeg",
        gin: "259,900 ֏"
    },
    {
        id: 8,
        anun: "Apple Watch SE GPS 40mm ",
        nkar: "https://www.telecomarmenia.am/images/product/7/16977140220957/245x280c-center.jpeg",
        gin: "139,900 ֏"
    },
    {
        id: 9,
        anun: "Elari Kidphone 2 ",
        nkar: "https://www.telecomarmenia.am/images/product/6/16846701947605/245x280c-center.jpeg",
        gin: "13,900 ֏"
    },
    {
        id: 10,
        anun: "Netac U278 USB 3.0 128GB | 128 GB",
        nkar: "https://www.telecomarmenia.am/images/product/6/1679480528996/245x280c-center.jpeg",
        gin: "8,000 ֏"
    },
    {
        id: 11,
        anun: "Արտաքին մարտկոց 3mk MagSynergy 5000mAh ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17352122121883/245x280c-center.jpeg",
        gin: "22,000 ֏"
    },
    {
        id: 12,
        anun: "Արտաքին մարտկոց 3mk Hardy MagSynergy Ni+10.000mAh ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17352119721237/245x280c-center.jpeg",
        gin: "25,000 ֏"
    },
    {
        id: 13,
        anun: "Հենակ մեքենայի 3mk Car MagChargerfor Airvent ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17351990521334/245x280c-center.jpeg",
        gin: "8,000 ֏"
    },
    {
        id: 14,
        anun: "Մալուխ 3mk Hyper Thunderbolt Cable 240W ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17351979130219/245x280c-center.jpeg",
        gin: "14,000 ֏"
    },
    {
        id: 15,
        anun: "Մալուխ 3mk Hyper Silicone Cable-C to Type-C 60W 3A ",
        nkar: "https://www.telecomarmenia.am/images/product/9/1735196481803/245x280c-center.jpeg",
        gin: "4,500 ֏"
    },
    {
        id: 16,
        anun: "Մալուխ 3mk Hyper Silicone Cable-C to C 2m 100W ",
        nkar: "https://www.telecomarmenia.am/images/product/9/1734615645648/245x280c-center.jpeg",
        gin: "4,500 ֏"
    },
    {
        id: 17,
        anun: "Մալուխ 3mk Hyper Cable C to Lightning 20W 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17346105791091/245x280c-center.jpeg",
        gin: "3,000 ֏"
    },
    {
        id: 18,
        anun: "Մալուխ 3mk Hyper Cable C to Lightning 20W 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/9/1734610370712/245x280c-center.jpeg",
        gin: "3,000 ֏"
    },
    {
        id: 19,
        anun: "Մալուխ 3mk Hyper Cable C to C 100W 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17345959116677/245x280c-center.jpeg",
        gin: "4,000 ֏"
    },
]

export default function Accessoriesfiltr() {
    const [isOpen, setIsOpen] = useState(true);
    const [isBeautifulNumbersOpen, setIsBeautifulNumbersOpen] = useState(true);
    const [isnerqhish, setInerqhishOpen] = useState(true);
    const [isguyn, setGuynOpen] = useState(true);
    const [islicqsOpen, setlicqOpen] = useState(true);
    const [istesak, setTesakOpen] = useState(true);


    return (
        <div>
            <h1 className="w-[100] mt-[20px] border-t border-t-[#ebedef]"></h1>
            <div className="mt-[20px] max-w-[1230px] mx-auto flex bg-white py-6">
                <div className="mr-[10px]">
                    <div className="w-[288px] border-none">
                        <div className="mb-[20px] pt-[18px] bg-[#f8f9f9] border-[#ebedef]">
                            <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] mb-[20px]">
                                <h2 className="pt-0 px-[20px] pb-[18px] mb-[10px] tracking-[1px] text-[18px] border-b border-b-[#ebedef]">Ֆիլտրեր</h2>

                                <div className="w-full max-w-[320px] bg-white border-b border-b-[#ebedef]">
                                    <div className="w-full py-[10px] pr-[30px] pl-0">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        >
                                            Գին
                                        </button>
                                    </div>
                                    {isOpen && (
                                        <div className="px-[20px] py-[20px]">
                                            <div className="space-y-[12px]">
                                                {["1,000 ֏ - 50,000 ֏ ", "50,000 ֏ - 100,000 ֏", "100,000 ֏ - 150,000 ֏", "200,000 ֏ - 250,000 ֏"].map((range, idx) => (
                                                    <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                        <input type="checkbox" name="price" className="mr-[8px] accent-blue-500" />
                                                        {range}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="px-[20px] mt-[20px] border-b border-b-[#ebedef]">
                                    <label className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                        <input type="checkbox" name="discount" className="mr-[8px] accent-blue-500" />
                                        Զեղչված
                                    </label>
                                </div>

                                <div className="px-[20px] mt-[20px] border-b border-b-[#ebedef]">
                                    <label className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                        <input type="checkbox" name="promo" className="mr-[8px] accent-blue-500" />
                                        Պրոմո
                                    </label>
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setGuynOpen(!isguyn)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isguyn} aria-controls="brandContent">
                                        Գույն
                                    </button>
                                    {isguyn && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["Սև", "Սպիտակ", "SIlver", "Grey", "Green"].map((opt, idx) => (
                                                < label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600" >
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setIsBeautifulNumbersOpen(!isBeautifulNumbersOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isBeautifulNumbersOpen} aria-controls="brandContent">
                                        Բրենդ
                                    </button>
                                    {isBeautifulNumbersOpen && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["Netac", "Canyon", "Apple", "JBL", "F+", "Marshall"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setTesakOpen(!istesak)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={istesak} aria-controls="brandContent">
                                        Տեսակ
                                    </button>
                                    {istesak && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["Ադապտեր", "Մալուխ", "Լիցքավորում"].map((opt, idx) => (
                                                < label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600" >
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setInerqhishOpen(!isnerqhish)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isnerqhish} aria-controls="brandContent">
                                        Ներքին հիշողություն
                                    </button>
                                    {isnerqhish && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["128 GB"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setlicqOpen(!islicqsOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={islicqsOpen} aria-controls="brandContent">
                                        Արագ լիցքավորում
                                    </button>
                                    {islicqsOpen && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["Այո"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>




                                <div className="bg-[#f5f6f7] pt-[30px] px-[20px] pb-[20px]">
                                    <button className="w-full h-[44px] px-[18px] font-[800] border-none text-[#ffffff] text-[18px] bg-[#f04d4d] rounded-[30px] hover:bg-[#e03a3a] transition-all duration-200 text-center whitespace-nowrap font-[Team-Bold] mb-[10px]">
                                        Ֆիլտրել
                                    </button>
                                    <button className="w-full text-[#2c3843] underline border-none bg-[#f5f6f7]">
                                        Մաքրեք ֆիլտրերը
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between mb-[20px] p-[40px] gap-[20px]">
                        <div className="w-[50%]">
                            <input
                                type="search"
                                placeholder="Որոնել"
                                className="w-full h-[44px] bg-white border border-[#ebedef] rounded-[22px] px-[20px] pl-[34px] py-[11px] box-border"
                            />
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[#2c3843] text-[16px]">Դասավորել ըստ`</p>
                            <select className="h-[44px] border border-[#ebedef] rounded-[22px] cursor-pointer block box-border px-[12px] text-[16px] text-[#2c3843]">
                                <option value="">ընտրել</option>
                                <option value="low-high">Գին՝ ցածրից բարձր</option>
                                <option value="high-low">Գին՝ բարձրից ցածր</option>
                            </select>
                        </div>
                    </div>



                    <div className="grid grid-cols-3 justify-center mb-[200px] gap-[20px]">
                        {acs.map((item) => (
                            <Navbaj
                                key={item.id}
                                id={item.id}
                                anun={item.anun}
                                nkar={item.nkar}
                                gin={item.gin}
                                text={item.text}
                                aparik={item.aparik}
                                image={item.nkar}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
