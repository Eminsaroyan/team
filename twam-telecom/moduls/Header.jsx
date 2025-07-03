import Hederone from "./Hederone";

export default function () {
  return (
    <div>
      <Hederone />
      <nav className="flex items-center max-w-[1400px] pl-[160px] pr-[100px] pb-[5px] pt-[10px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] relative bg-white z-50">
        <img
          src="https://www.telecomarmenia.am/img/logo.svg?v=1"
          alt="Logo"
          className="cursor-pointer"
        />
        <ul className='list-none flex'>

          <li className="px-[36px] py-0 text-[#000000]">Սակագներ</li>
          <li className="px-[36px] py-0 text-[#000000]">Ինտերնետ</li>
          <li className="px-[36px] py-0 text-[#000000]">Ծառայություններ</li>
          <li className="px-[36px] py-0 text-[#000000]">Ռոումինգ</li>
          <li className="px-[30px] py-0 text-[#000000]">Առցանց խանութ</li>
          <li className="px-[36px] py-0 text-[#000000]">Առաջարկներ</li>
          <li className="px-[36px] py-0 text-[#000000]">Օգնություն</li>
        </ul>
      </nav>
    </div>
  );
}
