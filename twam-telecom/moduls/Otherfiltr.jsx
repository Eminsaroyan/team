import { useState, useEffect } from "react";
import Navbaj from "./Navbaj-apranqner";

const myus = [
    {
        id: 1,
        anun: "Պատյան Apple iPhone 16 Pro Max 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355558012237/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 2,
        anun: "Պատյան Apple iPhone 16 Pro Max 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355550026716/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 3,
        anun: "Պատյան Apple iPhone 16 Pro 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355547503823/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 4,
        anun: "Պատյան Apple iPhone 16 Pro 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355545051807/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 5,
        anun: "Պատյան Apple iPhone 16 Plus 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17355541595953/245x280c-center.jpeg",
        gin: "6,000 ֏"
    },
    {
        id: 6,
        anun: "Պատյան Apple iPhone 16 Plus  3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17353033655185/245x280c-center.jpeg",
        gin: "6,000 ֏"
    },
    {
        id: 7,
        anun: "Պատյան Apple iPhone 16 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17353029741921/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 8,
        anun: "Պատյան Apple iPhone 15 - 3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17353026691965/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 9,
        anun: "Պատյան Apple iPhone 15  3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17353023033556/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 10,
        anun: "Պատյան Apple iPhone 16  3mk Frosty MagCase ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17353029741921/245x280c-center.png",
        gin: "6,000 ֏"
    },
    {
        id: 11,
        anun: "Պատյան Apple iPhone 16 3mk Smoke Mag&Stand ",
        nkar: "https://www.telecomarmenia.am/images/product/8/17321944509297/245x280c-center.jpeg",
        gin: "10,000 ֏"
    },
    {
        id: 12,
        anun: "Պատյան Apple iPhone 16 Pro 3mk Satin Armor ",
        nkar: "https://www.telecomarmenia.am/images/product/8/17321916562212/245x280c-center.jpeg",
        gin: "5,000 ֏"
    }
]

export default function Otherfiltr() {
    const [isOpen, setIsOpen] = useState(true);
    const [isBeautifulNumbersOpen, setIsBeautifulNumbersOpen] = useState(true);
    const [istesak, setTesakOpen] = useState(true)
    const [islicqsOpen, setlicqOpen] = useState(true)
    const [isusbOpen, setusb] = useState(true)


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
                                            {["Canyon", "Kodak", "VLP", "Apple", "AWEI"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                

                                 <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setusb(!isusbOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isusbOpen} aria-controls="brandContent">
                                       USB բնիկների քանակը
                                    </button>
                                    {isusbOpen && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {[2 ].map((opt, idx) => (
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
                                            {["Ոչ", "Այո"].map((opt, idx) => (
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
                                            {["Մալուխ"].map((opt, idx) => (
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
                        {myus.map((item) => (
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
