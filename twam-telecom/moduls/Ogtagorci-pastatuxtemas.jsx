import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 
import { FaFileWord } from "react-icons/fa";

export default function OgtakarDocs() {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const fetchDocs = async () => {
            const colRef = collection(db, "Docs");
            const snapshot = await getDocs(colRef);
            const fetchedDocs = snapshot.docs.map((doc) => doc.data());
            setDocs(fetchedDocs);
        };

        fetchDocs();
    }, []);

    return (
        <div className="max-w-[1230px] m-auto mt-[30px] mb-[30px] px-4">
            <h1 className="text-[45px] font-[600] font-team mb-[30px]">
                Օգտակար փաստաթղթեր
            </h1>

            <ul className="grid grid-cols-2 gap-4 gap-x-[8rem] gap-y-[2rem] max-w-[1230px] bg-[#f7f8f9] text-[#707982] pt-[4rem] rounded-lg">
                {docs.map((doc, index) => (
                    <li
                        key={index}
                        className="flex w-[400px] items-center gap-[3rem] p-[3rem] rounded-lg bg-white hover:bg-[#eef1f4] hover:shadow-md transition duration-300 ease-in-out"
                    >
                        <FaFileWord className="w-[40px] h-[40px] flex-shrink-0 text-blue-600" />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#707982] no-underline text-[18px] hover:underline"
                        >
                            {doc.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
