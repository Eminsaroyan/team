
import { Link } from 'react-router-dom';


export default function EshopNav() {
    return (
        <nav className="flex justify-evenly items-center m-[10px] bg-blue-600 text-white p-4 rounded">
            <img
                src="https://www.telecomarmenia.am/img/logo.svg?v=1"
                alt="Logo"
                className="cursor-pointer"
            />
            <Link to="/smartphones" className="cursor-pointer no-underline text-[#000000]">Սմարթֆոններ</Link>
            <Link to="/numbers" className="cursor-pointer no-underline text-[#000000]">Համարներ</Link>
            <Link to="/equipment" className="cursor-pointer no-underline text-[#000000]">Սարքավորումներ</Link>
            <Link to="/acs" className="cursor-pointer no-underline text-[#000000]">Աքսեսուարներ</Link>
            <Link to="/top-numbers" className="cursor-pointer no-underline text-[#000000]">Թոփ համարներ</Link>
            <Link to="/offers" className="cursor-pointer no-underline text-[#000000]">Ակցիաներ</Link>
        </nav>
    );
}