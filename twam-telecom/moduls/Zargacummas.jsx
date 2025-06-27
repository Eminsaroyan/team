import { useState } from "react";

const zargacum = [
    {
        id: "handz",
        title: "Կայուն զարգացման հանձնառություն",
        content: [
            {
                label: "Հանձնառություն",
                links: [
                    { name: "Հանձնառություն", url: "https://www.telecomarmenia.am/file_manager/Sustainability-linked%20bond%20framework%20(final%202)/%D4%BF%D5%A1%D5%B5%D5%B8%D6%82%D5%B6%20%D5%A6%D5%A1%D6%80%D5%A3%D5%A1%D6%81%D5%B8%D6%82%D5%B4.pdf" },
                ]
            },
        ],
    },
    {
        id: "azd",
        title: "Ազդագիր",
        content: [
            {
                label: "Ազդագիր",
                links: [
                    { name: "Ազդագիր", url: "https://www.telecomarmenia.am/file_manager/Sustainability-linked%20bond%20framework%20(final%202)/prospectus_supplement_telecom_armenia_0.pdf" },
                ],
            },
        ],
    },
    {
        id: "zarg",
        title: "Կայուն զարգացման պարտատոմսերի հայեցակարգ",
        content: [
            {
                label: "Կայուն զարգացման պարտատոմսերի հայեցակարգ",
                links: [
                    { name: "Կայուն զարգացման պարտատոմսերի հայեցակարգ", url: "https://www.telecomarmenia.am/file_manager/Sustainability-linked%20bond%20framework%20(final%202)/Reviewed_SLB_Framework_ARM_tr.pdf" },
                ]
            },
        ],
    },
    {
        id: "gnahat",
        title: "Անկախ գնահատողի կարծիք",
        content: [
            {
                label: "Անկախ գնահատողի կարծիք",
                links: [
                    { name: "Անկախ գնահատողի կարծիք", url: "https://www.telecomarmenia.am/file_manager/Sustainability-linked%20bond%20framework%20(final%202)/Telecom%20Armenia%20Sustainability-Linked%20Bond%20Framework%20Second-Party%20Opinion_arm.pdf" },
                ]
            }
        ]
    },
    {
        id: "tox",
        title: "Թողարկման վերջնական պայմաններ",
        content: [
            {
                label: "Թողարկման վերջնական պայմաններ",
                links: [
                    { name: "Թողարկման վերջնական պայմաններ", url: "https://www.telecomarmenia.am/file_manager/Sustainability-linked%20bond%20framework%20(final%202)/Final%20Terms_AMD_arm.pdf", }
                ]
            }
        ]
    }
];

export default function Zargacummas() {
    const [activeTab, setActiveTab] = useState(zargacum[0].id);
    const [openIndexes, setOpenIndexes] = useState({});

    const activeTabObj = zargacum.find((tab) => tab.id === activeTab);

    const toggleIndex = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="max-w-[1230px] m-auto flex flex-col gap-6 pt-[40px] px-4">
            <h1 className="text-[45px] font-[600] font-team mb-[40px]">Կայուն զարգացում</h1>

            <div className="flex mb-[50px]">

                <div className="w-[300px] pr-[4rem]">
                    {zargacum.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setOpenIndexes({});
                            }}
                            className={`w-full text-left pl-[10px] pr-[20px] border-none py-[2rem]  rounded transition ${activeTab === tab.id
                                ? "bg-[#3fd0cf]/20 text-black font-semibold"
                                : "hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="flex-1 text-[18px] text-[#333] leading-relaxed">
                    <div className="flex flex-col gap-6">
                        {activeTabObj?.content.map((item, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => toggleIndex(index)}
                                    className={`text-[30px] font-[600] mb-[20px] w-full text-left border-none border-b-2 transition-colors duration-300 ${openIndexes[index]
                                        ? "text-[#01415f] border-[#01415f]"
                                        : "text-gray-700 border-transparent hover:text-[#01415f] hover:border-[#01415f] hover:underline underline-offset-[6px] hover:decoration-[#01415f]"
                                        }`}
                                >
                                    {item.label || "Բովանդակություն"}
                                </button>

                                <div
                                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${openIndexes[index]
                                        ? "max-h-[1000px] opacity-100 mt-2"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="text-[18px] text-[#01415f] mb-[20px] leading-[1.6] space-y-2">
                                        {item.text && <p>{item.text}</p>}
                                        {item.links?.map((link, i) => (
                                            <p key={i}>
                                                {" "}
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline text-blue-700 hover:no-underline transition"
                                                >
                                                    {link.name}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
