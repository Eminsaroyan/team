export default function () {
    return (
        <div className="h-[45px] flex justify-around items-center bg-[#01415f] text-[#ffffff]">
            <div className="flex items-center">
                <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">Անհատներին</p>
                <p className="m-[5px] p-[12px]  hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">Բիզնես</p>
                <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000 flex items-center"><img src="./eshop-icon.svg" alt="" className="mr-[12px] " /> E-shop</p>
            </div>
            <div className="flex items-center ">
                <p className="m-[10px] border-l pl-[20px] border-r pr-[20px] border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000">Հայ</p>
                <p className="m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000">Рус</p>
                <p className="m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000">Eng</p>
                <p className="m-[5px] p-[12px] cursor-pointer hover:bg-[#0A6C9F] transition-colors duration-1000">Անձնական գրասենյակ</p>
            </div>
        </div>
    )
}