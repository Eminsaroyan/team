import { useState, useEffect } from "react";
import Navbaj from "./Navbaj-apranqner";

const miacum = [
    {
        id: 1,
        anun: "Արտաքին մարտկոց 3mk MagSynergy 5000mAh ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17352122121883/245x280c-center.jpeg",
        gin: "22,000 ֏"
    },
    {
        id: 2,
        anun: "Արտաքին մարտկոց 3mk Hardy MagSynergy Ni+10.000mAh ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17352119721237/245x280c-center.jpeg",
        gin: "25,000 ֏"
    },
    {
        id: 3,
        anun: "Հենակ մեքենայի 3mk Car MagChargerfor Airvent ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17351990521334/245x280c-center.jpeg",
        gin: "8,000 ֏"
    },
    {
        id: 4,
        anun: "Մալուխ 3mk Hyper Thunderbolt Cable 240W ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17351979130219/245x280c-center.jpeg",
        gin: "14,000 ֏"
    },
    {
        id: 5,
        anun: "Մալուխ 3mk Hyper Silicone Cable-C to Type-C 60W 3A ",
        nkar: "https://www.telecomarmenia.am/images/product/9/1735196481803/245x280c-center.jpeg",
        gin: "4,500 ֏"
    },
    {
        id: 6,
        anun: "Մալուխ 3mk Hyper Silicone Cable-C to C 2m 100W ",
        nkar: "https://www.telecomarmenia.am/images/product/9/1734615645648/245x280c-center.jpeg",
        gin: "4,500 ֏"
    },
    {
        id: 7,
        anun: "Մալուխ 3mk Hyper Cable C to Lightning 20W 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17346105791091/245x280c-center.jpeg",
        gin: "3,000 ֏"
    },
    {
        id: 8,
        anun: "Մալուխ 3mk Hyper Cable C to Lightning 20W 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/9/1734610370712/245x280c-center.jpeg",
        gin: "3,000 ֏"
    },
    {
        id: 9,
        anun: "Մալուխ 3mk Hyper Cable C to C 100W 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17345959116677/245x280c-center.jpeg",
        gin: "4,000 ֏"
    },
    {
        id: 10,
        anun: "Լիցքավորման սարք 3MK Hyper Gan Charger 33W ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17345237634333/245x280c-center.jpeg",
        gin: "5,700 ֏"
    },
    {
        id: 11,
        anun: "Լիցքավորման սարք 20W 1C+1A Fast Charger + 20W C to L cable 1.2m ",
        nkar: "https://www.telecomarmenia.am/images/product/8/17291630122902/245x280c-center.png",
        gin: "3,500 ֏"
    },
    {
        id: 12,
        anun: "Ակուստիկ համակարգ  Marshall Uxbridge Google ",
        nkar: "https://www.telecomarmenia.am/images/product/8/17291611806127/245x280c-center.jpeg",
        gin: "5,200 ֏"
    }
]

export default function Connectivityfiltr() {
    const [isOpen, setIsOpen] = useState(true);
    const [isBeautifulNumbersOpen, setIsBeautifulNumbersOpen] = useState(true);
    const [istesak, setTesakOpen] = useState(true)


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
                                                {["1,000 ֏ - 50,000 ֏", "50,000 ֏ - 100,000 ֏"].map((range, idx) => (
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
                                    <button onClick={() => setIsBeautifulNumbersOpen(!isBeautifulNumbersOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isBeautifulNumbersOpen} aria-controls="brandContent">
                                        Բրենդ
                                    </button>
                                    {isBeautifulNumbersOpen && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["Apple", "VLP", "Mcdodo", "3MK"].map((opt, idx) => (
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
                        {miacum.map((item) => (
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
        </div >
    );
}
