    export default function Mas({ image, mouth, name }) {
        return (
                <div className="flex flex-col items-start border border-[#9E9E9E] rounded-[12px] p-[12px] ">
                    <img src={image} alt="" className="w-full rounded-[12px]" />
                    <p className="mt-[6px] text-[#9E9E9E] text-[11px]">{mouth}</p>
                    <p className="text-[18px] font-medium mt-[6px]  leading-[24px]">
                        {name}
                    </p>
                </div>
        )
    }