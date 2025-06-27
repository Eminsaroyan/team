import { useState, useEffect, useRef } from "react";

const tabs = [
    {
        id: "general",
        title: "Գործող ընդհանուր դրույթներ և պայմաններ",
        content: [
            {
                label: "Գործող ընդհանուր դրույթներ և պայմաններ",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/terms%202024/new%20oferta%20am.pdf",
            },
            {
                label: "«Արի՛ #SSS24 ընկերոջդ հետ» Գովազդային վիճակախաղի կանոններ",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/SSS-GiveAway-conditions-changed.pdf",
            },
        ],
    },
    {
        id: "archive",
        title: "Արխիվ",
        content: [
            {
                label: "Գործել է 2021թ. ապրիլի 12-ից մինչև 2022թ. օգոստոսի 2-ը",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/archive/1.%20Havelvats.pdf",
            },
            {
                label: "Գործել է 2022թ. օգոստոսի 2-ից մինչև 2023թ. մարտի 15-ը",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/archive/2.%20Havelvac.pdf",
            },
            {
                label: "Գործել է 2023թ. մարտի 15-ից մինչև 2023թ. սեպտեմբերի 23-ը",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/archive/3.%20Havelvac.pdf",
            },
            {
                label: "Գործել է 2023թ. սեպտեմբերի 23-ից մինչև 2023թ. դեկտեմբերի 25-ը",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/archive/4.%20havelvats.pdf",
            },
            {
                label: "Գործել է 2023թ. դեկտեմբերի 25-ից մինչև 2024թ. հոկտեմբերի 1-ը",
                link: "https://www.telecomarmenia.am/file_manager/terms_and_conditions/oferta-arm.pdf",
            },
        ],
    },
];

export default function Paymanermas() {
    const [activeTab, setActiveTab] = useState("general");
    const [showArchiveList, setShowArchiveList] = useState(false);
    const [openIndexes, setOpenIndexes] = useState([]); // general-ի multiple open indexes

    const activeTabObj = tabs.find((tab) => tab.id === activeTab);

    // Տոգլ general-ի բացված ինդեքսների համար
    const toggleIndex = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    // Tab փոխելիս ռեսեթ անել բոլոր open վիճակները
    const handleTabClick = (id) => {
        setActiveTab(id);
        setShowArchiveList(false);
        setOpenIndexes([]);
    };

    // Archive ul-ի ref + maxHeight state animation-ի համար
    const archiveRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (showArchiveList) {
            setMaxHeight(archiveRef.current ? archiveRef.current.scrollHeight + "px" : "0px");
        } else {
            setMaxHeight("0px");
        }
    }, [showArchiveList]);

    return (
        <div className="max-w-[1230px] m-auto flex flex-col gap-6 pt-[40px] px-4">
            <h1 className="text-[45px] font-[600] font-team mb-[40px]">
                Ընդհանուր դրույթներ և պայմաններ
            </h1>

            <div className="flex mb-[50px]">
                {/* Tabs Left */}
                <div className="w-[300px] pr-[4rem]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`w-full text-left pl-[10px] pr-[20px] border-none py-[2rem] rounded transition ${activeTab === tab.id
                                ? "bg-[#3fd0cf]/20 text-black font-semibold"
                                : "hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="flex-1 text-[18px] text-[#333] leading-relaxed">
                    {activeTab === "general" ? (
                        <div className="flex flex-col gap-6">
                            {activeTabObj.content.map((item, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => toggleIndex(index)}
                                        className={`text-[30px] font-[600] mb-[10px] w-full text-left border-none border-b-2 pr-[60px] transition-colors duration-300 ${openIndexes.includes(index)
                                            ? "text-[#01415f] border-[#01415f]"
                                            : "text-gray-700 border-transparent hover:text-[#01415f] hover:border-[#01415f] hover:underline underline-offset-[6px] hover:decoration-[#01415f]"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${openIndexes.includes(index)
                                            ? "max-h-[200px] opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="mt-[3px] mb-[10px] text-[18px] text-[#01415f] leading-[1.6]">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:no-underline"
                                            >
                                                {item.label}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <button
                                onClick={() => setShowArchiveList(!showArchiveList)}
                                className="text-[#01415f] bg-white text-[30px] font-[600] pr-[60px] border-none border-b-2 border-[#01415f] hover:underline underline-offset-[6px] mb-[20px] hover:decoration-[#01415f] transition"
                            >
                                Արխիվային ընդհանուր դրույթներ և պայմաններ
                            </button>

                            <ul
                                ref={archiveRef}
                                style={{
                                    maxHeight: maxHeight,
                                    overflow: "hidden",
                                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                                    opacity: showArchiveList ? 1 : 0,
                                }}
                                className="mt-[6px] leading-[2] list-none pl-[20px] space-y-3"
                            >
                                {activeTabObj.content.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:no-underline transition"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
