import { Link } from "react-router-dom";

export default function Sakaginlink() {
    return (
        <div className="w-[1230px] bg-[#ffffff]  m-auto">
            <ul className="flex justify-center list-none w-full">
                {[
                    {
                        to: "/mobile",
                        img: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png",
                        label: "Բջջային կապ",
                    },
                    {
                        to: "/cosmo",
                        img: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png",
                        label: "Ինտերնետ և TV - ԿՈՍՄՈ",
                    },
                    {
                        to: "/combo",
                        img: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png",
                        label: "Ինտերնետ և TV - ԿՈՄԲՈ",
                    },
                    {
                        to: "/fixed-phone",
                        img: "https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png",
                        label: "Ֆիքսված հեռախոսակապ",
                    },

                ].map(({ to, img, label }, index) => (
                    <li key={index} className="w-[400px]">
                        <Link
                            to={to}
                            className="group flex flex-col items-center justify-center text-center h-[80px] px-[20px] pt-[20px] pb-[15px] bg-[#ffffff] text-[#2c3843] no-underline border-b-[5px] border-transparent shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all duration-300"
                        >
                            <img
                                src={img}
                                alt={label}
                                className="w-[48px] h-[48px] mb-[8px] transition-transform duration-300 group-hover:scale-110"
                            />
                            <p className="text-[15px] font-medium leading-[20px] transition-transform duration-300 group-hover:scale-105">
                                {label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}