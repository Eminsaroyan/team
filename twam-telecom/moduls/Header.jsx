import Hederone from "./Hederone";

export default function () {
  return (
    <div>
      <Hederone />
      <nav className="flex justify-evenly items-center mb-[20px] max-w-[1400px] pl-[160px] pr-[160px] pb-[5px] pt-[10px] m-auto  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
        <img
          src="https://www.telecomarmenia.am/img/logo.svg?v=1"
          alt="Logo"
          className="cursor-pointer"
        />
        <p className="cursor-pointer">Սակագներ</p>
        <p className="cursor-pointer">Ինտերնետ</p>
        <p className="cursor-pointer">Ծառայություններ</p>
        <p className="cursor-pointer">Ռոումինգ</p>
        <p className="cursor-pointer">Առցանց խանութ</p>
        <p className="cursor-pointer">Առաջարկներ</p>
        <p className="cursor-pointer">Օգնություն</p>
      </nav>
    </div>
  );
}
