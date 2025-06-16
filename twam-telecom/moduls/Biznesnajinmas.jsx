export default function Bajin({ vernagir, text1, text2, text3,but, image, bg}) {
    return (
        <div className="flex justify-evenly items-center p-4 rounded-md shadow-md max-w-md mx-auto"
            style={{ backgroundImage:  `url(${bg})` }}>
            <div className="w-[30%]">
                <h1 className="text-[65px] font-[700px] mb-[30px] font-[700] text-[#ffffff] ">{vernagir}</h1>
                <p className="text-[26px] text-[#ffffff]  mb-[30px]">{text1}<br />{text2}<br />{text3}</p>
                <button className="pt-[15px] pb-[15px] font-bold pl-[80px] pr-[80px] border-none rounded-[12px] bg-[#ffffff] text-[#FF0000]">
                    {but}
                </button>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
}